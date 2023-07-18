// import axios from "axios";
import { IMessage } from "../@types/message";
import MessageContext from "./MessageContext";
// import { sendEmail } from "../services/sendEmail";
// import { devRecipient } from "../developerInfo";


export function MessageProvider({ children }: any) {

    const baseUrl = "http://localhost:3000/api/message/";

    function createMessage(message: IMessage) {
        // return axios.post(baseUrl, message)
        //     .then(response => {
        //         return new Promise(resolve => resolve(response.data));
        //     }
        //     );

    // let newMessage: any = {
    //     message: req.body.message,
    //     userId: user.userId
    // };

    // if (newMessage.message) {
    //     let created = await Message.create(newMessage);
    //     res.status(201).json(created);
    // } else {
    //     res.status(400).send();
    // }

    // sendEmail({
    //     subject: "New Message",
    //     body: 'NEW MESSAGE:' + message.message,
    //     to: [devRecipient, { email: message.email }]
    // })

    }



    return (
        <MessageContext.Provider value={{
            createMessage
        }}>
            {children}
        </MessageContext.Provider>
    )
}