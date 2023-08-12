import React from "react";
import "./About.css"
// import "./Terminal.css"

function About() {
    return (

        <div className="bio">

            <div className="biowrapper">
                <div className="greeting">
                    <a className="welcome">Hello</a>
                    <a className="im">My name is</a>
                </div>

                <h1 className="name">
                    <a className="colin">Colin</a>
                    <a className="beuttler">Beuttler</a>
                    <div className="divider"></div>
                </h1>


                <div className="skillnode">
                    <a className="innernode" id="js">JS Developer</a>
                    <a className="node-separtor">/</a>
                    <a className="innernode" id="java">Java Developer</a>
                    <a className="node-separtor">/</a>
                    <a className="innernode" id="kotlin">Android/Kotlin Developer</a>
                </div>
            </div>

        </div>

    )
}

export default About