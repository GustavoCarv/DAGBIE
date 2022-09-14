export interface Transaction {
  id?: number;
  type: string;
  value: number;
  category: string;
  description?: string;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
