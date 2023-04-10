// Function to handle changing tabs in the about me section

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
    
function opentab (tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}


// Script that handles the typing animation on the welcome area of the site.

var typed = new Typed(".auto-type", {
    strings: ["Console.WriteLine(<br>Hello World! I'm Coty Eades,<br> Software Developer);"],
    typeSpeed: 35 
})


// Script that opens side menu on mobile screens

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}