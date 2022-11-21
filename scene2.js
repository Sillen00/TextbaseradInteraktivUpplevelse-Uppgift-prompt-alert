/**@type {Boolean} Berättar om du bytte mot sköld eller inte */
let bytteSkoldMotTub = false;
/**@type {Boolean} Berättar om du bytte mot treudd eller inte */
let bytteTreuddMotTub = false;
/**@type {Boolean} Berättar om du valde att inte byta något alls */
let bytteInget = false;


/**Laddar in scen 2. Ser olika ut beroende på vad du gjort innan.*/
function loadScene2() {
    
    textElement.textContent = "Du fortsätter simma in i den mörka grottan där du träffar på en sjöjungfru som vill byta sin sköld eller treudd spjut mot en dykartub.";
    
    if(hasFriendsDykartubBeenPickedUp === false){
        optionButtonElement1.textContent = "Byt din egna dykartub mot treudd";
        optionButtonElement1.onclick = cantBreathWithoutTube;
        
        optionButtonElement2.textContent = "Byt din egna dykartub mot sköld";
        optionButtonElement2.onclick = cantBreathWithoutTube;
        

        optionButtonElement3.style.display = "block";
        optionButtonElement3.textContent = "Byt inget";        
        optionButtonElement3.onclick = angryMermaid
    };
    
    if(hasFriendsDykartubBeenPickedUp === true){
        optionButtonElement1.textContent = "Behåll din bästa kompis dykartub";
        optionButtonElement1.onclick = behollDykartub;

        optionButtonElement2.textContent = "Byt mot treudd";
        optionButtonElement2.onclick = bytteMotTreudd;

        
        optionButtonElement3.style.display = "block";
        optionButtonElement3.textContent = "Byt mot sköld";
        optionButtonElement3.onclick = bytteMotSkold;
    };
};


//Först if satsen ovan

/**Lämnar du din egna tub till sjöljungfru är du död. */
function cantBreathWithoutTube() {
    textElement. textContent = "Tyvärr lever du inte länge till utan dykartuben.";
    optionButtonElement1.textContent = "Restart";
    optionButtonElement1.onclick = loadStartScene;

    optionButtonElement2.style.display = "none";
    optionButtonElement3.style.display = "none";

};
/**Vill du inte byta något med sjöljungfrun så får du inte fortsätta ner i grottan. */
function angryMermaid(){
    textElement. textContent = "Sjöljungs frun blir sur och låter dig inte fortsätta ner i grottan...";

    optionButtonElement1.textContent = "Restart";
    optionButtonElement1.onclick = loadStartScene;

    optionButtonElement2.style.display = "none";
    optionButtonElement3.style.display = "none";
};



//onclick från andra if satsen ovan.

/**Du valde treudd och går vidare till scene3 */
function bytteMotTreudd(){
    bytteTreuddMotTub = true;
    loadScene3();
}

/**Du valde sköld och går vidare till scene3 */
function bytteMotSkold(){
    bytteSkoldMotTub = true;
    loadScene3();
}

/**Du valde inget och går vidare till scene3 */
function behollDykartub(){
    bytteInget = true;
    loadScene3();
}

