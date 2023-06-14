export interface IProduct {
  _id?: string;
  productName: string;
  color: string;
  description: string;
  price: number;
  groupCode: string
}

export interface INewProduct {
  productName: string;
  color: string[];
  description: string;
  price: number;
  groupCode: string
}