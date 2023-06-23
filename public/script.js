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
contact.onclick = function(){displaycontact()}

function displayDiv(divbox){

    if(divbox.style.display != "none"){
       divbox.style = "display:none"
       divbox.classList.add("panel", "out") 
    }
  else{
    divbox.style = "display:block"
    divbox.classList.add("panel", "in")

  }
    
}

function displaycontact(){
    if(contactpanel.style.display != "none"){
        contactpanel.style = "display:none"
    }
    else{
        contactpanel.style = "display:inline-block"
    }
}


displaycontact()
displayDiv(otherpanel)
displayDiv(codepanel)
displayDiv(bio)