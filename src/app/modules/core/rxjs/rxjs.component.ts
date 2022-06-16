import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const users = {
      data: [
        {
          status: true,
          age: 1,
        },
        {
          status: false,
          age: 1,
        },
        {
          status: true,
          age: 17,
        },
        {
          status: false,
          age: 12,
        },
      ],
    };

    const observable = new Observable((subscriber) => {
      subscriber.next(users);
    }).pipe(
      map((value: any) => {
        console.log('1st map, ', value.data);
        return value.data;
      }),
      map((value: any) => {
        console.log('2nd map, ', value);
        return value.filter((user: any) => user.status);
      }),
      map((value: any) => {
        console.log('3rd map, ', value);
        return (
          value.reduce((sum: number, user: any) => sum + user.age, 0) /
          value.length
        );
      }),
      map((value: any) => {
        console.log('4th map, ', value);

        if (value < 18) {
          throw new Error('Average age is too young');
        }

        return value;
      })
    );

    const observer = {
      next: (v: any) => {
        console.log(`I have a value of ${v}`);
      },
      error: (v: any) => {
        console.error(`We got an ${v}`);
      },
      complete: () => {
        console.log('Observer is complete');
      },
    };

    observable.subscribe(observer);
  }
}
