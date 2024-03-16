import { Component, OnInit,ViewChild,ElementRef, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Swiper } from 'swiper/types';
import { register } from 'swiper/element';
import { NavController,AlertController, LoadingController, } from '@ionic/angular';
import { ConsumosService } from 'src/app/services/consumos.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor( public loadingController: LoadingController,
    public alertController: AlertController,
    private consumoService: ConsumosService) { }


  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  response: any;


  nombre: any = "";
  correo: any = "";
  asunto: any = "";
  mensaje: any = "";
  showOverlay: boolean = true;
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  SwiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  goConocenos(){
      const elementList = document.querySelectorAll('.primer');
     const element = elementList[0] as HTMLElement;
     element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  goContactanos(){
    const elementList = document.querySelectorAll('.contactanos');
     const element = elementList[0] as HTMLElement;
     element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  images2 = [
    {
      image: 'assets/img2.jpg',
      text: 'SAPAL\nDigital',
      buttonText: ' Conoce más',
      buttonAction: 'goConocenos',
    },
    {
      image: 'assets/hero-bg.png',
      text: 'Paga tus servicios',
      subtitles: ['SERVICIO DE AGUA'],
    },
     {
      image: 'assets/img3.jpg',
      ImageSlide: 'assets/movil.png',
      text: 'Disponible en:',
      buttonText: ' Conoce más',
      buttonAction: 'goConocenos',
      secondButtonText: 'Descargar IOS',
      secondButtonAction: 'IOS',
      thirdButtonText: 'Descargar Android',
      thirdButtonAction: 'Android'
      
    },
    {
      image: 'assets/img4.jpg',
      text: 'Contáctanos',
      buttonText: ' Conoce más',
      buttonAction: 'goContactanos',
    },
  ];

  ngOnInit() {
  }

  swiperSlideChanged(e: any){
    console.log('Cambio a: ', e)
  }

  async contacto() { 
    const loading = await this.loadingController.create({
      cssClass: 'my-loading-class',
      message: 'Cargando...' 
    });
    await loading.present()

    try {
      if(this.nombre == "" || this.nombre == undefined) {
        const alert = await this.alertController.create({
          cssClass: 'my-alert-class',
          header: 'Advertencia',
          message: 'El Nombre completo esta vacío, o no cuenta con un formato valido.',
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
          message: 'El Correo esta vacío, o no cuenta con un formato valido.',
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
          message: 'El Correo esta vacío, o no cuenta con un formato valido.',
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
          message: 'El Nombre completo esta vacío, o no cuenta con un formato valido.',
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
          message: 'El Nombre completo esta vacío, o no cuenta con un formato valido.',
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
            message: '' + element.mensaje + '',
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
            message: '' + element.mensaje + '',
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
        message: 'Hubo un problema con el servidor, inténtelo nuevamente',
        buttons: ['OK']
      });
  
      await alert.present();

      loading.dismiss();
    }
  }
}
