const about = document.getElementById("about")
const bio = document.getElementById("biotext")


about.onclick = function(){displayBio()}

function displayBio(){

    if(bio.style = "display:none"){
       bio.style = "display:block" 
    }
  else if(bio.style = "display:block"){
    console.log(bio.style)
    bio.style = "display:none"
  }
    
}