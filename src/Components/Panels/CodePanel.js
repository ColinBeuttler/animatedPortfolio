import React, { Component } from "react";
import "./Panels.css"
import transitionVideo from "./videos/transitionsvideo.mp4"
import recyclerViewVideo from "./videos/recyclerViewVideo.mp4"
import iterationExample from "./videos/iterationExample.mp4"
import fragmentVideo from "./videos/fragmentVideo.mp4"

class CodePanel extends Component {

    play = (e) => {
        e.target.play()
    }

    pause = (e) => {
        e.target.pause()
    }

    render() {

        return (

            <div className="panel" id="codepanel">
                <a href="https://jsfiddle.net/cbeutttler/984ben3o/53/" id="transitions">
                    <video className="innerpanel" src={transitionVideo} type="video/mp4" muted="muted" onMouseEnter={this.play} onMouseLeave={this.pause}>Transitions and
                        Animations</video>
                </a>

                <div className="space-between"></div>
                <a href="https://github.com/ColinBeuttler/DragonChronicles/blob/gh-pages/app/src/main/java/com/colinbeuttler/dragonchronicles/chapterselection/ChapterAdapter.java"
                    id="recyclerview">
                    <video className="innerpanel" src={recyclerViewVideo} type="video/mp4" muted="muted" onMouseEnter={this.play} onMouseLeave={this.pause}>
                    </video>
                </a>

                <div className="space-between"></div>
                <a href="https://github.com/ColinBeuttler/iterationExample/tree/main/public" id="iteration">
                    <video className="innerpanel" src={iterationExample} type="video/mp4" muted="muted" onMouseEnter={this.play} onMouseLeave={this.pause}>Iteration</video>
                </a>

                <div className="space-between"></div>
                <a href="https://github.com/ColinBeuttler/TrackerApp/blob/master/app/src/main/java/com/example/trackerapp/MainActivity.kt"
                    id="activity">
                    <video className="innerpanel" src={fragmentVideo} type="video/mp4"
                        muted="muted" onMouseEnter={this.play} onMouseLeave={this.pause}>Activity/Fragment</video>
                </a>
            </div>

        )
    }

}

export default CodePanel