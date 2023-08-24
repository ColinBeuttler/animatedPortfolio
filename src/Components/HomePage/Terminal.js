import React from "react";
import "./Terminal.css"

function Terminal() {
    return (
        <fieldset model=".terminal" id="biotext" >
            <legend className="terminalLegend">🌌 about</legend>
            <a>-bash-3.2$ groups
                unixuser feegroup figroup fogroup fumgroup</a>
            <p>-Self-Taught/Boot Camp Graduate with many projects</p>
            <p>-Experience with Mobile and Web Development with modern languages</p>
            <p>-Regularly updated GitHub and LinkedIn</p>
            <p>-Active on Social Media with quick responses</p>
            <p>-Available for Full and Part time work</p>
            <a href="https://1drv.ms/w/s!AtgPspX-oSlPjLw6booJFFIk8R3N2A?e=5dbdQa" id="resume">-Resume Here</a>
        </fieldset>
    )
}

export default Terminal