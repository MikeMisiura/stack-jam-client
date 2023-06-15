export interface IProduct{
  _id?: string;
  productName: string;
  color: string;
  description: string;
  price: number;
  groupCode: string
  createdAt?: string
  updatedAt?: string
  __v?: number
}

export interface INewProduct {
  productName: string;
  color: string[];
  description: string;
  price: number;
  groupCode: string
}

export interface ICartProduct extends IProduct {
  quantity: number;
}