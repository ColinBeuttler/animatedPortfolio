const about = document.getElementById("about")
const bio = document.getElementById("biotext")

const code = document.getElementById("code")
const codepanel = document.getElementById("codepanel")

const other = document.getElementById("other")
const otherpanel = document.getElementById("otherpanel")

const contact = document.getElementById("contacts")
const contactpanel = document.getElementById("contactpanel")


about.onclick = function(){displayDiv(bio)}
code.onclick = function(){displayDiv(codepanel)}
other.onclick = function(){displayDiv(otherpanel)}
contact.onclick = function(){displayDiv(contactpanel)}

function displayDiv(divbox){

    if(divbox.style.display != "none"){
       divbox.style = "display:none" 
    }
  else{
    console.log(divbox.style)
    divbox.style = "display:block"
  }
    
}


displayDiv(contactpanel)
displayDiv(otherpanel)
displayDiv(codepanel)
displayDiv(bio)