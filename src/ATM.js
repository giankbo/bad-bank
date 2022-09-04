import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const ATM = ({ onChange, isDeposit, isValid, amount }) => {
    const choice = ["Deposit", "Withdraw"];
    console.log(`ATM isDeposit: ${isDeposit}`);
    return (
        <>
            <Form.Label>{choice[Number(!isDeposit)]}</Form.Label>
            <Form.Control type="number" placeholder="Amount" value={amount} onChange={onChange}></Form.Control><br/>
            <Button type="submit" disabled={!isValid}>Submit</Button>
        </>
    );
  };