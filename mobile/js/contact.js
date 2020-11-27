
 
document.forms["contact-form"].addEventListener("submit", function(e) {
      
	 
    let erreur;
 
    let inputs = this;
    
    
    // Traitement cas par cas (input unique)
    // if (inputs["email"].value != "primfx@p.com") {
    //     erreur = "Adresse email incorrecte";
    // }
 
    // Traitement générique
    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
            erreur ="Veuillez renseigner tous les champs";
            break;
        }
    }
 
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert("Message envoyé !")
        }
        
        
    
    
});
