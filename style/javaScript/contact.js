function reset(){
    const form = document.getElementById("form")
    form.reset()

}
function verifNom(){
    text = document.getElementById("name").value.trim();
    if(text == ""){
        erreur = document.getElementById("erreurnom");
        erreur.innerHTML = "entrez au moins 4 caractere!!";
        b = document.getElementById("name")
        b.style.borderColor = "red";
    }else if( text != "" && text.length < 4){
        erreur = document.getElementById("erreurnom");
        erreur.innerHTML = "minimum quatre caracteres pour le nom";
        b = document.getElementById("name")
        b.style.borderColor = "red";
    }
    else{
        erreur = document.getElementById("erreurnom");
        erreur.innerHTML = "";
        b = document.getElementById("name")
        b.style.borderColor = "";

    }
    
}
function verifEmail() {
    Email = document.getElementById("email").value.trim();
    if(email == ""){
        erreur =  document.getElementById("erreuremail");
        erreur.innerHTML = "Entrez une Email valide"
        c = document.getElementById("email");
        c.style.borderColor = "red";
    }
}