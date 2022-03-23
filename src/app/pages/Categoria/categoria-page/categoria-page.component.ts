import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categoria-page',
  templateUrl: './categoria-page.component.html',
  styleUrls: ['./categoria-page.component.css']
})
export class CategoriaPageComponent implements OnInit {
  public categoria$!: Observable<any[]>;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.categoria$ =  this.data.getCategoria();
    
  }

}

