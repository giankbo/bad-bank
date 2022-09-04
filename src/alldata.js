import React from "react";
import { UserContext } from "./context";
import Card from "./context";

export default function AllData() {
    const ctx = React.useContext(UserContext)
    return (
        <Card
        bgcolor = 'light'
        txtcolor = "dark"
        header = 'AllData'
        body={
        <ul>
            {JSON.stringify(ctx)}
        </ul>
        }
        />
    );
}