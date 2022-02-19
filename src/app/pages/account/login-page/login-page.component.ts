import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/usuario.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public form!: FormGroup;
  public busy = false;

  constructor(
    private service: DataService,
    private fb: FormBuilder
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

  ngOnInit(): void {
  }


  submit() {
    this
      .service
      .authenticate(this.form.value)
      .subscribe(
        (data: any) => {
          console.log(data);
          console.log(data.ds_nome);
          localStorage.setItem('gestor.token', data.token);
          localStorage.setItem('gestor.user', data.user.ds_nome);
        },
        (err) => {
          console.log(err)
        }
      );
  }


}
