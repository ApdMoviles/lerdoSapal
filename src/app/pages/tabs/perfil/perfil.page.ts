import { Component, OnInit, Input, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  NavController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { ConsumosService } from 'src/app/services/consumos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class perfilPage implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
    ]),
  });
  @Output() existe: boolean;
  constructor(
    public navCtrl: NavController,
    private consumoService: ConsumosService,
    public loadingController: LoadingController,
    public alertcontroller : AlertController
  ) {}
  
  response: any = '';
  ngOnInit() {
    this.existe=null
    localStorage.setItem("folio","")
  }
  ConvertirenMayusculas(event: any, cantidad: number) {
    let valor = event.target.value;
    if (valor.length > cantidad) {
      valor = valor.substring(0, cantidad);
    }
    this.form.controls.name.setValue(valor); // Actualiza el valor del input directamente
  }
  async buscarfolio() {
    this.existe=null
    const loading = await this.loadingController.create({
      cssClass: 'my-loading-class',
      message: 'Cargando...' 
    });
    await loading.present();
    this.response = await this.consumoService.postRecuperaPagos(
      this.form.controls.name.value
    );
    await this.response.forEach(async (element) => {
      if (element.codigo == 1) {
        this.existe=true
        localStorage.setItem("folio",this.form.controls.name.value.toString())
        this.form.controls.name.setValue(undefined)
        this.navCtrl.navigateForward("tabs/pagos/infopagos")
      }
      else{
        this.form.controls.name.setValue(undefined)
        const alert = await this.alertcontroller.create({
          cssClass: 'my-alert-class',
          header: 'No se encontro ninguna cuenta', 
          message: 'Intente nuevamente',
          buttons: ['OK']
        });
    
        await alert.present();
      }
    });
    loading.dismiss();
  }
}
