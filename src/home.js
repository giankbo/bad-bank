import React from "react";
import Card from "./context";
import bank from "./bank.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <Card
            bgcolor = "primary"
            txtcolor = "white"
            header = "BadBank Landing Page"
            title = "Welcome to the bank"
            text = "You can move around using the navigation bar"
            body = {(<img src={bank} className="img-fluid" alt="Responsive bank" />)}
        />
    );
}