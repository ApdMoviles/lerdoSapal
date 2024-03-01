import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  isEntrar: Boolean = false;


  constructor(
    public navCtrl: NavController,
    public loadingController: LoadingController,
    alertController: AlertController
  ) {}

  ngOnInit() {}
  
  goToqr(){
    this.navCtrl.navigateBack('tabs/pagos');
  }

  async ingresar() {
  
    this.isEntrar = true;
    const loading = await this.loadingController.create({
      cssClass: 'my-loading-class',
      message: '<b>Cargando...</b>',
    });
    await loading.present();

    this.navCtrl.navigateRoot('auth');

    loading.dismiss();
  }
}
