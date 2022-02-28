import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  public form!: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      ds_nome: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      ds_email: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      cd_cpf: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      cd_rg: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      ds_telefone: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      dt_nascimento: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      ds_senha: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      cd_cep: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      ds_endereco: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      nr_endereco: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      ds_complemento: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      ds_bairro: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      ds_cidade: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      cd_uf: ['', Validators.compose([
        Validators.minLength(2),
      ])]

    });
  }

  ngOnInit() {
  }

  Cadastrar() {
    this.busy = true;
    this
      .service
      .CreateUsuario(this.form.value)
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.toastr.success(data.message, 'Bem Vindo!');
          this.router.navigate(['/login']);

        },
        (err) => {
          console.log(err);
          this.toastr.error(err.message, 'OPS!!!');
          this.busy = false;
        }
      )
  }

}
