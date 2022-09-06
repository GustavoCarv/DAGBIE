import { Transaction } from './transaction'

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  transactions: Transaction[];
}