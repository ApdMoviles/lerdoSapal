import { Component, OnInit, Input } from '@angular/core';
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

  darkMode: BehaviorSubject<boolean>;

  constructor(private themeSvc: ThemeService) {}
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
}
