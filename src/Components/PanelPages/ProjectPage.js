import React, { Component } from "react";
import Auxcomp from "../../hoc/AuxComp";
import ProjectPanel from "../Panels/ProjectPanel";
import Contacts from "../Contacts/Contacts";
import Nav from "../Navigation/Nav";


class ProjectPage extends Component {
    render() {
        return (

            <Auxcomp>

                <Nav/>

                <Contacts/>

                <ProjectPanel />

            </Auxcomp>
        )
    }
}

export default ProjectPage