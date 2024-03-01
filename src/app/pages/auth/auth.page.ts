import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController,AlertController, LoadingController, } from '@ionic/angular';
import { ConsumosService } from 'src/app/services/consumos.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  response: any;

  lusuario: any = "";
  lpassword: String = "";

  nombre: String = "";
  apellidos: string = "";
  correo: any = "";
  telefono: String = "";
  password: String = "";
  cpassword: String = "";

  rcorreo: any = "";

  passwordTypeInput  =  'password';
  iconpassword  =  'eye-off-outline';
  passwordTypeInput2  =  'password';
  iconpassword2  =  'eye-off-outline';
  passwordTypeInput3  =  'password';
  iconpassword3  =  'eye-off-outline';

  constructor(public navCtrl: NavController,
              public loadingController: LoadingController,
              public alertController: AlertController,
              private consumoService: ConsumosService) { }

  ngOnInit() {
    this.consumoService.gethost();
  } 
  async submit() { 
    const loading = await this.loadingController.create({
      cssClass: 'my-loading-class',
      message: 'Cargando...' 
    });
    await loading.present()
    this.lusuario = this.form.controls.email.value;
    this.lpassword = this.form.controls.password.value;
    try { 
      this.response = await this.consumoService.postLogear(this.lusuario, this.lpassword);
      await this.response.forEach(async element => {
        if(element.codigo == 1) {   
          localStorage.setItem("LUS_CLAVE",element.objetoResultado.LUS_CLAVE);
          localStorage.setItem("LUS_CORREO",element.objetoResultado.LUS_CORREO);
 
          if(element.objetoResultado.LUS_PERFIL == "SUPERADMIN"){
            this.navCtrl.navigateRoot("rpt-menu");
          } else if("USUARIO") {
            this.navCtrl.navigateRoot("tabs/pagos");
          }

          loading.dismiss();
        } else {
          const alert = await this.alertController.create({
            cssClass: 'my-alert-class',
            header: 'Error', 
            message: '' + element.mensaje + '',
            buttons: ['OK']
          });
      
          await alert.present();
    
          loading.dismiss();
        }
      }); 
    } catch (error) {
      const alert = await this.alertController.create({
        cssClass: 'my-alert-class',
        header: 'Error', 
        message: 'Hubo un problema con el servidor, inténtelo nuevamente',
        buttons: ['OK']
      });
  
      await alert.present();

      loading.dismiss();
    }
  }
}
