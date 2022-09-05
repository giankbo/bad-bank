import React from "react";
import { UserContext } from "./context";
import Card from "./context";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function CreateAccount() {
    const {useState, useContext} = React;
    const [show, setShow] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);
    const MySwal = withReactContent(Swal)

    function validate(field, label) {
        if(!field || (label === "password" && password.length < 8)) {
            if(label === "password" && password && password.length < 8) {
                MySwal.fire({
                    title: <strong>You got an error!</strong>,
                    html: `${label} must be at least 8 characters long`,
                    icon: "error",
                    confirmButtonColor: '#007bff'
                  });
                return false;
            }
            MySwal.fire({
                title: <strong>You got an error!</strong>,
                html: `Error: ${label}`,
                icon: "error",
                confirmButtonColor: '#007bff'
              });
            return false;
        }
        return true;
    }

    function handleCreate() {
        console.log(name, email, password);
        if(!validate(name, 'name')) return;
        if(!validate(email, 'email')) return;
        if(!validate(password, 'password')) return;
        ctx.users.push({name, email, password, balance: 0});
        setShow(false);
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true)
    }

    return (
        <Card 
        bgcolor = 'light'
        txtcolor = "dark"
        header = 'Create Account'
        body = {show ? (
                    <>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="input" placeholder="Enter name" id="name" value={name} onChange={e => setName(e.currentTarget.value)} />
                        <br />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="input" placeholder="Enter email" id="email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                        <br />
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" id="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                        <br />
                        <Button variant="primary" type="submit" onClick={handleCreate} disabled={!name || !email || !password ? true : false}>Create Account</Button>
                    </>
                ):(
                    <>
                        <h5>Success</h5>
                        <Button variant="primary" type="submit" onClick={clearForm}>Add another account</Button>
                    </>
                )}
        />
    );
}