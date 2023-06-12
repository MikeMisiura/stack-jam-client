import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { IUser } from '../@types/user';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [phone, setPhone] = useState("");

    let { createUser } = useContext(UserContext);
    let navigate = useNavigate();

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        console.log(event)

        const newUser: IUser = {
                email, 
                password,
                firstName,
                lastName,
                address,
                city,
                state,
                phone
        }

        console.log(newUser)

        createUser(newUser).then(() => {
            navigate('/sign-in');
        }).catch((error: any) => {
            console.log(error);
            window.alert('Failed registration: error creating user');
        });
    }

    // TODO: make form more attractive with grid and separate component

    return (
        <form onSubmit={handleSubmit}>
            <h1>REGISTER</h1>
            <br /><br />
            <span>Email  </span>
            <input
                placeholder="Enter Email"
                type="text"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <br /><br />
            <span>Password  </span>
            <input
                placeholder="Enter Password"
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <br /><br />
            <span>First Name  </span>
            <input 
                placeholder="Enter First Name" 
                type="text" 
                name="firstName" 
                value={firstName} 
                onChange={e => setFirstName(e.target.value)} 
            />
            <br/><br/>
            <span>Last Name  </span>
            <input 
                placeholder="Enter Last Name" 
                type="text" 
                name="lastName" 
                value={lastName} 
                onChange={e => setLastName(e.target.value)} 
            />
            <br/><br/>
            <span>Address  </span>
            <input 
                placeholder="Enter Address" 
                type="text" 
                name="address" 
                value={address} 
                onChange={e => setAddress(e.target.value)} 
            />
            <br/><br/>
            <span>City  </span>
            <input 
                placeholder="Enter City" 
                type="text" 
                name="city" 
                value={city} 
                onChange={e => setCity(e.target.value)} 
            />
            <br/><br/>
            <span>State  </span>
            <input 
                placeholder="Enter State" 
                type="text" 
                name="state" 
                value={state} 
                onChange={e => setState(e.target.value)} 
            />
            <br/><br/>
            <span>Phone  </span>
            <input 
                placeholder="Enter Phone" 
                type="text" 
                name="phone" 
                value={phone} 
                onChange={e => setPhone(e.target.value)} 
            />
            <br/><br/>
            <button>Sign Up</button>
        </form>

    )
};

export default SignUp;