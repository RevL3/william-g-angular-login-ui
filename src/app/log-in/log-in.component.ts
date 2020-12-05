import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent  {
  login = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    year: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.max(2000)])

  })

  constructor(private router: Router) { }

  onSubmitButton(): void {
    let navigationExtras:NavigationExtras = {
      queryParams: {
        email: this.login.value.email,
        firstName: this.login.value.firstName,
        lastName: this.login.value.lastName,
        year: this.login.value.year,
      }
    }
    this.router.navigate(['/logged-in'], navigationExtras)
  }

  ngOnInit(): void {
  }

}
