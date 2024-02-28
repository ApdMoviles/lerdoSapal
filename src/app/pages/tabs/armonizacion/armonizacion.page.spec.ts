import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ArmonizacionPage } from './armonizacionpage';

describe('ArmonizacionPage', () => {
  let component: ArmonizacionPage;
  let fixture: ComponentFixture<ArmonizacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArmonizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
