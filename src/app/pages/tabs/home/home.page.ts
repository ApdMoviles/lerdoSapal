import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  showOverlay: boolean = true;

  ngOnInit() {
  }

  swiperSlideChanged(e: any){
    console.log('Cambio a: ', e)
  }
}
