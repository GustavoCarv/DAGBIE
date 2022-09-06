export interface Transaction {
  id?: string;
  type: string;
  value: number;
  category: string;
  description?: string;
  createdAt: string;
}