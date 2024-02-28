import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { infopagosPage } from './infopagos.page';

describe('infopagosPage', () => {
  let component: infopagosPage;
  let fixture: ComponentFixture<infopagosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(infopagosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
