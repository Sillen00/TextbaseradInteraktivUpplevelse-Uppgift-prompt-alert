function loadScene3(){
    optionButtonElement3.style.display = "none";

    textElement.textContent = "Du fortsätter simma och ser ett glänsande sken. DU HAR HITTAT GULD KISTAN!";

    optionButtonElement1.textContent = "Fortsätt leta efter din bästa kompis";
    optionButtonElement1.addEventListener("click", loadScene4)

    optionButtonElement2.textContent = "Ta med guldet upp";
    optionButtonElement2.addEventListener ("click", pengaKot)
}




function pengaKot(){
    document.getElementById("option-buttons").replaceWith("");
    textElement.textContent = "Du tog guldet men nu har du ingen att spendera pengarna tillsammans med............... :( 'ctrl + r' för att börja om.";
};


function loadScene4(){
    
};