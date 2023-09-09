import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalShowPeoplePage } from './modal-show-people.page';

describe('ModalShowPeoplePage', () => {
  let component: ModalShowPeoplePage;
  let fixture: ComponentFixture<ModalShowPeoplePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalShowPeoplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
