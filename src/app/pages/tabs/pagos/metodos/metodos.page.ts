import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController,AlertController, LoadingController, } from '@ionic/angular';

@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.page.html',
  styleUrls: ['./metodos.page.scss'],
})
export class metodosPage implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
    this.navCtrl.navigateRoot("auth");
  }

}
