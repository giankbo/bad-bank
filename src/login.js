import React from "react";
import { UserContext } from "./context";
import Card from "./context";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'; 

export default function Login() {
    const {useState, useContext} = React;
    const ctx = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(ctx.loggedIn.status);
    const MySwal = withReactContent(Swal)

    function handleLogin() {
        ctx.users.find((user, index) => {
            if (user.email === email && user.password === password) {
                ctx.loggedIn.name = user.name;
                ctx.loggedIn.email = user.email;
                ctx.loggedIn.index = index;
                ctx.loggedIn.status =true;
                return setLoggedIn(true)
            }
            return false;
        });

        if (ctx.loggedIn.status === false) {
            MySwal.fire({
                title: <strong>You got an error!</strong>,
                html: `Please verify your email or password`,
                icon: "error",
                confirmButtonColor: '#007bff'
            });
            return false;
        }
    }

    function handleLogout() {
        ctx.loggedIn.name = '';
        ctx.loggedIn.email = '';
        ctx.loggedIn.status = false;
        setEmail('');
        setPassword('');
        return setLoggedIn(false);
    }

    return (
        <Card 
        bgcolor = 'light'
        txtcolor = 'dark'
        header = 'Login'
        title = {
                <>
                    <div className="text-center">
                        {loggedIn === true ? `Hi ${ctx.loggedIn.name}` : ''}
                    </div>
                </>
            }
        text = {
                <>
                    <div className="text-center">
                        {loggedIn === true ? 'Welcome to BadBank!' : ''}
                    </div>
                </>
            }
        body = {
                <>
                    {loggedIn === false ? (
                        <>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="input" placeholder="Enter email" id="email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                            <br/>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" id="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                            <br/>
                            <div className="text-center">
                                <Button style={{background:'#20c997', border:'none'}} type="submit" onClick={handleLogin} disabled={!email && password.length < 8 ? true : false}>Login</Button>
                            </div>
                        </>
                    ):(
                        <>
                            <div className="text-center">
                                <Button style={{background:'#20c997', border:'none'}} type="submit" onClick={handleLogout}>Logout</Button>
                            </div>
                        </>
                    )}
                </>
            }
        />
    );
}