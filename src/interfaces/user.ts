export interface User {
  id_usuario?: number;
  nome: string;
  email: string;
  senha?: string;
  data_criacao?: Date;
}