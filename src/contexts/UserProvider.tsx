import axios from "axios";
import UserContext from "./UserContext";
import { IUser } from "../@types/user";
import { useState } from "react";


export function UserProvider({ children }: any) {

    const baseUrl = process.env.REACT_APP_SERVER_URL + "/api/users/";

    const [admin, setAdmin] = useState(localStorage.getItem('admin'));
    const [loggedInUser, setLoggedInUser] = useState<IUser | null>(null);

    function getUserInfo() {
        axios.get(`${baseUrl}info`).then(response => setLoggedInUser(response.data));
        return loggedInUser
    }

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
                localStorage.setItem('myAuthToken', response.data.token)
                localStorage.setItem('admin', response.data.admin)
                setAdmin(response.data.admin)
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    return (
        <UserContext.Provider value={{
            admin,
            loggedInUser,
            getUserInfo,
            createUser,
            signInUser
        }}>
            {children}
        </UserContext.Provider>
    )
}