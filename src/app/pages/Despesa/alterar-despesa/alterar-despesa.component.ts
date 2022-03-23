import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-alterar-despesa',
  templateUrl: './alterar-despesa.component.html',
  styleUrls: ['./alterar-despesa.component.css']
})
export class AlterarDespesaComponent implements OnInit {
  public form!: FormGroup;
  public busy = false;
  public categoria$!: Observable<any[]>;
  public despesa$!: Observable<any>;
  public idAtual: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private data: DataService,

  ) {
    this.form = this.fb.group({
      id: ['', Validators.compose([
        Validators.minLength(1),
      ])],
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
    this.categoria$ = this.data.getCategoria();

    this.idAtual = this.route.snapshot.params['id'];
    this.form.value.id = this.idAtual;
    this.form.value.cd_qtd_tot_parc = "0",
      this.form.value.ds_descricao = "0",
      this.form.value.dt_pagamento = "2021-01-01",
      this.form.value.dt_vencimento = "2021-01-01",
      this.form.value.fl_despesa_fixa = "0",
      this.form.value.fl_pago = "0",
      this.form.value.id_categoria = "0",
      this.form.value.vl_valor_desconto = "0",
      this.form.value.vl_valor_multa = "0",
      this.form.value.vl_valor_parc = "0"

    this.buscarDespesa(this.form.value);

  }

  buscarDespesa(data: any) {
    this.busy = true;
    this
      .service
      .GetDespesasId(data)
      .subscribe(
        (data: any) => {
          this.busy = false;
          console.log("datavencimento");
          

          
          var brDate2 = (data.dt_vencimento).split('-').reverse().join('/');
          console.log(data.dt_vencimento);
          console.log(brDate2);

          this.form.controls['ds_descricao'].setValue(data.ds_descricao);
          this.form.controls['id_categoria'].setValue(data.id_categoria);
          this.form.controls['vl_valor_parc'].setValue(data.vl_valor_parc);
          this.form.controls['vl_valor_multa'].setValue(data.vl_valor_multa);
          this.form.controls['vl_valor_desconto'].setValue(data.vl_valor_desconto);
          this.form.controls['dt_vencimento'].setValue(data.dt_vencimento);
          this.form.controls['dt_pagamento'].setValue(data.dt_pagamento) ;
          this.form.controls['fl_despesa_fixa'].setValue(data.fl_despesa_fixa);
          this.form.controls['fl_pago'].setValue(data.fl_pago);
          this.form.controls['dt_pagamento'].setValue(data.dt_pagamento);
          this.form.controls['cd_qtd_tot_parc'].setValue(data.cd_qtd_tot_parc);
          console.log(data);
        },
        (err) => {
          console.log(err);
          this.busy = false;
        }
      );
  }

  voltar() {
    this.router.navigate(['/despesa/consulta'])
  }

  submit() {
    console.log("Submit salvar");

    //



    console.log("Submit salvar");
    if (this.form.value.dt_pagamento == "") { this.form.value.dt_pagamento = '2099-01-01' }
    if (this.form.value.vl_valor_multa == "") { this.form.value.vl_valor_multa = '0' }
    if (this.form.value.vl_valor_desconto == "") { this.form.value.vl_valor_desconto = '0' }
    if (this.form.value.vl_valor_parc == "") { this.form.value.vl_valor_parc = '1' }

    console.log(this.form.value);
    this.busy = true;


    this
      .service
      .UpdateDespesa(this.form.value)
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
