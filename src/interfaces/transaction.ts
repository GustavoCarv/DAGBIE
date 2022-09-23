export interface Transaction {
  id_transacao?: number;
  tipo: string;
  valor: number;
  categoria: string;
  descricao?: string;
  id_usuario?: number;
  data_criacao?: Date;
}
