import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
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
  public dt_vencimento:any;
  public dt_pagamento:any;

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
        Validators.minLength(1),
      ])],
      cd_qtd_parc: ['', Validators.compose([
        Validators.minLength(1),
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
      this.form.value.cd_qtd_parc = "0"
      
    this.buscarDespesa(this.form.value);

  }

  getFormataPreco(price: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
}

  buscarDespesa(data: any) {
    this.busy = true;
    this
      .service
      .GetDespesasId(data)
      .subscribe(
        (data: any) => {
          this.busy = false;
        
         
          //verifica se foi pago 
          if(moment(data.dt_pagamento).format("DD/MM/YYYY") != '01/01/2100'){
            this.form.controls['dt_pagamento'].setValue(data.dt_pagamento) ;            
          }

          this.dt_vencimento = (moment(data.dt_vencimento).format("DD/MM/yyyy"));
          this.dt_vencimento =(moment(data.dt_vencimento).format("DD/MM/yyyy"));

          this.form.controls['ds_descricao'].setValue(data.ds_descricao);
          this.form.controls['id_categoria'].setValue(data.id_categoria);
          this.form.controls['vl_valor_parc'].setValue(this.getFormataPreco(data.vl_valor_parc));
          this.form.controls['vl_valor_multa'].setValue(this.getFormataPreco(data.vl_valor_multa));
          this.form.controls['vl_valor_desconto'].setValue(this.getFormataPreco(data.vl_valor_desconto));
          this.form.controls['fl_despesa_fixa'].setValue(data.fl_despesa_fixa);
          this.form.controls['fl_pago'].setValue(data.fl_pago);
          this.form.controls['cd_qtd_tot_parc'].setValue(data.cd_qtd_tot_parc);
          this.form.controls['cd_qtd_parc'].setValue(data.cd_qtd_parc);
       
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
    this.busy = true;
    console.log("Submit salvar");
    //if (this.form.value.dt_pagamento == "") { this.form.value.dt_pagamento = '2099-01-01' }
    //if (this.form.value.vl_valor_multa == "") { this.form.value.vl_valor_multa = '0' }
    //if (this.form.value.vl_valor_desconto == "") { this.form.value.vl_valor_desconto = '0' }
    //if (this.form.value.vl_valor_parc == "") { this.form.value.vl_valor_parc = '1' }

    console.log(this.form.value);
    
    this.busy = false;

    

  }
}
