import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {

  email: string = ''
  password: string = ''
  confirmPassword: string = ''

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register() {

    if (this.email === '') {
      alert('Email is required!')
      return
    }

    if (this.password === '') {
      alert('Password is required!')
      return
    }

    if (this.confirmPassword === '') {
      alert('Confirm password is required!')
      return
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    alert('Registration successful!')
    this.router.navigate(['/login']);

    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

}
