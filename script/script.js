let audio = true;
let img = document.getElementById("parlante");
let img_dos = document.getElementById("parlante_dos");
let img_tres = document.getElementById("parlante_tres");
const music = new Audio("audio/intro.mp3");
const music_dos = new Audio("audio/entrada_1.mp3");
const music_tres = new Audio("audio/entrada2.mp3");

/*INTRO*/
function apretar(){
  
    switch(audio){
        case false:
            img.src= "img/audio.png";
            audio = true;
            music.play();
        break;
        case true:
            img.src= "img/audio_off.png"
            audio = false;
            music.pause();
        break;
    }
 }

  /*PRIMERA ENTRADA*/
 function apretardos(){
    switch(audio){
        case false:
            img_dos.src= "img/audio.png";
            audio = true;
            music_dos.play();
        break;
        case true:
            img_dos.src= "img/audio_off.png"
            audio = false;
            music_dos.pause();
        break;
    }
 }


    let menu = document.getElementById("entradas").style.visibility= "hidden";
    let vista = false;
function mostrar(){
    switch(vista){
        case false:
         menu = document.getElementById("entradas").style.visibility = "visible";  
         vista = true;  
        break;
        case true:
         menu = document.getElementById("entradas").style. visibility = "hidden";
        vista = false;
        break;
    }
    
}

/*SEGUNDA ENTRADA*/
function apretartres(){
    switch(audio){
        case false:
            img_tres.src= "img/audio.png";
            audio = true;
            music_tres.play();
        break;
        case true:
            img_tres.src= "img/audio_off.png"
            audio = false;
            music_tres.pause();
        break;
    }
 }

 let menu2 = document.getElementById("entradas").style.visibility= "hidden";
 let vista2 = false;
function mostrar(){
 switch(vista2){
     case false:
      menu2 = document.getElementById("entradas").style.visibility = "visible";  
      vista2 = true;  
     break;
     case true:
        menu2 = document.getElementById("entradas").style. visibility = "hidden";
     vista2 = false;
     break;
 }
 
}
 /*
 const music = new Audio('audio/intro.mp3');
 
music.play();
audio = true;

        music.stop();
        audio = false;

        if(audio==false){
        img.src="img/audio.png";
        audio = true;
    }
    if(audio == true){
        img.src="img/audio_off.png";
        

    }

        */
