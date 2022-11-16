window.addEventListener("DOMContentLoaded", main);

/**
 * Startar programet när DOMen laddats in.
 */
function main() {
    loadStartScene();
};


/**
 * Start och första scenen på spelet.
 */
function loadStartScene(){
    const textElement = document.getElementById("text");
    const optionButtonElement1 = document.getElementById("option-btn-1");
    const optionButtonElement2 = document.getElementById("option-btn-2");

    textElement.textContent = "Du och din kompis har dykt i flera dagar i Egyptens grottor för att hitta en stor kista med guld. Du simmar in i ett litet hål för att se om skatten finns där. Du hittar inget och simmar ut igen och märker då att din kompis är borta. Du ser hans dykartub och bestämmer dig för att hitta din kompis. Vill ta med dig dykartuben eller lämna kvar den?"
    optionButtonElement1.textContent = "Ta med dykartuben";
    optionButtonElement2.textContent = "Lämna dykartuben";

    optionButtonElement1.addEventListener("click", loadScene2);
    optionButtonElement2.addEventListener("click", loadScene2);
};

function loadScene2() {

}






