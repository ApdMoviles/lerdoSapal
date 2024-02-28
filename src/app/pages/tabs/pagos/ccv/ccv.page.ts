import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController,AlertController, LoadingController, } from '@ionic/angular';

@Component({
  selector: 'app-ccv',
  templateUrl: './ccv.page.html',
  styleUrls: ['./ccv.page.scss'],
})
export class ccvPage implements OnInit {
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
