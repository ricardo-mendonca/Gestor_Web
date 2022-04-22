import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { despesa } from 'src/app/models/despesa.model';
import { DataService } from 'src/app/services/data.service';
import { Despesa } from '../../model/despesa.model';

@Component({
  selector: 'app-despesa-page',
  templateUrl: './despesa-page.component.html',
  styleUrls: ['./despesa-page.component.css'],
})
export class DespesaPageComponent implements OnInit {
  public form!: FormGroup;
  public vlTotalPago: any;
  public vlTotalAberto: any;
  public busy = false;
  despesas: Despesa[] = [];


  constructor(
    private data: DataService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      cd_mes: [moment().format('MM')],
      cd_ano: [moment().format('YYYY')]
    });
  }

  ngOnInit() {
    this.submit();
  }

  submit() {
    this.vlTotalPago=0;
    this.vlTotalAberto=0;
    this.busy = true;

    this.data.getDespesas(this.form.value)
    .subscribe((x) => {
      this.despesas = x;
      this.despesas.forEach(despesas => {
        if(despesas.fl_pago =="1"){
          this.vlTotalPago += despesas.vl_valor_parc;
        }
        else{
          this.vlTotalAberto +=  despesas.vl_valor_parc;
        }
      });
    });
    this.busy = false;
  }

  novaDespesa() {
    this.router.navigate(['/despesa/novadespesa'])
  }

  editar(_despesa: any) {
    this.router.navigate(['/despesa/alterardespesa', _despesa.id])
  }

  getFormataPreco(price: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  }
}


