import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-header-module',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public showForm: boolean = true;

  constructor(private fb: FormBuilder) {}

  public addUser = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    sex: [''],
    contacts: this.fb.group({
      phone: [''],
      email: ['', Validators.required],
    }),
    address: this.fb.group({
      country: [''],
      city: [''],
      street: [''],
      state: [''],
      zipCode: [''],
    }),
    books: this.fb.group({
      bookName: [''],
      author: [''],
    }),
  });

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSubmit() {
    console.log(this.addUser.status);
    if (this.addUser.status === 'VALID') {
    }
  }
}
