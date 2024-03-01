import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { recuperarPage } from './recuperar.page';

describe('recuperarPage', () => {
  let component: recuperarPage;
  let fixture: ComponentFixture<recuperarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(recuperarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
