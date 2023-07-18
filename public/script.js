const about = document.getElementById("about")
const bio = document.getElementById("biotext")

const code = document.getElementById("code")
const codepanel = document.getElementById("codepanel")

const other = document.getElementById("other")
const otherpanel = document.getElementById("otherpanel")

const videopanel = document.querySelectorAll(".innerpanel")

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




// about.onclick = function(){displayDiv(bio)}
// code.onclick = function(){displayDiv(codepanel)}
// other.onclick = function(){displayDiv(otherpanel)}

// function displayDiv(divbox){

//     if(divbox.style.display != "none"){
//        divbox.style = "display:none"
//        divbox.classList.add("panel", "out") 
//     }
//   else{
//     divbox.style = "display:block"
//     divbox.classList.add("panel", "in")

//   }
    
// }
// displayDiv(otherpanel)
// displayDiv(codepanel)
// displayDiv(bio)