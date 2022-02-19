import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Despesa } from '../../model/despesa.model';

@Component({
  selector: 'app-despesa-page',
  templateUrl: './despesa-page.component.html',
  styleUrls: ['./despesa-page.component.css']
})
export class DespesaPageComponent implements OnInit {
  public despesa$!: Observable<Despesa[]>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.despesa$ =  this.data.getDespesas();
    
    
  }

}
