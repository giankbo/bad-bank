import React from "react";
import bank from "./bank.png";
import Card from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <Card
            bgcolor="light"
            txtcolor="dark"
            header="BadBank Landing Page"
            align = "center"
            title="Welcome to the bank"
            text="You can move around using the navigation bar"
            body={(<img src={bank} className="img-fluid" alt="Responsive bank" />)}
        />
    );
}