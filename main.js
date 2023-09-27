//tecla Pom
/*function tocaSomPom () {
document.querySelector("#Som_Tecla_Pom").play();
}

document.querySelector(".tecla_pom").onclick = tocaSomPom; 

//tecla clap
function tocaSomClap () {
    document.querySelector("#Som_Tecla_Clap").play();
    }
    
    document.querySelector(".tecla_clap").onclick = tocaSomClap; 
 
//tecla tim
function tocaSomTim () {
        document.querySelector("#Som_Tecla_Tim").play();
        }
        
        document.querySelector(".tecla_Tim").onclick = tocaSomTim; 

//tecla puff
function tocaSomPuff () {
        document.querySelector("#Som_Tecla_Puff").play();
        }
        
        document.querySelector(".tecla_Puff").onclick = tocaSomPuff; 

//tecla splash
 function tocaSomSplash () {
    document.querySelector("#Som_Tecla_Splash").play();
    }
    
    document.querySelector(".tecla_Splash").onclick = tocaSomSplash;

//tecla toim
function tocaSomToim () {
    document.querySelector("#Som_Tecla_Toim").play();
    }
    
    document.querySelector(".tecla_Toim").onclick = tocaSomToim;

//tecla psh
function tocaSomPsh () {
    document.querySelector("#Som_Tecla_Psh").play();
    }
    
    document.querySelector(".tecla_Psh").onclick = tocaSomPsh;

//tecla tic
function tocaSomTic () {
    document.querySelector("#Som_Tecla_Tic").play();
    }
    
    document.querySelector(".tecla_Tic").onclick = tocaSomTic;

//tecla tom
function tocaSomTom () {
    document.querySelector("#Som_Tecla_Tom").play();
    }
    
    document.querySelector(".tecla_Tom").onclick = tocaSomTom;
*/

function tocaSomPom () {
document.querySelector("#Som_Tecla_Pom").play();
}  

const listaDeTeclas = document.querySelectorAll('.tecla')
listaDeTeclas[0].onclick = tocaSomPom;