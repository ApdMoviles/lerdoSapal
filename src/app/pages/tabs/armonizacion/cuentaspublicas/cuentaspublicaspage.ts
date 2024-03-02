import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-cuentaspublicas',
  templateUrl: './cuentaspublicas.page.html',
  styleUrls: ['./cuentaspublicas.page.scss'],
})
export class cuentaspublicasPage implements OnInit {

  constructor(private themeSvc: ThemeService) { }
  darkMode: BehaviorSubject<boolean>;
  ngOnInit() {
    this.darkMode = this.themeSvc.darkMode
  }

}
