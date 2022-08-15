import React from "react";
import { UserContext } from "./context";
import Card from "./context";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateAccount() {
    const {useState, useContext} = React;
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);

    function validate(field, label) {
        if(!field) {
            setStatus(`Error: ${label}`);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function handleCreate() {
        console.log(name, email, password);
        if(!validate(name, 'name')) return;
        if(!validate(email, 'email')) return;
        if(!validate(password, 'password')) return;
        ctx.users.push({name, email, password, balance:100});
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
        status = {status}
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
                    <Button variant="primary" type="submit" onClick={handleCreate}>Create Account</Button>
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