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
  
  usuario:string;
  correo:string;
  telefono:string;
  nombreUsuario:string;
  apellidosUsuario:string;

  ngOnInit() {
    this.usuario = localStorage.getItem("LUS_USUARIO")
    this.correo = localStorage.getItem("LUS_CORREO")
    this.telefono = localStorage.getItem("LUS_TELEFONO")
  }
}
