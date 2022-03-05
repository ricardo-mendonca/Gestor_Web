import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Despesa } from '../../model/despesa.model';


@Component({
  selector: 'app-despesa-page',
  templateUrl: './despesa-page.component.html',
  styleUrls: ['./despesa-page.component.css'],
})
export class DespesaPageComponent implements OnInit {
  public despesa$!: Observable<any>;
  public form!: FormGroup;
  public busy = false;

  constructor(
    private data: DataService,
    private router: Router,
    private service: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({

      cd_mes: [moment().format('MM')],
      cd_ano: [moment().format('YYYY')]
    });
  }

  ngOnInit() {

    this.despesa$ = this.data.getDespesas(this.form.value);
  }

  submit() {
    console.log("teste");
    console.log(this.form.value);

    this.busy = true;
    this.despesa$ = this.data.getDespesas(this.form.value);
    this.busy = false;
  }

  baixar($event: any, despesa: Despesa) {
    console.log("geral");
    $event.preventDefault();
    (alert("deseja alterar para pago?" + despesa.ds_descricao + " - " + despesa.id));
    console.log("baixou");
  }

  deletar($event: any, despesa: Despesa) {
    console.log("geral");
    $event.preventDefault();
    (alert("deseja exluir?" + despesa.ds_descricao + " - " + despesa.id));
    console.log("baixou");
  }

  novaDespesa() {

    this.router.navigate(['/despesa/novadespesa'])

  }
}
