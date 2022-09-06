import React from "react";
import { UserContext } from "./context";
import Card from "./context";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
 
export default function Deposit() {
    const {useState, useContext} = React
    const ctx = useContext(UserContext);
    const [deposit, setDeposit] = useState(0);
    const MySwal = withReactContent(Swal)
    
    const handleDeposit = () => {
      if (ctx.loggedIn.status === false) {
        MySwal.fire({
            title: <strong>You got an error!</strong>,
            html: `Please you need to login`,
            icon: "error",
            confirmButtonColor: '#007bff'
        });
        return false;
      }

      if (isNaN(deposit)) {
        setDeposit(0);
        MySwal.fire({
            title: <strong>You got an error!</strong>,
            html: 'Oh! Remember to enter the amount in numbers',
            icon: "error",
            confirmButtonColor: '#007bff'
        });   
        return false;
      } else if (deposit < 0) {
        setDeposit(0);
        MySwal.fire({
            title: <strong>You got an error!</strong>,
            html: 'A negative amount cannot be deposited',
            icon: "error",
            confirmButtonColor: '#007bff'
        });
        return false; 
      } 

      ctx.users[ctx.loggedIn.index].balance += parseInt(deposit)

      setDeposit(0);
      MySwal.fire({
        title: <strong>Success!</strong>,
        html: 'Your deposit was successful',
        icon: "success",
        confirmButtonColor: '#007bff'
      });
      return true; 
    };
    
    return (
        <Card
        bgcolor = 'light'
        txtcolor = 'dark'
        align = 'center'
        header = 'Deposit'
        title = {
            <>
            <strong>
                {ctx.loggedIn.status === true 
                    ? `${ctx.users[ctx.loggedIn.index].name} balance:` 
                    : ''
                }
                <br />
                {ctx.loggedIn.status
                    ? `$ ${ctx.users[ctx.loggedIn.index].balance}`
                    : 'Not logged in'
                } 
            </strong>
            </>
        }
        body = {
            <>
            <Stack gap={3} className="col-md-8 mx-auto">
            
            Transaction amount:
            
            <Form.Control type="text" id="amount" placeholder="Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} >
            </Form.Control>
            
            <Button style={{background:'#20c997', border:'none'}} type="submit" onClick={handleDeposit} disabled={!deposit ? true: false}>Deposit</Button>
            </Stack>
            </>
            }
        />
      );
    };