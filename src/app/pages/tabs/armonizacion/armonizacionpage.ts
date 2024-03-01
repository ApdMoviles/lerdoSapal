import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-armonizacion',
  templateUrl: './armonizacion.page.html',
  styleUrls: ['./armonizacion.page.scss'],
})
export class ArmonizacionPage implements OnInit {

  constructor(public navCtrl: NavController,) { }

  ngOnInit() {
  }
  irsevac(){
    this.navCtrl.navigateForward("tabs/armonizacion/sevac")
  }
  ircuentasp(){
    this.navCtrl.navigateForward("tabs/armonizacion/cuentasp")
  }
}
