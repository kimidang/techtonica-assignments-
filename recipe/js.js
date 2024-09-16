let open = document.createElement("BUTTON");
open.innerHTML = "CLICK ME";
open.addEventListener("click", function (){
    alert("Button is clicked")
});
document.body.appendChild(open);

document.getElementById("headertag").innerHTML = "Make Sushi Bake with Me";

let accordionMagic = document.getElementsByClassName("accordion");
let i;

for (i=0; i<accordionMagic.length; i++){
    accordionMagic[i].addEventListener("click", function(){
        //highlight the button
        this.classList.toggle("active");

        // show the hidden and active panel
        let panel = this.nextElementSibling;
        if (panel.style.display === "block"){
            panel.style.display = "none";
        } else {
            panel.style.display = "block"
        }
    });
}