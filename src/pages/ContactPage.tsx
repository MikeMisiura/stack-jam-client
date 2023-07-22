import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMessage } from '../@types/message';
import MessageContext from '../contexts/MessageContext';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';

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

        if (phoneNumber) { newMessage.phoneNumber = phoneNumber }

        createMessage(newMessage).then(() => {
            setMessageSent(true)
        }).catch((error: any) => {
            console.log(error);
        });

    }

    // TODO: make form more attractive with grid and separate component for inputs

    return (
        <>
            {showSuccessAlert()}
            <h1>Contact Us</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm={2}>Email:</Form.Label>
                    <Col sm={4}>

                        <Form.Control

                            placeholder="Enter email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='mb-3'>

                    <Form.Label column sm={2}>Phone Number:</Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            placeholder="Enter Phone Number"
                            type="text"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm={2}>First Name:</Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            placeholder="Enter first name"
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm={2}>Last Name:</Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            placeholder="Enter last name"
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm={2}>Message:</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            placeholder="Enter message"
                            type="textarea"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            as="textarea" rows={3}
                        />
                    </Col>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </>
    )
};
