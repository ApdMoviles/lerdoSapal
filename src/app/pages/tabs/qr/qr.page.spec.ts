import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { qrPage } from './qr.page';

describe('qrPage', () => {
  let component: qrPage;
  let fixture: ComponentFixture<qrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(qrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
