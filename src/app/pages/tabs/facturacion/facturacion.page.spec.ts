import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { facturacion } from './facturacion.page';

describe('FacturacionPage', () => {
  let component: facturacion;
  let fixture: ComponentFixture<facturacion>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(facturacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
