
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoskills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("HTML");
        habilidades[2].classList.add("CSS");
        habilidades[3].classList.add("Photoshop");
        habilidades[4].classList.add("Ilustrator");
        habilidades[5].classList.add("PremierePro");
        habilidades[6].classList.add("Audition");
        habilidades[7].classList.add("Comunicación");
        habilidades[8].classList.add("TrabajoenEquipo");
        habilidades[9].classList.add("Creatividad");
        habilidades[9].classList.add("Atencionaldetalle");

    }
    window.onscroll = function(){
        efectoHabilidades();
    } 
}
