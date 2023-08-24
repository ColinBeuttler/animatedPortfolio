import React from "react";
import "./Contacts.css"


function Contacts(){
    return(
        <div id="contactpanel">
        <a href="mailto: cbeuttler@hotmail.com">
        <span className="contactlink" id="gmail">
            </span>
        </a>
        <a href="https://github.com/ColinBeuttler" className="aLink">
            <span className="contactlink" id="github">
            </span>
        </a>
        <a href="https://www.linkedin.com/in/colin-beuttler-5683b8149/">
            <span className="contactlink" id="linkedIn"></span>
        </a>

    </div>
    )
}

export default Contacts