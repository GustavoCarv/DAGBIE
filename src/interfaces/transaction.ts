export interface Transaction {
  id?: number;
  type: string;
  value: number;
  category: string;
  description?: string;
  userId?: number;
  createdAt?: string;
  updatedAt?: string;
}

// TODO: substituir os "string" em createdAt e updatedAt por "Date"
// quando os dados estiverem vindo da API