import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-SEVAC',
  templateUrl: './SEVAC.page.html',
  styleUrls: ['./SEVAC.page.scss'],
})
export class SEVACPage implements OnInit {

  constructor(private themeSvc: ThemeService) { }
  darkMode: BehaviorSubject<boolean>;
  ngOnInit() {
    this.darkMode = this.themeSvc.darkMode
  }

}
