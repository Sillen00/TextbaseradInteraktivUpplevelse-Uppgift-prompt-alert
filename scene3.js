function loadScene3(){
    optionButtonElement3.style.display = "none";
    
    textElement. textContent = "Du fortsätter simma och ser ett glänsande sken. DU HAR HITTAT GULD KISTAN!";

    optionButtonElement1.textContent = "Fortsätt leta efter din kompis";
    optionButtonElement1.addEventListener("click", loadScene4)

    optionButtonElement2.textContent = "Ta med guldet upp";
    optionButtonElement2.addEventListener ("click", pengaKot)
}




function pengaKot(){

};


function loadScene4(){

};