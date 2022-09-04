import React from "react";

export const UserContext = React.createContext(null);

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
                {props.text && (<h5 className='card-text'>{props.text}</h5>)}
                {props.body}
                {props.status && (<h5 className='card-text'>{props.status}</h5>)}
            </div>
        </div>
    );
}
