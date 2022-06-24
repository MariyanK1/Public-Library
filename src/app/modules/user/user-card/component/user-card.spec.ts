import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { COLORS } from 'src/enums';
import { UserCardComponent } from './user-card.component';
import { EventEmitter } from '@angular/core';
import { USERS } from 'src/mock-data';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it(`hideMales should be boolean`, () => {
    expect(component.hideMales).toBeInstanceOf(Boolean);
  });

  it(`hideMales should be defined`, () => {
    expect(component.hideMales).toBeDefined();
  });

  it(`hideMales should be falsy`, () => {
    expect(component.hideMales).toBeFalse();
  });

  it(`colors to equal to COLORS enums`, () => {
    expect(component.colors).toBe(COLORS);
  });

  it(`colors to be defined`, () => {
    expect(component.colors).toBeDefined();
  });

  it(`colors to be truthy`, () => {
    expect(component.colors).toBeTruthy();
  });

  it(`user to be undefined`, () => {
    expect(component.user).toBeUndefined();
  });

  it(`showCard to be false`, () => {
    expect(component.showCard).toBeFalse();
  });

  it(`switchGender to be EventEmitter`, () => {
    expect(component.switchGender).toBeInstanceOf(EventEmitter);
  });

  it(`switchGender to be defined`, () => {
    expect(component.switchGender).toBeDefined();
  });

  it(`activateCard to be EventEmitter`, () => {
    expect(component.activateCard).toBeInstanceOf(EventEmitter);
  });

  it(`activateCard to be defined`, () => {
    expect(component.activateCard).toBeDefined();
  });

  it(`onClick to be defined`, () => {
    expect(component.onClick).toBeDefined();
  });

  it(`onClick to be function`, () => {
    expect(component.onClick).toBeInstanceOf(Function);
  });

  it(`onClick should emit User`, () => {
    spyOn(component.switchGender, 'emit');
    component.onClick(USERS[0]);
    expect(component.switchGender.emit).toHaveBeenCalledOnceWith(USERS[0]);
  });

  it('onActivate should be defined', () => {
    expect(component.onActivate).toBeDefined();
  });

  it('onActivate to be a function', () => {
    expect(component.onActivate).toBeInstanceOf(Function);
  });

  it('onActivate should emit User', () => {
    spyOn(component.activateCard, 'emit');
    component.onActivate(USERS[0]);
    expect(component.activateCard.emit).toHaveBeenCalledWith(USERS[0]);
  });
});
