import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any = {};
  logo: string = "assets/applogo.jpg";
  hide = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password:  new FormControl('', [Validators.required, Validators.minLength(8)]),
        retypepassword: new FormControl('', [Validators.required,])
      }
    );
  }

  confirmPasswordMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (control.value !== matchingControl) {
        matchingControl.setErrors({ confirmPasswordMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  back() {
    this.router.navigate(['/login']);
  }

  submit() {
    this.router.navigate(['/todo']);
  }
}
