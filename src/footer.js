import React from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
        <footer className='text-center' style={{position:'fixed', width:'100%', bottom:'0', marginBottom:'2rem'}}>
            <small>
                {`© BadBank, ${year}. All rights reserved.`}
            </small>
        </footer>
        </>
    );  
}