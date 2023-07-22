import axios from "axios";
import { IMessage } from "../@types/message";
import MessageContext from "./MessageContext";


export function MessageProvider({ children }: any) {

    const baseUrl = process.env.REACT_APP_SERVER_URL + "/api/message/";

    function createMessage(message: IMessage) {
        return axios.post(baseUrl, message)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }


    return (
        <MessageContext.Provider value={{
            createMessage
        }}>
            {children}
        </MessageContext.Provider>
    )
}