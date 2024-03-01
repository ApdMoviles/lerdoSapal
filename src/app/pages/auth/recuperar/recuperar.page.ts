import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utils/custom-validators';
import { NavController,AlertController, LoadingController, } from '@ionic/angular';
import { ConsumosService } from 'src/app/services/consumos.service';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class recuperarPage implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  response: any;

  rcorreo: any = "";

  constructor(public navCtrl: NavController,
              public loadingController: LoadingController,
              public alertController: AlertController,
              private consumoService: ConsumosService) { }


  ngOnInit() {
  }

  async submit() { 
    const loading = await this.loadingController.create({
      cssClass: 'my-loading-class',
      message: 'Cargando...' 
    });
    await loading.present()

    try {
      this.rcorreo = this.form.controls.email.value
      //valdiacion correo
      if(this.rcorreo == "" || this.rcorreo == undefined) {
        const alert = await this.alertController.create({
          cssClass: 'my-alert-class',
          header: 'Advertencia',
          message: 'El Correo esta vacío, o no cuenta con un formato valido.',
          buttons: ['OK']
        });
  
        await alert.present();
        loading.dismiss();
        return;
      } 
      var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var regOficial = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (reg.test(this.rcorreo) && regOficial.test(this.rcorreo)) {
      } else if (reg.test(this.rcorreo)) {
      } else {
        const alert = await this.alertController.create({
          cssClass: 'my-alert-class',
          header: 'Advertencia',
          message: 'El Correo esta vacío, o no cuenta con un formato valido.',
          buttons: ['OK']
        });
  
        await alert.present();
        loading.dismiss();
        return;
      }
      //valdiacion correo

      this.response = await this.consumoService.postRecuperaPassword(this.rcorreo);
      await this.response.forEach(async element => {
        if(element.codigo == 1) { 
          const alert = await this.alertController.create({
            cssClass: 'my-alert-class',
            header: 'Correcto', 
            message: '' + element.mensaje + '',
            buttons: ['OK']
          });
      
          await alert.present();
    
          this.rcorreo  = "";
          loading.dismiss();
          this.navCtrl.navigateBack("auth");
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
  // submit() {
  //   if (this.form.valid) {
  //     console.log(this.form.value);
  //   }
    
  // }

}
