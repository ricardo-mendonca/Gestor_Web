import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  public form!: FormGroup;
  
  constructor(
    
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      ds_nome: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])],
      ds_email: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.required
      ])],
      ds_telefone: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.required
      ])],
      cd_cpf: ['', Validators.compose([
  Validators.minLength(4),
  Validators.maxLength(20),
  Validators.required
])],
cd_rg: ['', Validators.compose([
  Validators.minLength(4),
  Validators.maxLength(20),
  Validators.required
])],
ds_senha: ['', Validators.compose([
  Validators.minLength(4),
  Validators.maxLength(20),
  Validators.required
])],
cd_cep: ['', Validators.compose([
  Validators.minLength(4),
  Validators.maxLength(20),
  Validators.required
])],
ds_endereco: ['', Validators.compose([
  Validators.minLength(4),
  Validators.maxLength(20),
  Validators.required
])],
nr_endereco: ['', Validators.compose([
  Validators.minLength(4),
  Validators.maxLength(20),
  Validators.required
])],
ds_complemento: ['', Validators.compose([
  Validators.minLength(4),
  Validators.maxLength(20),
  Validators.required
])],
ds_bairro: ['', Validators.compose([
  Validators.minLength(4),
  Validators.maxLength(20),
  Validators.required
])],
ds_cidade: ['', Validators.compose([
  Validators.minLength(4),
  Validators.maxLength(20),
  Validators.required
])],
cd_uf: ['', Validators.compose([
  Validators.minLength(4),
  Validators.maxLength(20),
  Validators.required
])],

    })
  }

  ngOnInit(): void {
  }

}
