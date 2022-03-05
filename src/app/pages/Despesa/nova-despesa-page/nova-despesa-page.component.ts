import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-despesa-page',
  templateUrl: './nova-despesa-page.component.html',
  styleUrls: ['./nova-despesa-page.component.css']
})
export class NovaDespesaPageComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }
  voltar(){
    this.router.navigate(['/despesa/consulta'])
  }
}
