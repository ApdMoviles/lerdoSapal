import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BorronYCuentaNuevaPage } from './borron-y-cuenta-nueva.page';

describe('BorronYCuentaNuevaPage', () => {
  let component: BorronYCuentaNuevaPage;
  let fixture: ComponentFixture<BorronYCuentaNuevaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BorronYCuentaNuevaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BorronYCuentaNuevaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
