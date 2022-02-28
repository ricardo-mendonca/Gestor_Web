import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/usuario.model';

import { DataService } from 'src/app/services/data.service';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public form!: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      ds_email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])],
      ds_senha: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.required
      ])]
    })
  }

  ngOnInit() {
    const token = Security.getToken();
    if (token) {
      this.busy = true;
      this
        .service
        .refreshToken()
        .subscribe(
          (data: any) => {
            this.busy = false;
            this.setUser(data.user, data.token);
          },
          (err) => {
            localStorage.clear();
            this.busy = false;
          }
        );
    }
  }


  submit() {
    this.busy=true;
    this
      .service
      .authenticate(this.form.value)
      .subscribe(
        (data: any) => {
          this.busy=false;
          this.setUser(data.user, data.token);         
        },
        (err) => {
          console.log(err);
          
          this.busy=false;
          this.toastr.error('usuário ou senha inválido!','OPS!!!!');
        }
      );
  }

  setUser(user: User,token: string){
       Security.set( user, token);
    this.router.navigate(['/'])
  }

}
