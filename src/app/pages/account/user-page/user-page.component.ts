import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  public form: FormGroup;
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
      cd_cpf: [{value:'', disabled: true}],
      cd_rg: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      ds_telefone: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      dt_nascimento: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      ds_senha: [{value:'', disabled: true}],
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
    this.busy = true;
    this
      .service
      .getUsuario()
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.form.controls['ds_nome'].setValue(data.ds_nome);
          this.form.controls['ds_email'].setValue(data.ds_email);          
          this.form.controls['cd_cpf'].setValue(data.cd_cpf);          
          this.form.controls['cd_rg'].setValue(data.cd_rg);          
          this.form.controls['ds_telefone'].setValue(data.ds_telefone);          
          this.form.controls['dt_nascimento'].setValue(data.dt_nascimento);          
          this.form.controls['ds_senha'].setValue(data.ds_senha);          
          this.form.controls['cd_cep'].setValue(data.cd_cep);          
          this.form.controls['ds_endereco'].setValue(data.ds_endereco);          
          this.form.controls['nr_endereco'].setValue(data.nr_endereco);        
          this.form.controls['ds_complemento'].setValue(data.ds_complemento);          
          this.form.controls['ds_bairro'].setValue(data.ds_bairro);
          this.form.controls['ds_cidade'].setValue(data.ds_cidade);          
          this.form.controls['cd_uf'].setValue(data.cd_uf);
        },
        (err) => {
          console.log(err);
          this.busy = false;
        }
      );
  }

  submit() {
    this.busy = true;
    this
      .service
      .updateUsuario(this.form.value)
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.toastr.success(data.message, 'Atualização Completa!');
        },
        (err) => {
          this.toastr.error(err.error.message, 'OPS!!!');
          this.busy = false;
        }
      );
  }

}