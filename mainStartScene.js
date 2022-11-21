window.addEventListener("DOMContentLoaded", main);

/**@type {HTMLParagraphElement} P-tag to display scene message */
let textElement;
/**@type {HTMLButtonElement} Button option 1 */
let optionButtonElement1;
/**@type {HTMLButtonElement} Button option 2 */
let optionButtonElement2;
/**@type {HTMLButtonElement} Button option 3 */
let optionButtonElement3;
/**@type {Boolean} Berättar om du tog upp dykartuben eller inte */
let hasFriendsDykartubBeenPickedUp = false;


/** Startar programet när DOMen laddats in.*/
function main() {
    loadHtmlElements();
    loadStartScene();
};

/**Hämtar alla htmlelement från documentet och sparar de i variabler. */
function loadHtmlElements(){
    textElement = document.getElementById("text");
    optionButtonElement1 = document.getElementById("option-btn-1");
    optionButtonElement2 = document.getElementById("option-btn-2");
    optionButtonElement3 = document.getElementById("option-btn-3");
};


/** Start och första scenen på spelet.*/
function loadStartScene(){
    document.body.style.backgroundImage = "url('./images/diving.jpg')";


    optionButtonElement2.style.display = "block";
    optionButtonElement3.style.display = "none";

    textElement.textContent = "Du och din bästa kompis har dykt i flera dagar i Egyptens grottor för att hitta en stor kista med guld. Du simmar in i ett litet hål för att se om skatten finns där. Du hittar inget och simmar ut igen och märker då att din bästis är borta. Du ser hens dykartub och bestämmer dig för att hitta din kompis. Vill ta med dig dykartuben eller lämna kvar den?";
    optionButtonElement1.textContent = "Ta med den tunga och otympliga dykartuben";
    optionButtonElement1.onclick = youPickedUpDykartub;
    
    optionButtonElement2.textContent = "Lämna dykartuben";
    optionButtonElement2.onclick = loadScene2;

};

/** Du har plockat upp din kompis dykartub */
function youPickedUpDykartub() {
    hasFriendsDykartubBeenPickedUp = true;
    loadScene2();
};

