import axios from "axios";
import UserContext from "./UserContext";
import { IUser } from "../@types/user";

export function UserProvider({ children }: any) {

    const baseUrl = "http://localhost:3000/api/users/";

    function createUser(user: IUser) {

        return axios.post(baseUrl, user)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function signInUser(user: IUser) {
        const newSignInUser = {
            email: user.email,
            password: user.password
        }

        return axios.post(`${baseUrl}login`, newSignInUser)
            .then(response => {
                localStorage.setItem('myProductToken', response.data.token)
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    return (
        <UserContext.Provider value={{
            createUser,
            signInUser
        }}>
            { children }
        </UserContext.Provider>
    )
}