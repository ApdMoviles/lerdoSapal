import { Component, OnInit, Input, input,ViewChild,ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController, IonContent } from '@ionic/angular';
import { register } from 'swiper/element';
import { Swiper } from 'swiper/types';

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

  @Input() nav:string;
 
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  SwiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  swiperSlideChanged(e: any) {
    console.log('Diapositiva cambiada: ', e);
    let currentIndex = e.activeIndex;
    console.log('Índice actual de la diapositiva: ', currentIndex);
  }

  

  darkMode: BehaviorSubject<boolean>;

  constructor(private themeSvc: ThemeService,
    public navCtrl: NavController) {}
  click:boolean = false;
  ngOnInit() {
    this.color="primary-gradient"
    this.darkMode = this.themeSvc.darkMode
    this.perfil || this.backButton ? this.transparent=undefined : this.transparent = "a"
    console.log(this.nav)
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
