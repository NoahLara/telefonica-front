import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SignIn } from 'src/app/utils/models/sign-in.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm = this.builder.group({
    UserName: this.builder.control('', Validators.required),
    Pass_Word: this.builder.control('', Validators.required)
  });

  signInInfo!: SignIn;


  constructor(private builder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }


  signIn(): void {

    this.signInInfo = {
      UserName: this.signInForm.get('UserName')?.value as string,
      Pass_Word: this.signInForm.get('Pass_Word')?.value as string
    }

    this.authService.signIn(this.signInInfo).subscribe(
      _res => {
        if (_res.token) {
          const token = _res.token;
          alert('Welcome!');

          localStorage.setItem('tokenKey', token);

          this.router.navigate(['/customers']);

        }
      },
      err => {
        console.log(err);
        alert(err.error.msg);
        this.signInForm.reset();
      }
    );

  }

}
