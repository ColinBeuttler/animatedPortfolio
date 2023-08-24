import React, { Component } from "react";
import Auxcomp from "../../hoc/AuxComp";
import CodePanel from "../Panels/CodePanel";
import Contacts from "../Contacts/Contacts";
import Nav from "../Navigation/Nav";


class CodePage extends Component {
    render() {
        return (
            <Auxcomp>

                <Nav />

                <Contacts />

                <CodePanel />

            </Auxcomp>
        )
    }
}

export default CodePage