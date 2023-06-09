import axios from "axios";
import UserContext from "./UserContext";
import React from 'react';

export function UserProvider({ children }: any) {

    const baseUrl = "http://localhost:3000/api/users/";

    function createUser(username, password) {       
        let user = { username, password };
        
        return axios.post(baseUrl, user)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function signInUser(username, password) {
        let user = { username, password };

        return axios.post(`${baseUrl}/login`, user)
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