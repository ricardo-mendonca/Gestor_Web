import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Despesa } from '../pages/model/despesa.model';

@Injectable({
    providedIn: 'root'
})
export class DataService{
    subscribe(arg0: (data: any) => void, arg1: () => void) {
      throw new Error('Method not implemented.');
    }

    public url = 'https://localhost:44308/v1';

    constructor(private http: HttpClient){}

public composeHeaders() {
    const token= localStorage.getItem('gestor.token');
    const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
    return headers;
}


    authenticate(data: any){
        return this.http.post(`${this.url}/login`, data);
    }

    
    
    refreshToken(){
        return this.http.post(`${this.url}/refresh-token`, 
            null,
            { headers: this.composeHeaders() });
    }

    getCategoria(){
        return this.http.get<any[]>( `${this.url}/GetCategoria`)
    }

    getDespesas(){
        return this.http.get<Despesa[]>(`${this.url}/GetCategoria`)
    }

    CreateUsuario(data: any){
       
        data.cd_cpf = data.cd_cpf.replace('.', '').replace('.', '').replace('-', '') ;
  
        console.log('cadastrar');
        console.log(data);
  
          return this.http.post(`${this.url}/CreateUsuario`, data);
      }


      resetPassword(data: any){
        return this.http.post(`${this.url}/ResetPassword`, data);
      }
}


