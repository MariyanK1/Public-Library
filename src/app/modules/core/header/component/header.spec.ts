import {
  ComponentFixture,
  TestBed,
  waitForAsync,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { routes } from 'src/app/app-routing.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let location: Location;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [HeaderComponent],
      providers: [HeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('h1 should contain `Public Library`', () => {
    const el: HTMLElement = fixture.nativeElement;
    const h1 = el.querySelector('h1');

    expect(h1?.textContent).toEqual('Public Library');
  });

  it('fakeAsync works', fakeAsync(() => {
    let promise = new Promise((resolve) => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to /rxjs', fakeAsync(() => {
    router.navigate(['/rxjs']).then(() => {
      expect(location.path()).toBe('/rxjs');
    });
  }));

  //   it('h1 should contain `Public Library`', () => {
  //     const el: HTMLElement = fixture.nativeElement;
  //     const logout = el.querySelector('.logout');

  //     expect(logout);
  //   });
});
