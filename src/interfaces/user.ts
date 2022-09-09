import { Transaction } from './transaction'

export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
  transactions?: Transaction[];
  createdAt?: Date;
  updatedAt?: Date;
}