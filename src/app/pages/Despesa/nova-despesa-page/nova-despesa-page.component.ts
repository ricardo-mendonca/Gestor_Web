import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwIfEmpty } from 'rxjs';
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

  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      ds_descricao: new FormControl('', Validators.required),
      id_categoria: new FormControl('', Validators.required),
      vl_valor_parc: new FormControl('', Validators.required),
      vl_valor_multa: new FormControl(''),
      vl_valor_desconto: new FormControl(''),
      dt_vencimento: new FormControl('', Validators.required),
      fl_despesa_fixa: new FormControl('', Validators.required),
      fl_pago: new FormControl('', Validators.required),
      dt_pagamento: new FormControl(''),
      cd_qtd_tot_parc: new FormControl('')
    });

    this.categoria$ = this.data.getCategoria();
  }

  get ds_descricao() { return this.form.get('ds_descricao')! }
  get id_categoria() { return this.form.get('id_categoria')! }
  get vl_valor_parc() { return this.form.get('vl_valor_parc')! }
  get dt_vencimento() { return this.form.get('dt_vencimento')! }
  get fl_despesa_fixa() { return this.form.get('fl_despesa_fixa')! }
  get fl_pago() { return this.form.get('fl_pago')! }


  submit() {
    if (this.form.invalid) {
      return;
    }

    if (this.form.value.dt_pagamento == "") { this.form.value.dt_pagamento = '2099-01-01' }
    if (this.form.value.vl_valor_multa == "") { this.form.value.vl_valor_multa = '0' }
    if (this.form.value.vl_valor_desconto == "") { this.form.value.vl_valor_desconto = '0' }
    if (this.form.value.vl_valor_parc == "") { this.form.value.vl_valor_parc = '1' }

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
          this.toastr.error(err.message, 'OPS!!!');
          this.busy = false;
        }
      )
  }

  voltar() {
    this.router.navigate(['/despesa/consulta'])
  }

}
