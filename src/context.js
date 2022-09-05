import React from "react";

export const UserContext = React.createContext(null);

export const UserContextProvider = (props) => {
    return (
        <UserContext.Provider
            value={{
                users: [
                    {
                        name:'Abel', 
                        email:'abel@mit.edu', 
                        password:'verysecret', 
                        balance:100
                    },
                ], 
                loggedIn: {
                    name:'', 
                    email:'', 
                    index:'null', 
                    status: false
                },
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};


export default function Card(props) {
    function classes() {
        const bg = props.bgcolor ? `bg-${props.bgcolor}` : ' ';
        const txt = props.txtcolor ? `text-${props.txtcolor}` : ' text-white';
        const align = props.align ? `text-${props.align}` : ' ';
        return  `card mb-3 ${bg} ${txt} ${align}`;
    }

    return(
        <div className={classes()} style={{maxWidth: '18rem'}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className='card-title'>{props.title}</h5>)}
                {props.text && (<p className='card-text'>{props.text}</p>)}
                {props.body}
                {props.status && (<div className='card-text'>{props.status}</div>)}
            </div>
        </div>
    );
}
