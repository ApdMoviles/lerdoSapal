import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utils/custom-validators';
import { NavController,AlertController, LoadingController, } from '@ionic/angular';
import { ConsumosService } from 'src/app/services/consumos.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl(''),
  });

  response: any;

  lusuario: any = "";
  lpassword: String = "";

  nombre: String = "";
  apellidos: string = "";
  correo: any = "";
  telefono: String = "";
  password: String = "";
  cpassword: String = "";

  rcorreo: any = "";

  passwordTypeInput  =  'password';
  iconpassword  =  'eye-off-outline';
  passwordTypeInput2  =  'password';
  iconpassword2  =  'eye-off-outline';
  passwordTypeInput3  =  'password';
  iconpassword3  =  'eye-off-outline';

  constructor(public navCtrl: NavController,
              public loadingController: LoadingController,
              public alertController: AlertController,
              private consumoService: ConsumosService) { }


  ngOnInit() {
    this.confirmPasswordValidator()
  }

  async submit() {

    this.nombre = this.form.controls.name.value
    this.apellidos = this.form.controls.lastname.value
    this.correo = this.form.controls.email.value
    this.telefono = this.form.controls.phone.value
    this.password = this.form.controls.password.value
    this.cpassword = this.form.controls.confirmPassword.value

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
          message: 'El Nombre esta vacío, favor de revisar la información capturada.',
          buttons: ['OK']
        });
  
        await alert.present();
        loading.dismiss();
        return;
      } 
      if(this.apellidos == "" || this.apellidos == undefined) {
        const alert = await this.alertController.create({
          cssClass: 'my-alert-class',
          header: 'Advertencia',
          message: 'El apellido esta vacío, favor de revisar la información capturada.',
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
      let tel = this.telefono.replace(/ /g, "");
      this.telefono = tel;
      if(this.telefono == undefined || this.telefono == '' || this.telefono.length < 10) {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Advertencia',
          message: 'El teléfono esta vacío, o no cuenta con un formato valido.',
          buttons: ['OK']
        });

        await alert.present();
        loading.dismiss();
        return;
      }
      if(this.password == "" || this.password == undefined) {
        const alert = await this.alertController.create({
          cssClass: 'my-alert-class',
          header: 'Advertencia',
          message: 'La conraseña esta vacía, favor de revisar la información capturada.',
          buttons: ['OK']
        });
  
        await alert.present();
        loading.dismiss();
        return;
      } 
      if(this.cpassword == "" || this.cpassword == undefined) {
        const alert = await this.alertController.create({
          cssClass: 'my-alert-class',
          header: 'Advertencia',
          message: 'El contraseña para confirmar esta vacía, favor de revisar la información capturada.',
          buttons: ['OK']
        });
  
        await alert.present();
        loading.dismiss();
        return;
      } 
      if(this.password != this.cpassword) {
        const alert = await this.alertController.create({
          cssClass: 'my-alert-class',
          header: 'Advertencia',
          message: 'Las contraseñas no coinciden, favor de revisar la información capturada.',
          buttons: ['OK']
        });
  
        await alert.present();
        loading.dismiss();
        return;
      }
      this.response = await this.consumoService.postGuardaUsuario(0,
                                                                  this.nombre.toUpperCase(),
                                                                  this.apellidos.toUpperCase(),
                                                                  this.correo,
                                                                  this.telefono,
                                                                  this.password);
        
      await this.response.forEach(async element => {
        if(element.codigo == 1) {
          const alert = await this.alertController.create({
            cssClass: 'my-alert-class',
            header: 'Correcto', 
            message: '' + element.mensaje + '',
            buttons: ['OK']
          }); 
          await alert.present();

          this.nombre = "";
          this.apellidos = "";
          this.correo = "";
          this.telefono = "";
          this.password = "";
          this.cpassword = "";
      
          loading.dismiss(); 

          this.navCtrl.navigateBack("auth");
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

  confirmPasswordValidator(){
    this.form.controls.confirmPassword.setValidators([
      Validators.required,
      CustomValidators.matchValues(this.form.controls.password)
    ])

    this.form.controls.confirmPassword.updateValueAndValidity();
  }

  // submit() {
  //   if (this.form.valid) {
  //     console.log(this.form.value);
  //   }
    
  // }

}
