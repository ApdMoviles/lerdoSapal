import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { cuentaspublicasPage } from './cuentaspublicaspage';

describe('cuentaspublicasPage', () => {
  let component: cuentaspublicasPage;
  let fixture: ComponentFixture<cuentaspublicasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(cuentaspublicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
