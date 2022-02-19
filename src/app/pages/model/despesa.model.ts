export class Despesa {
    public id!: string;
    public id_usuario!: string;
    public id_categoria!: string;
    public cd_qtd_parc!: string;
    public cd_qtd_tot_parc!: string;
    public vl_valor_parc!: number;
    public vl_valor_multa!: number;
    public vl_valor_desconto!: number;
    public cd_dia!: string;
    public cd_mes!: string;
    public cd_ano!: string;
    public fl_despesa_fixa!: string;
    public fl_pago!: string;
    public dt_vencimento!: Date;
    public dt_pagamento!: Date;
    public dt_cadastro!: Date;
    public dt_alteracao!: Date;
    public ds_descricao!: string;

}