import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { COLORS } from 'src/enums';
import { UsersPageComponent } from './users-page.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

describe('UsersPageComponent', () => {
  let component: UsersPageComponent;
  let fixture: ComponentFixture<UsersPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      declarations: [UsersPageComponent],
      providers: [MatSnackBar],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('colors should be defined', () => {
    expect(component.colors).toBeDefined();
  });

  it('colors should be equal to COLORS', () => {
    expect(component.colors).toBe(COLORS);
  });

  it('message should be defined', () => {
    expect(component.message).toBe('');
  });

  it(`message should be equal to ''`, () => {
    expect(component.message).toBe('');
  });
});
