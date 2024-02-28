import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { metodosPage } from './metodos.page';

describe('metodosPage', () => {
  let component: metodosPage;
  let fixture: ComponentFixture<metodosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(metodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
