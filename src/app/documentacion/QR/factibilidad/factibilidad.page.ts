import { Component, OnInit ,ViewChild} from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ConsumosService } from '../../../services/consumos.service';
//import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-factibilidad',
  templateUrl: './factibilidad.page.html',
  styleUrls: ['./factibilidad.page.scss'],
})
export class FactibilidadPage implements OnInit {

  response: any;
  isEntrar: Boolean = false;

  nombre: any = "";
  correo: any = "";
  asunto: any = "";
  mensaje: any = "";
  constructor(public navCtrl: NavController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private consumoService: ConsumosService) { }

  ngOnInit() {
    this.isEntrar = false;
  }
  async ionViewDidLeave() { 
    const loading = await this.loadingController.create({
      cssClass: 'my-loading-class',
      message: 'Cargando...' 
    });
    await loading.present();

    if(!localStorage.getItem("LUS_CLAVE") && this.isEntrar == false){
      if(localStorage.getItem("LUS_CLAVE") < "1" && this.isEntrar == false) { 
        this.navCtrl.navigateBack("/inicio");
      }
    }

    loading.dismiss();
  }
  async ingresar() { 
    debugger;
    this.isEntrar = true;
    const loading = await this.loadingController.create({
      cssClass: 'my-loading-class',
      message: 'Cargando...' 
    });
    await loading.present();

    this.navCtrl.navigateRoot("ingresar");

    loading.dismiss(); 
  }
  async contacto() { 
    const loading = await this.loadingController.create({
      cssClass: 'my-loading-class',
      message: 'Cargando...' 
    });
    await loading.present()

    try {
      if(this.nombre == "" || this.nombre == undefined) {
        const alert = await this.alertController.create({
          cssClass: 'my-alert-class',
          header: 'Advertencia',
          message: 'El Nombre completo esta vacío, o no cuenta con un formato valido.',
          buttons: ['OK']
        });
  
        await alert.present();
        loading.dismiss();
        return;
      } 
      //valdiacion correo
      if(this.correo == "" || this.correo == undefined) {
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
      if (reg.test(this.correo) && regOficial.test(this.correo)) {
      } else if (reg.test(this.correo)) {
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
      if(this.asunto == "" || this.asunto == undefined) {
        const alert = await this.alertController.create({
          cssClass: 'my-alert-class',
          header: 'Advertencia',
          message: 'El Nombre completo esta vacío, o no cuenta con un formato valido.',
          buttons: ['OK']
        });
  
        await alert.present();
        loading.dismiss();
        return;
      } 
      if(this.mensaje == "" || this.mensaje == undefined) {
        const alert = await this.alertController.create({
          cssClass: 'my-alert-class',
          header: 'Advertencia',
          message: 'El Nombre completo esta vacío, o no cuenta con un formato valido.',
          buttons: ['OK']
        });
  
        await alert.present();
        loading.dismiss();
        return;
      } 

      this.response = await this.consumoService.postContacto(this.nombre.toUpperCase(),this.correo,this.asunto.toUpperCase(),this.mensaje.toUpperCase());
      await this.response.forEach(async element => {
        if(element.codigo == 1) { 
          const alert = await this.alertController.create({
            cssClass: 'my-alert-class',
            header: 'Correo', 
            message: '' + element.mensaje + '',
            buttons: ['OK']
          });
      
          await alert.present();
    
          this.nombre = "";
          this.correo = "";
          this.asunto = "";
          this.mensaje = "";

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