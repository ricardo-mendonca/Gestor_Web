import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nova-despesa-page',
  templateUrl: './nova-despesa-page.component.html',
  styleUrls: ['./nova-despesa-page.component.css']
})
export class NovaDespesaPageComponent implements OnInit {
  public form!: FormGroup;
  public busy = false;
  public categoria$!: Observable<any[]>;
 
  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private data: DataService,
  
    ) { 
    this.form = this.fb.group({
      ds_descricao: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      id_categoria: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      vl_valor_parc: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      vl_valor_multa: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      vl_valor_desconto: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      dt_vencimento: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      fl_despesa_fixa: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      fl_pago: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      dt_pagamento: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      cd_qtd_tot_parc: ['', Validators.compose([
        Validators.minLength(2),
      ])]

    });
  }

  ngOnInit(): void {
    this.categoria$ =  this.data.getCategoria();

   
  }
  voltar(){
    this.router.navigate(['/despesa/consulta'])
  }

  submit(){
  console.log("Submit salvar");
    if(this.form.value.dt_pagamento == ""){this.form.value.dt_pagamento = '2099-01-01'} 
    if(this.form.value.vl_valor_multa == ""){this.form.value.vl_valor_multa = '0'} 
    if(this.form.value.vl_valor_desconto == ""){this.form.value.vl_valor_desconto = '0'}  
    if(this.form.value.vl_valor_parc == ""){this.form.value.vl_valor_parc = '1'}  
  
    console.log(this.form.value);
      this.busy = true;

      
    this
      .service
      .CreateDespesa(this.form.value)
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.toastr.success(data.message, 'Salvo com sucesso');
          this.router.navigate(['/despesa/consulta']);

        },
        (err) => {
          console.log(err);
          this.toastr.error(err.message, 'OPS!!!');
          this.busy = false;
        }
      )
  }
}
