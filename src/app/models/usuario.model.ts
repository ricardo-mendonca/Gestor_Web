export class User {
    constructor(
  
        public _Id: string,
        public ds_nome: string,
        public ds_email: string,
        public ds_senha: string,
        public ds_telefone: string,
        public dt_nascimento: string,
        public fl_status: string,
        public cd_rg: string,
        public cd_cpf: string,
        public cd_cep: string,
        public ds_endereco: string,
        public ds_complemento: string,
        public nr_endereco: string,
        public ds_bairro: string,
        public ds_cidade: string,
        public cd_uf: string,
        public dt_inclusao: string
        ) {

        }
    }