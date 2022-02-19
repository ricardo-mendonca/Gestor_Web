import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Despesa } from '../pages/model/despesa.model';

@Injectable({
    providedIn: 'root'
})
export class DataService{

    public url = 'https://localhost:44308/v1';

    constructor(private http: HttpClient){}

    authenticate(data: any){
        return this.http.post(`${this.url}/login`, data);
    }

    getCategoria(){
        return this.http.get<any[]>( `${this.url}/GetCategoria`)
    }

    getDespesas(){
        return this.http.get<Despesa[]>(`${this.url}/GetCategoria`)
    }
}


