import React from "react";
import { UserContext } from "./context";

export default function Login() {
    const ctx = React.useContext(UserContext)
    return (
        <h1>Login <br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}