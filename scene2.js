/**Laddar in scen 2. Ser olika ut beroende på vad du gjort innan.*/
function loadScene2() {
    
    textElement.textContent = "Du fortsätter simma in i den mörka grottan där du träffar på en sjöjungfru som vill byta sin sköld eller treudd spjut mot en dykartub.";
    
    if(hasFriendsDykartubBeenPickedUp === false){
        optionButtonElement1.textContent = "Byt din egna dykartub mot treudd";
        optionButtonElement1.addEventListener("click", cantBreathWithoutTube);
        
        optionButtonElement2.textContent = "Byt din egna dykartub mot sköld";
        optionButtonElement2.addEventListener("click", cantBreathWithoutTube);
        
        //Extra option knapp3
        const optionButton3 = document.createElement("button");
        optionButton3.innerText = "Byt inget";
        optionButton3.classList.add("btn");
        const divButtons = document.getElementById("option-buttons");
        divButtons.appendChild(optionButton3);
        optionButton3.addEventListener("click", angryMermaid)
    };
    
    if(hasFriendsDykartubBeenPickedUp === true){
        optionButtonElement1.textContent = "Behåll kompisens dykartub";
        optionButtonElement2.textContent = "Byt mot treudd";
        
        //Extra option knapp4
        const optionButton4 = document.createElement("button");
        optionButton4.innerText = "Byt mot sköld"
        optionButton4.classList.add("btn")
        const divButtons = document.getElementById("option-buttons")
        divButtons.appendChild(optionButton4);
    };
};

/**Lämnar du din egna tub till sjöljungfru är du död. */
function cantBreathWithoutTube() {
    document.getElementById("option-buttons").replaceWith("");
    textElement. textContent = "Tyvärr lever du inte länge till utan dykartuben. 'ctrl + r' för att börja om.";
};
/**Vill du inte byta något med sjöljungfrun så får du inte fortsätta ner i grottan. */
function angryMermaid(){
    document.getElementById("option-buttons").replaceWith("");
    textElement. textContent = "Sjöljungs frun blir sur och låter dig inte fortsätta ner i grottan... 'ctrl + r' för att börja om.";
};


