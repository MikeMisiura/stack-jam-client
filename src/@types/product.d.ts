export interface IProduct {
  id?: string;
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

// TODO: use user context type instead of any

// export type UserContextType = {
//   users: IUser[];
//   createUser: (email: string, password: string) => void;
//   signInUser: (email: string, password: string) => void;
// };