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
  wrongs:number = 0;


  constructor(public navCtrl: NavController,
              public loadingController: LoadingController,
              public alertController: AlertController,
              private consumoService: ConsumosService) { }

  ngOnInit() {
    localStorage.clear();
  } 

  limitarCaracteresMin(event: any, cantidad: number) {
    let valor = event.target.value;
    if (valor.length > cantidad) {
      valor = valor.substring(0, cantidad);
    }
    this.form.controls.email.setValue(valor.toLowerCase()); // Actualiza el valor del input directamente
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
          console.log(element)   
          localStorage.setItem("LUS_CLAVE",element.objetoResultado.LUS_CLAVE);
          localStorage.setItem("LUS_CORREO",element.objetoResultado.LUS_CORREO);
          localStorage.setItem("LUS_NOMBRE",element.objetoResultado.LUS_NOMBRE);
          localStorage.setItem("LUS_APELLIDOS",element.objetoResultado.LUS_APELLIDOS);
          localStorage.setItem("LUS_USUARIO",element.objetoResultado.LUS_USUARIO);
          localStorage.setItem("LUS_TELEFONO",element.objetoResultado.LUS_TELEFONO);
 
          if(element.objetoResultado.LUS_PERFIL == "SUPERADMIN"){
            this.navCtrl.navigateRoot("rpt-menu");
          } else if("USUARIO") {
            this.navCtrl.navigateRoot("tabs/pagos");
          }

          loading.dismiss();
        } else {
          loading.dismiss();
          const alert = await this.alertController.create({
            cssClass: 'my-alert-class',
            header: 'Error', 
            message: '' + element.mensaje + '',
            buttons: ['OK']
          });
      
          await alert.present();
          this.wrongs+=1;
        }
      }); 
    } catch (error) {
      const alert = await this.alertController.create({
        cssClass: 'my-alert-class',
        header: 'Error', 
        message: 'Hubo un problema con el servidor, inténtelo nuevamente',
        buttons: ['OK']
      });
  

      loading.dismiss();
    }
  }
}
