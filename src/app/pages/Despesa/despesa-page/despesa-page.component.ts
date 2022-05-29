import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Despesa } from '../../model/despesa.model';
import { ResumoDespesa } from '../../model/resumoDespesa.model';

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
  resumos: ResumoDespesa[] = [];

  constructor(
    private data: DataService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      cd_mes: [localStorage.getItem('gestor.mes')],
      cd_ano: [localStorage.getItem('gestor.ano')]
      
    });
  }

  ngOnInit() {
    this.submit();

  }

  submit() {
    this.vlTotalPago=0;
    this.vlTotalAberto=0;
    this.busy = true;

    localStorage.setItem('gestor.mes', this.form.value.cd_mes);
    localStorage.setItem('gestor.ano', this.form.value.cd_ano);

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
    this.GetResumo();
    this.busy = false;
    
  }

  GetResumo(){
    this.data.getResumo(this.form.value).subscribe((x) => {
      
      this.resumos = x;
      console.log("arquivo X");   
      console.log(x);   
    });
   
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




