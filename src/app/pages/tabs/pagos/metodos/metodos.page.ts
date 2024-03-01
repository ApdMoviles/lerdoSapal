import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NavController,AlertController, LoadingController, } from '@ionic/angular';

@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.page.html',
  styleUrls: ['./metodos.page.scss'],
})
export class metodosPage implements OnInit {

  constructor(public navCtrl: NavController,
    public domsanitizer:DomSanitizer,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private _route: ActivatedRoute
    ) { }
  expMask = [/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/];
  tarjetaMask = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];

  recibo: any = "";
  usuario: any = "";
  host:any="";
  correo: any = "";
  referencia: any = "";
  total: any = "";
  tarjeta: any = "";
  exp: any = "";
  tipotarjeta: any = "";
  tipo: any = "";

  url: any;
  info: any;
  depto: string = "NA";

  conc: string ="NA";
  url_array = [];
 ngOnInit() {
  console.log(this._route.snapshot.queryParams);
   
   // Acceder a los parámetros de consulta en lugar de parámetros de ruta
   this.recibo = this._route.snapshot.queryParams['recibo'];
   console.log(`Este es el recibo:${this.recibo}`);
   const ahora = new Date();
   const horas = String(ahora.getHours()).padStart(2, '0');
   const minutos = String(ahora.getMinutes()).padStart(2, '0');
   const segundos = String(ahora.getSeconds()).padStart(2, '0');
   this.referencia = this.recibo + horas + minutos + segundos;
   console.log(`Esto es la referencia ${this.referencia}`);
   this.total = this._route.snapshot.queryParams['total'];
   console.log(`Esto es el total ${this.total}`);
   this.usuario = localStorage.getItem("LUS_CLAVE");
   this.correo = localStorage.getItem("LUS_CORREO");
   var URL = 'https://api-sapal-pagos.herokuapp.com/form.php?TOTAL=' + String(this.total).replace('$', '') + '&DEPTO=' + this.depto + '&CONC=' + this.conc + '&FOLIO=' + this.recibo + '&REFERENCE=' + this.referencia + '&USUARIOAPD=' + localStorage.getItem('LUS_CLAVE') + '&CORREOAPD=' + localStorage.getItem('LUS_CORREO');
   this.url_array.push(URL);
   this.url = this.domsanitizer.bypassSecurityTrustResourceUrl(this.url_array[this.url_array.length - 1]);
  }

  validaTarjeta() { 
    if(this.tarjeta.charAt(0) == "4") {
      this.tipotarjeta = "VISA";
    } else if(this.tarjeta.charAt(0) == "5") {
      this.tipotarjeta = "MC";
    }
  }
  volver(){
    this.navCtrl.navigateBack("/pagos");

  }
  async go() {  
    const loading = await this.loadingController.create({
      cssClass: 'my-loading-class',
      message: '<b>Cargando...</b>' 
    });
    await loading.present()
debugger;
    let validatarjeta = this.tarjeta.indexOf("_");
    if(this.tarjeta == "" || validatarjeta >= 0) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Advertencia', 
        message: 'Tarjeta no capturada o con información errónea, revise la información capturada.',
        buttons: ['OK']
      }); 
      await alert.present(); 
      loading.dismiss();
      return;
    }
    let validaexp = this.exp.indexOf("_");
    if(this.exp == "" || validaexp >= 0) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Advertencia', 
        message: 'Expiración no capturada o con información errónea, revise la información capturada.',
        buttons: ['OK']
      }); 
      await alert.present();  
      loading.dismiss();
      return;
    } 
    if(this.tarjeta.charAt(0) == "4") {
      this.tipotarjeta = "VISA";
    } else if(this.tarjeta.charAt(0) == "5") {
      this.tipotarjeta = "MC";
    } 
    debugger;
    if(this.tipo == undefined || this.tipo == "") {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Advertencia', 
        message: 'Debe capturar el tipo de tarjeta, revise la información capturada.',
        buttons: ['OK']
      }); 
      await alert.present(); 
      loading.dismiss();
      return;
    }
    loading.dismiss();
    debugger;
    var myForm = <HTMLFormElement>document.getElementById('case_form');
    myForm.submit();
  }

}
