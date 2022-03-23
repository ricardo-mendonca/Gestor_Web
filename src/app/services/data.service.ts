import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Despesa } from '../pages/model/despesa.model';
import { Security } from '../utils/security.util';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    subscribe(arg0: (data: any) => void, arg1: () => void) {
        throw new Error('Method not implemented.');
    }

    public url = 'https://localhost:44308/v1';

    constructor(private http: HttpClient) { }

    public composeHeaders() {
        const token = Security.getToken();
        const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
        return headers;
    }

    //#region Login account

    CreateUsuario(data: any) {
        data.cd_cpf = data.cd_cpf.replace('.', '').replace('.', '').replace('-', '');
        return this.http.post(`${this.url}/CreateUsuario`, data);
    }

    authenticate(data: any) {
        return this.http.post(`${this.url}/login`, data);
    }

    refreshToken() {
        return this.http.post(`${this.url}/refresh-token`,
            null,
            { headers: this.composeHeaders() });
    }

    resetPassword(data: any) {
        return this.http.post(`${this.url}/ResetPassword`, data);
    }

    getUsuario() {
        return this.http.get(`${this.url}/getUsuario`, { headers: this.composeHeaders() });
    }

    updateUsuario(data: any) {
        return this.http.put(`${this.url}/updateUsuario`, data, { headers: this.composeHeaders() });
    }
    //#endregion

    //#region Categoria
    getCategoria() {
        return this.http.get<any[]>(`${this.url}/GetCategoria`)
    }

    //#endregion

    //#region DESPESAS

    getDespesas(data: any) {

        return this.http.post(`${this.url}/GetDespesas`, data, { headers: this.composeHeaders() });
    }

    CreateDespesa(data: any) {

        data.vl_valor_parc = data.vl_valor_parc.replace('.', '').replace('.', '').replace(',', '.');
        data.vl_valor_multa = data.vl_valor_multa.replace('.', '').replace('.', '').replace(',', '.');
        data.vl_valor_desconto = data.vl_valor_desconto.replace('.', '').replace('.', '').replace(',', '.');

        //console.log(data);

        return this.http.post(`${this.url}/CreateDespesa`, data, { headers: this.composeHeaders() });
    }

    GetDespesasId(data: any){
        console.log("getById");
        console.log(data);
        return this.http.post(`${this.url}/GetDespesasId`,data, { headers: this.composeHeaders() });
    }

    UpdateDespesa(data: any) {

        data.vl_valor_parc = data.vl_valor_parc.replace('.', '').replace('.', '').replace(',', '.');
        data.vl_valor_multa = data.vl_valor_multa.replace('.', '').replace('.', '').replace(',', '.');
        data.vl_valor_desconto = data.vl_valor_desconto.replace('.', '').replace('.', '').replace(',', '.');

        //console.log(data);

        return this.http.post(`${this.url}/UpdateDespesa`, data, { headers: this.composeHeaders() });
    }


    //#endregion









}


