import React from "react";
import { UserContext } from "./context";
import Card from "./context";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
 
export default function Withdraw() {
    const {useState, useContext} = React
    const ctx = useContext(UserContext);
    const [withdraw, setWithdraw] = useState(0);
    const MySwal = withReactContent(Swal)
    
    const handleWithdraw = () => {
      if (ctx.loggedIn.status === false) {
        MySwal.fire({
            title: <strong>You got an error!</strong>,
            html: `Please you need to login`,
            icon: "error",
            confirmButtonColor: '#007bff'
        });
        return false;
      }

      if (isNaN(parseInt(withdraw))) {
        setWithdraw(0);
        MySwal.fire({
            title: <strong>You got an error!</strong>,
            html: 'Oh! Remember to enter the amount in numbers',
            icon: "error",
            confirmButtonColor: '#007bff'
        });   
        return false;
      } else if ((parseInt(withdraw)) < 0) {
        setWithdraw(0);
        MySwal.fire({
            title: <strong>You got an error!</strong>,
            html: 'A negative amount cannot be withdrawn',
            icon: "error",
            confirmButtonColor: '#007bff'
        });
        return false; 
      } else if (ctx.users[ctx.loggedIn.index].balance < parseInt(withdraw)) {
        setWithdraw(0);
        MySwal.fire({
            title: <strong>You got an error!</strong>,
            html: 'You do not have the funds to withdraw',
            icon: "error",
            confirmButtonColor: '#007bff'
        });
        return false; 
      }

      ctx.users[ctx.loggedIn.index].balance -= parseInt(withdraw)

      setWithdraw(0);
      MySwal.fire({
        title: <strong>Success!</strong>,
        html: 'Your withdrawal was successful',
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
        header = 'Withdraw'
        title = {
            <>
            <strong>
                {ctx.loggedIn.status 
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

            <Form.Control type="text" id="amount" placeholder="Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} >
            </Form.Control>

            <Button style={{background:'#20c997', border:'none'}} type="submit" onClick={handleWithdraw} disabled={!withdraw ? true: false}>Withdraw</Button>
            </Stack>
            </>
            }
        />
      );
    };