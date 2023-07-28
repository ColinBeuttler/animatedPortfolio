const about = document.getElementById("about")
const bio = document.getElementById("biotext")

const code = document.getElementById("code")
const codepanel = document.getElementById("codepanel")

const other = document.getElementById("other")
const otherpanel = document.getElementById("otherpanel")

const videopanel = document.querySelectorAll(".innerpanel")

const menubody = document.querySelector(".menubody")

window.addEventListener("load", function () {
    setTimeout(
        function open(event) {
              bio.style.visibility = "visible"
        }, 350
    )
})

function addVideoPlay(panel) {

    for (let i = 0; i < panel.length; i++){
    panel[i].addEventListener('mouseenter', function () {
        panel[i].play();
    })
    panel[i].addEventListener('mouseout', function () {
        panel[i].pause();
    })
}
};

addVideoPlay(videopanel);

window.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        menubody.style.display = "block";
        console.log("scrolled")
    }
    // else if (event.deltaY < 10) {
    //     menubody.style.display = "none";
    // }
    
    
})


