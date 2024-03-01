import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ConsumosService } from '../../../services/consumos.service';
import { ActivatedRoute } from '@angular/router';
//import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import * as QRCODE from 'qrcode'
@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.page.html',
  styleUrls: ['./contrato.page.scss'],
})
export class ContratoPage implements OnInit {



  @ViewChild('qrCanvas', {static: false}) qrCanvas: ElementRef;
  public valorQR = 'https://lerdosapal.mx/documentacion/QR/empleado/'+this._route.snapshot.paramMap.get('CEM_CLAVE');
  correcto: boolean = true;
  qr: boolean = true;
  error: boolean = false;
  foto: any;
  ngAfterViewInit() {
   // QRCODE.toCanvas(this.qrCanvas.nativeElement, this.valorQR);
    QRCODE.toCanvas(this.qrCanvas.nativeElement, this.valorQR, { width: 120 });
  }
  
  response: any;
  isEntrar: Boolean = false;

  nombre: any = "";
  correo: any = "";
  asunto: any = "";
  mensaje: any = "";
  CEM_CLAVE: any;
  respuesta: any;
  nombre_empleado: any;
  telefono: any;
  departamento: any;
  puesto: any;
  clave: any;
  estatus: any;
  activo: boolean;
  baja: boolean;
  constructor(public navCtrl: NavController,
    private _route: ActivatedRoute,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private consumoService: ConsumosService) { }

  async ngOnInit() {
    this.isEntrar = false;
    debugger;   
    this.CEM_CLAVE = this._route.snapshot.paramMap.get('CEM_CLAVE');
   await this.check_datos_qr(this.CEM_CLAVE);


  }
 
async check_datos_qr (CEM_CLAVE)
{
  const loading = await this.loadingController.create({
    cssClass: 'my-loading-class',
    message: '<b>Cargando...</b>' 
  });
  await loading.present()
  this.respuesta = await this.consumoService.consulta_qr_empleado(CEM_CLAVE);
  await this.respuesta.forEach(async element => {
    if(element.codigo == 200 ) { 
      this.qr = true; 
      this.correcto = true;
      this.error = false;
  this.nombre_empleado = element.CEM_NOMBRE; 
  this.departamento = element.CEM_DEP;
  this.puesto = element.CEM_PUESTO;
  this.clave = element.CEM_CLAVE;
  debugger;
  this.foto = element.CEM_FOTO;
  if(element.CEM_CLAVE = null || element.CEM_CLAVE == '')
  {
this.qr = false;
this.error = true;
this.correcto = false;
  }
  else
  {
    this.qr = true;
  }
  if(element.CEM_ESTATUS == 'SI')
  {
    this.estatus = 'ACTIVO';
    this.activo = true;
    this.baja = false;
  }
  else
  {
    this.estatus = 'BAJA';
    this.activo = false;
    this.baja = true;
  }




switch (this.departamento)
{


case 'COMERCIALIZACION':
  this.telefono = '(871)725-5817'+' '+'Ext. 116';
break;
case 'SINDICATO':
  this.telefono = '(871)725-5817'+' '+'Ext. 112';
break;
case 'SISTEMAS':
  this.telefono = '(871)725-5817'+' '+'Ext. 118';
break;
default:
  this.telefono = 'N/A'
}

/* if(element.CEM_TELEFONO == '')
  {
    this.telefono = 'N/A'
  }
  else
  {
this.telefono = element.CEM_TELEFONO;
  }*/







        }         
        else {
          this.correcto = false;
          this.error = true;
          this.qr = false;
        }
     loading.dismiss();
  }); 
  
  loading.dismiss();
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