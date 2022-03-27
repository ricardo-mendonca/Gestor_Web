import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-despesa-page',
  templateUrl: './despesa-page.component.html',
  styleUrls: ['./despesa-page.component.css'],
})
export class DespesaPageComponent implements OnInit {
  public form!: FormGroup;
  public despesa$!: Observable<any>;
  public busy = false;

  constructor(
    private data: DataService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      //cd_mes: ['', Validators.compose([
      //  Validators.minLength(2),
      //])],
      //cd_ano: ['', Validators.compose([
      //  Validators.minLength(2),
      //])],
      cd_mes: [moment().format('MM')],
      cd_ano: [moment().format('YYYY')]
    });
  }

  ngOnInit() {

    this.submit();
  }

  submit() {
    this.busy = true;

    this.despesa$ = this.data.getDespesas(this.form.value);

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