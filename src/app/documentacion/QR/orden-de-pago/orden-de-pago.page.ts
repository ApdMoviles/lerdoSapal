import { Component, OnInit ,ViewChild} from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ConsumosService } from '../../../services/consumos.service';
//import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orden-de-pago',
  templateUrl: './orden-de-pago.page.html',
  styleUrls: ['./orden-de-pago.page.scss'],
})
export class OrdenDePagoPage implements OnInit {

  response: any;
  isEntrar: Boolean = false;

  nombre: any = "";
  correo: any = "";
  asunto: any = "";
  mensaje: any = "";
  iin_clave: any;
  respuesta: any;
  correcto: boolean;
  error: boolean;
  Qr_imagen: string;
  FOLIO: any;
  CIUDADADANO: any;
  Qr_concepto: any;
  FECHA: any;
  DOCUMENTO: any;
  ESTATUS: any;
  IMPORTE: any;
  corte: any;
  departamento: any;
  supervisor: any;
  contabilidad: any;
  corte_default: boolean;
  corte_jefe: boolean;
  sorteo: boolean;
  constructor(
    private _route: ActivatedRoute,
    public navCtrl: NavController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private consumoService: ConsumosService) { }

  ngOnInit() {
    this.isEntrar = false;
    this.iin_clave = this._route.snapshot.paramMap.get('FOLIO_CLAVE');
   this.check_datos_qr(this.iin_clave);
  }
  async check_datos_qr (iin_clave)
  {
    const loading = await this.loadingController.create({
      cssClass: 'my-loading-class',
      message: '<b>Cargando...</b>' 
    });
    await loading.present()
  
    this.respuesta = await this.consumoService.consulta_qr(iin_clave);
   
    await this.respuesta.forEach(async element => {
      if(element.codigo == 200 && element.QR_FOLIO != "") {  
       this.FOLIO= element.QR_FOLIO;
       this.CIUDADADANO= element.QR_CIUDADADANO;
       this.FECHA= element.QR_FECHA;
       this.DOCUMENTO= element.QR_DOCUMENTO;
       this.ESTATUS= element.QR_ESTATUS;
       this.IMPORTE= element.QR_IMPORTE;
       this.Qr_imagen = element.QR_IMAGEN;
       if(this.Qr_imagen == '' || this.Qr_imagen == undefined)
       {
  this.Qr_imagen = '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' 

}

debugger;
      this.corte= element.QR_CORTE;
      this.departamento= element.QR_DEPARTAMENTO;
      this.supervisor= element.QR_SUPERVISOR;
      this.contabilidad= element.QR_CONTABILIDAD;
      if(this.DOCUMENTO=='CORTE_DEPOSITADO'|| this.DOCUMENTO=='CORTE_CAJERO')
      {
        this.corte_default = true;
        this.corte_jefe = false;
        this.correcto = false;
        this.error = false;
      }
      else if(this.DOCUMENTO=='CORTE_JEFE_CAJAS') 
      {
    this.corte_jefe= true;
    this.corte_default = false;
    this.correcto = false;
    this.error = false;
      }
      else if(this.DOCUMENTO=='SORTEO SAPAL') 
      {
    this.corte_jefe= false;
    this.corte_default = false;
    this.correcto = false;
    this.error = false;
    this.sorteo = true;
      }
       else
       {
          this.error = false;
       this.correcto = true; 
       }
  
       
          } else {
            this.error = true;
            this.correcto = false;   
        
          }
       loading.dismiss();
    }); 
    
    loading.dismiss();
  }


  async login()
  {
    this.navCtrl.navigateBack("/inicio");
  }
  async ionViewDidLeave() { 
    const loading = await this.loadingController.create({
      cssClass: 'my-loading-class',
      message: '<b>Cargando...</b>' 
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
      message: '<b>Cargando...</b>' 
    });
    await loading.present();

    this.navCtrl.navigateRoot("ingresar");

    loading.dismiss(); 
  }
  async contacto() { 
    const loading = await this.loadingController.create({
      cssClass: 'my-loading-class',
      message: '<b>Cargando...</b>' 
    });
    await loading.present()

    try {
      if(this.nombre == "" || this.nombre == undefined) {
        const alert = await this.alertController.create({
          cssClass: 'my-alert-class',
          header: 'Advertencia',
          message: '<b>El Nombre completo esta vacío, o no cuenta con un formato valido.</b>',
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
          message: '<b>El Correo esta vacío, o no cuenta con un formato valido.</b>',
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
          message: '<b>El Correo esta vacío, o no cuenta con un formato valido.</b>',
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
          message: '<b>El Nombre completo esta vacío, o no cuenta con un formato valido.</b>',
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
          message: '<b>El Nombre completo esta vacío, o no cuenta con un formato valido.</b>',
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
            message: '<b>' + element.mensaje + '</b>',
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
            message: '<b>' + element.mensaje + '</b>',
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
        message: '<b>Hubo un problema con el servidor, inténtelo nuevamente</b>',
        buttons: ['OK']
      });
  
      await alert.present();

      loading.dismiss();
    }
  }
}