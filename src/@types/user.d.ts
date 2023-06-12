export interface IUser {
    id?: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    address?: string;
    city?: string;
    state?: string;
    phone?: string;
    admin?: boolean;
  }

  export type UserContextType = {
    users: IUser[];
    createUser: (email: string, password: string) => void;
    signInUser: (email: string, password: string) => void;
  };