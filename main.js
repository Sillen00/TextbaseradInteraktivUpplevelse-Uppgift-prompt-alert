window.addEventListener("DOMContentLoaded", main);

/**@type {HTMLParagraphElement} P-tag to display scene message */
let textElement;
/**@type {HTMLButtonElement} Button option 1 */
let optionButtonElement1;
/**@type {HTMLButtonElement} Button option 2 */
let optionButtonElement2;
/**@type {Boolean} Berättar om du tog upp dykartuben eller inte */
let hasFriendsDykartubBeenPickedUp = false;


/** Startar programet när DOMen laddats in.*/
function main() {
    loadHtmlElements();
    loadStartScene();
};

function loadHtmlElements(){
    textElement = document.getElementById("text");
    optionButtonElement1 = document.getElementById("option-btn-1");
    optionButtonElement2 = document.getElementById("option-btn-2");
};


/** Start och första scenen på spelet.*/
function loadStartScene(){
    textElement.textContent = "Du och din kompis har dykt i flera dagar i Egyptens grottor för att hitta en stor kista med guld. Du simmar in i ett litet hål för att se om skatten finns där. Du hittar inget och simmar ut igen och märker då att din kompis är borta. Du ser hans dykartub och bestämmer dig för att hitta din kompis. Vill ta med dig dykartuben eller lämna kvar den?"
    optionButtonElement1.textContent = "Ta med dykartuben";
    optionButtonElement1.addEventListener("click", youPickedUpDykartub);
    
    optionButtonElement2.textContent = "Lämna dykartuben";
    optionButtonElement2.addEventListener("click", loadScene2);
};

/** Du har plockat upp din kompis dykartub */
function youPickedUpDykartub() {
    hasFriendsDykartubBeenPickedUp = true;
    loadScene2();
}

/**Laddar in scen 2. Ser olika ut beroende på vad du gjort innan.*/
function loadScene2() {
    
    textElement.textContent = "Du fortsätter simma in i den mörka grottan där du träffar på en sjöjungfru som vill byta sin sköld eller treudd spjut mot en dykartub."
    
    if(hasFriendsDykartubBeenPickedUp === false){
        optionButtonElement1.textContent = "Byt din egna dykartub mot treudd"
        optionButtonElement2.textContent = "Byt din egna dykartub mot sköld"
        
        //Extra option knapp3
        const optionButton3 = document.createElement("button");
        optionButton3.innerText = "Byt inget"
        optionButton3.classList.add("btn")
        const divButtons = document.getElementById("option-buttons")
        divButtons.appendChild(optionButton3);
        // document.body.innerHTML = ""
    }

    if(hasFriendsDykartubBeenPickedUp === true){
        optionButtonElement1.textContent = "Behåll kompisens dykartub"
        optionButtonElement2.textContent = "Byt mot treudd"
        
        //Extra option knapp4
        const optionButton4 = document.createElement("button");
        optionButton4.innerText = "Byt mot sköld"
        optionButton4.classList.add("btn")
        const divButtons = document.getElementById("option-buttons")
        divButtons.appendChild(optionButton4);
    }

}






