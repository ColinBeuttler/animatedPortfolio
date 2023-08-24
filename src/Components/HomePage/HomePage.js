import React, { Component } from "react";
import About from "./About";
import Terminal from "./Terminal";
import Auxcomp from "../../hoc/AuxComp";
import Contacts from "../Contacts/Contacts";
import Nav from "../Navigation/Nav";

class Home extends Component {
    render() {
        return (
            <Auxcomp>

                <Nav />

                <Contacts />

                <About />

                <Terminal />

            </Auxcomp>
        )

    }
}

export default Home