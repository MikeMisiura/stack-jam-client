import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { IUser } from '../@types/user';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let { signInUser } = useContext(UserContext);
    let navigate = useNavigate();

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        const thisUser: IUser = { email, password }

        signInUser(thisUser).then(() => {
            navigate('/product');
        }).catch((error: any) => {
            console.log(error);
            window.alert('Failed login');
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            <span>Email  </span>
            <input placeholder="Enter email" type="text" name="email" onChange={e => setEmail(e.target.value)} />
            <br></br><br></br>
            <span>Password  </span>
            <input placeholder="Enter password" type="password" name="password" onChange={e => setPassword(e.target.value)} />
            <br /><br></br>
            <button>
                Sign In
            </button>
        </form>
    );
};

export default SignIn;