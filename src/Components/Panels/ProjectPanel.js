import React, { Component } from 'react'
import "./Panels.css"
import restaurantAppVideo from "./videos/restaurantAppVideo.mp4"
import javaBlackJackVideo from "./videos/javaBlackJackVideo.mp4"
import maptyVideo from "./videos/maptyVideo.mp4"
import dragonChroniclesVideo from "./videos/dragonChroniclesVideo.mp4"


class ProjectPanel extends Component {

play = (e) =>{
    e.target.play()
}

pause = (e) => {
    e.target.pause()
}

    render() {

        return (

            <div className="menubody">

                <div className="panel" id="projectspanel">
                    <a href="https://github.com/ColinBeuttler/whiteElephant" id="restaurantApp">
                        <video className="innerpanel" onMouseEnter={this.play} onMouseLeave={this.pause} src={restaurantAppVideo} type="video/mp4" muted="muted">Restaurant App</video>
                    </a>
                    <div className="space-between-projects"></div>
                    <a href="https://github.com/ColinBeuttler/JavaBlackJack" id="blackjack">
                        <video className="innerpanel" src={javaBlackJackVideo} type="video/mp4" onMouseEnter={this.play} onMouseLeave={this.pause} muted="muted">JavaBlackJack</video>
                    </a>

                    <div className="space-between-projects"></div>
                    <a href="https://github.com/ColinBeuttler/Mapty" id="mapty">
                        <video className="innerpanel" src={maptyVideo} type="video/mp4" muted="muted" onMouseEnter={this.play} onMouseLeave={this.pause}>Mapty</video>
                    </a>
                    <div className="space-between-projects"></div>
                    <a href="https://github.com/ColinBeuttler/DragonChronicles" id="dragonChronicles">
                        <video className="innerpanel" src={dragonChroniclesVideo} type="video/mp4" muted="muted" onMouseEnter={this.play} onMouseLeave={this.pause}>Dragon
                            Chronciles</video>
                    </a>

                </div>

            </div>
        )

    }

}

export default ProjectPanel