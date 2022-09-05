import React from "react";
import { UserContext } from "./context";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

export default function AllData() {
    const ctx = React.useContext(UserContext)
    return (
            <>
            <Container>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name:</th>
                            <th>Email:</th>
                            <th>Password:</th>
                            <th>Balance:</th>
                        </tr>
                    </thead>
                    {ctx.users.map((user, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.balance}</td>
                                </tr>
                            </tbody>
                        );
                    })}
                </Table>
            </Container>
            </>

    );
}