const about = document.getElementById("about")
const bio = document.getElementsByClassName("biotext")


about.addEventListener("click", displayBio())

function displayBio(){
    console.log("display")
    bio.style.display = "block"
}