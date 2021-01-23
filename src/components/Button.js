import React from 'react'
import './Button.css'
const Button = ({imp,text}) => {
    console.log(text);
    return (
        <div className={`button ${imp ==='secondary'?'button__white':''}`}>
            <a href="www.google.com">{text}</a>
        </div>
    )
}

export default Button
