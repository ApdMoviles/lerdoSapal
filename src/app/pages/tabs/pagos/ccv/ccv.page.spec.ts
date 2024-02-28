import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ccvPage } from './ccv.page';

describe('ccvPage', () => {
  let component: ccvPage;
  let fixture: ComponentFixture<ccvPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ccvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
