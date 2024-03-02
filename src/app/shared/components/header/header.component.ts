import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() backButton: string;
  @Input() perfil: string;
  @Input() transparent: string;
  @Input() isModal: boolean;
  @Input() color: string;
  @Input() centerTitle: boolean;
  @Input() navbar: string;

  darkMode: BehaviorSubject<boolean>;

  constructor(private themeSvc: ThemeService,
    public navCtrl: NavController) {}
  click:boolean = false;
  ngOnInit() {
    this.color="primary-gradient"
    this.darkMode = this.themeSvc.darkMode
    this.perfil || this.backButton ? this.transparent=undefined : this.transparent = "a"
  }

  setTheme(darkMode: boolean) {
    this.click = true;
    this.themeSvc.setTheme(darkMode);
    this.click = false;
  }
  goHome(){
    this.click = true;
    this.navCtrl.navigateBack('tabs/home');
    this.click = false;
  }
  goUser(){
    this.click = true;
    this.navCtrl.navigateBack('tabs/perfil');
    this.click = false;
  }
  goPay(){
    this.click = true;
    this.navCtrl.navigateBack('tabs/pagos');
    this.click = false;
  }
  goArm(){
    this.click = true;
    this.navCtrl.navigateBack('tabs/armonizacion');
    this.click = false;
  }
  goFact(){
    this.click = true;
    this.navCtrl.navigateBack('tabs/facturacion');
    this.click = false;
  }
}
