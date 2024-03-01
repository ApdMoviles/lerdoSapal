import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SEVACPage } from './SEVACpage';

describe('SEVACPage', () => {
  let component: SEVACPage;
  let fixture: ComponentFixture<SEVACPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SEVACPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
