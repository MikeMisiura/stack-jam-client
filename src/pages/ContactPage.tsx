import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMessage } from '../@types/message';
import MessageContext from '../contexts/MessageContext';
import { Alert } from 'react-bootstrap';

export default function ContactPage() {

    // TODO: retrieve user info for logged in users
    // hooks
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [messageSent, setMessageSent] = useState<boolean>(false);

    let navigate = useNavigate();

    let { createMessage } = useContext(MessageContext);

    let showSuccessAlert = () => {
        if (!messageSent) return
        return (
            <Alert variant="success" onClose={() => navigate('/product')} dismissible>
                <Alert.Heading>Success!! Your message was sent!</Alert.Heading>
                <p>Thanks for contacting us, we will reach out shortly.</p>
            </Alert>
        )
    }

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        let newMessage: IMessage = {
            email,
            firstName,
            lastName,
            message
        }

        if (phoneNumber) {newMessage.phoneNumber = phoneNumber}

        console.log(newMessage)

        createMessage(newMessage).then(() => {
            console.log("success!")
            setMessageSent(true)
        }).catch((error: any) => {
            console.log(error);
        });

    }

    // TODO: make form more attractive with grid and separate component for inputs

    return (
        <>
            {showSuccessAlert()}
            <form onSubmit={handleSubmit}>
                <h1>Contact Us</h1>
                <span>Email  </span>
                <input
                    placeholder="Enter email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <br /><br />
                <span>Phone Number  </span>
                <input
                    placeholder="Enter Phone Number"
                    type="text"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
                <br /><br />
                <span>First Name </span>
                <input
                    placeholder="Enter first name"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <br /><br />
                <span>Last Name </span>
                <input
                    placeholder="Enter last name"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <br /><br />
                <span>Message  </span>
                <input
                    placeholder="Enter message"
                    type="textarea"
                    name="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <br /><br />
                <button>Submit</button>
            </form>
        </>
    )
};
