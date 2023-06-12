export interface IProduct {
    id?: string;
    productName: string;
    color: string[];
    description: string;
    price: number;
    }



  export type UserContextType = {
    users: IUser[];
    createUser: (email: string, password: string) => void;
    signInUser: (email: string, password: string) => void;
  };