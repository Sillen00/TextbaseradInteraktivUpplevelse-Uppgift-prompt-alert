function loadScene4(){
    textElement.textContent = "Du fortsätter leta och märker att du har fått ett meddelande från din kompis med hens koordinater! Du blir mycket glad och börjar simma mot koordinaterna. När du börjar närma dig kordinaterna möter du på en stor haj.";

    if(bytteSkoldMotTub === true){
        optionButtonElement1.textContent = "Göm dig bakom din sköld!";
        optionButtonElement1.addEventListener("click", anvandeSkold)
        
        optionButtonElement2.style.display ="none";
    }

    else if(bytteTreuddMotTub === true){
        optionButtonElement1.textContent = "Göm dig bakom din Treudd!";
        optionButtonElement1.addEventListener("click", anvandeTreudd)
        
        optionButtonElement2.style.display ="none";
    }

    else if(bytteInget === true){
        optionButtonElement1.textContent = "Använd din tub för att få ett övertryck i kompisens tub och kasta den mot hajen"
        optionButtonElement1.addEventListener("click", anvandeTub)
    
        optionButtonElement2.style.display = "none";
    }
};



function anvandeSkold(){
    document.getElementById("option-buttons").replaceWith("");
    textElement.textContent = "Hajen skrattar åt dig när du gömmer dig bakom skölden och äter dig. 'ctrl + r' för att börja om.";
};
function anvandeTreudd(){
    document.getElementById("option-buttons").replaceWith("");
    textElement.textContent = "Trodde du verkligen att hajen skulle dö av treudden. Hajen biter av treudden på mitten. 'ctrl + r' för att börja om."
};
function anvandeTub(){
    textElement.textContent = "Dykartuben glider fram mot hajen och precis bredvid hajen, tack vare övertrycket i tuben exploderar den och dödar hajen."
    
    optionButtonElement1.textContent = "Fortsätt"
    optionButtonElement1.addEventListener("click", slutScene)
};




function slutScene(){
    document.getElementById("option-buttons").replaceWith("");
    document.body.style.backgroundImage = "url('/images/Grotta-under-vatten.jpg')";

    textElement.textContent = "Efter att tagit dig förbi hajen hittar du din bästa kompis i en undervattens grotta. Ni delar på det sista luften som är kvar i din dykartub och tar er snabbaste vägen, precis ut och upp till ytan och lever lyckliga i alla sina dagar.";

};