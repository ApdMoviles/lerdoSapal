import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController,AlertController, LoadingController, } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ConsumosService } from 'src/app/services/consumos.service';


@Component({
  selector: 'app-infopagos',
  templateUrl: './infopagos.page.html',
  styleUrls: ['./infopagos.page.scss'],
})
export class infopagosPage implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  constructor(public NavCtrl: NavController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private consumoService: ConsumosService,
    public domsanitizer: DomSanitizer,) { }
  isBusqueda: Boolean = false;
  isInfo: Boolean = false;
  isPago: Boolean = false;
  isPagado: Boolean = false;
  isMovil: Boolean = false;
  


  web: Boolean = false;
  android: Boolean = false;


  response: any; 
  clave: any = "34941";
  ciudadano = "";
  direccion = "";
  colonia = "";
  ciudad = "";
  estado = "";
  periodo = "";
  total = "";
  estatus = "";
  recibo = "";
 
  url: any = "";
  adeudos: any;
  extraccion: any;
  uso_drenaje: any;
  subsidio: any;
  credito_redondeo: any;
  cargo_redondeo: any;
  descuento_insen: any;
  recargos: any;
  mensaje: any;
  subtotal : any;
  descuento: any;
  pag_convenio: any;
  async ngOnInit() {
    const loading = await this.loadingController.create({
      cssClass: 'my-loading-class',
      message: '<b>Cargando...</b>' 
    });
    await loading.present();
 debugger;
    try {
      this.response = await this.consumoService.postRecuperaPagos(this.clave);
      await this.response.forEach(async element => {
        if(element.codigo == 1) {  
          this.ciudadano = element.objetoResultado.PAG_CIUDADANO;
          this.direccion = element.objetoResultado.PAG_DIRECCION;
          this.colonia = element.objetoResultado.PAG_COLONIA;
          this.ciudad = element.objetoResultado.PAG_CIUDAD;
          this.estado = element.objetoResultado.PAG_ESTADO;
          this.periodo = element.objetoResultado.PAG_PERIODO;
debugger;

            if(element.objetoResultado.PAG_PAGO_CONVENIO > 1)
            {
              this.total = element.objetoResultado.PAG_PAGO_CONVENIO;
            }
            else
            {
            this.total = element.objetoResultado.PAG_TOTAL_RECIBO;
            }

          
          this.estatus = element.objetoResultado.PAG_COBRO_ESTATUS;
          this.recibo = element.objetoResultado.PAG_RECIBO;
          this.pag_convenio = element.objetoResultado.PAG_PAGO_CONVENIO;

          this.extraccion = element.ListaResultado.SCT_EXTRACCION;
          this.uso_drenaje = element.ListaResultado.SCT_USODRENAJE;
          this.subsidio= element.ListaResultado.SCT_SUBSIDIO;
          this.credito_redondeo = element.ListaResultado.SCT_CREDITOREDONDEO;
          this.cargo_redondeo = element.ListaResultado.SCT_CARGOREDONDEO;
          this.recargos = element.ListaResultado.SCT_RECARGOS;
          this.adeudos = element.ListaResultado.SCT_ADEUDO;
          //this.mensaje= element.ListaResultado.SCT_MENSAJE;


          this.descuento_insen = element.ListaResultado.SCT_DESCUENTO_INSEN;
         if(element.ListaResultado.SCT_MENSAJE == " "){
            this.mensaje=''
            
          }else{
            this.mensaje='AVISO:'+ element.ListaResultado.SCT_MENSAJE;
          }
         
          
          debugger;
 
              if ((this.descuento_insen * -1) > 0)
          {
            this.subtotal = element.objetoResultado.PAG_TOTAL_RECIBO + (this.descuento_insen * -1);
            this.descuento = (this.descuento_insen * -1);
          }
          if ((this.subsidio * -1) > 0)
          { 
   this.subtotal = element.objetoResultado.PAG_TOTAL_RECIBO + (this.subsidio * -1);
   this.descuento = (this.subsidio * -1);
          }
          

            if(  (this.descuento_insen * -1) <= 0  &&  (this.subsidio * -1) <= 0  )
            {

              this.subtotal = element.objetoResultado.PAG_TOTAL_RECIBO;
              this.descuento = 0;
            }
          


          this.isBusqueda = false;
          this.isInfo = true;
          this.isPago = false;

          if(this.estatus == "COBRADA") {
            this.isPagado = true;
          } else {
            this.isPagado = false;
          }

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

  pagar() { 
    debugger;
    //this.url = "https://webhooks.lerdodigital.mx/SAPALform.php?TOTAL="+ this.total +"&DEPTO=00&CONC=0000&FOLIO="+ this.clave +"&REFERENCE="+ this.clave +"&USUARIOAPD="+ localStorage.getItem("LUS_CLAVE") +"&CORREOAPD=pacogurrola@hotmail.com";
    this.url = "/metodos/" + this.clave + "/" + this.total;
    //const URL = this.url; 
    //this.url = this.domsanitizer.bypassSecurityTrustResourceUrl(URL);
    

    this.isBusqueda = false;
    this.isInfo = false;
    this.isPago = true;  
  }
  async volver() {
    const loading = await this.loadingController.create({
      cssClass: 'my-loading-class',
      message: '<b>Cargando...</b>' 
    });
    await loading.present()
    
    this.NavCtrl.navigateRoot("tabs/pagos");

    loading.dismiss();
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
    this.NavCtrl.navigateRoot("auth");
  }

}
