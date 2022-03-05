export class despesa {
    constructor(
  
        public _Id: string,
        public id_usuario: string,
        public id_categoria: string,
        public cd_qtd_parc: string,
        public cd_qtd_tot_parc: string,
        public vl_valor_parc: string,
        public vl_valor_multa: string,
        public vl_valor_desconto: string,
        public cd_dia: string,
        public cd_mes: string,
        public cd_ano: string,
        public fl_despesa_fixa: string,
        public fl_pago: string,
        public dt_vencimento: string,
        public dt_pagamento: string,
        public dt_cadastro: string,
        public dt_alteracao: string,
        public ds_descricao: string

        ) {

        }
    }
