
/* RECUPERATION DES CLASSES DANS LE HTML */

const rotation = document.querySelector('.rotationTimer');
const rotation2 = document.querySelector('.rotationTimer2');

const revolution = document.querySelector('.revolutionTimer');
const revolution2 = document.querySelector('.revolutionTimer2');

const radius = document.querySelector('.radiusTimer');
const radius2 = document.querySelector('.radiusTimer2');
const radius3 = document.querySelector('.radiusTimer3');

const average = document.querySelector('.averageTimer');

/* RECUPERATION DES CHIFFRES DANS LE HTML */

let finalRotationNumber = rotation.innerHTML;
let finalRotationNumber2 = rotation2.innerHTML;


let finalRevolutionNumber = revolution.innerHTML;
let finalRevolutionNumber2 = revolution2.innerHTML;


let finalRadiusNumber = radius.innerHTML;
let finalRadiusNumber2 = radius2.innerHTML;
let finalRadiusNumber3 = radius3.innerHTML;

let finalAverageNumber = average.innerHTML;

/* INITIALISATION A ZERO DU COMPTEUR */

let initiateRotation = 0;
let initiateRotation2 = 0;

let initiateRevolution = 0;
let initiateRevolution2 = 0;

let initiateRadius = 0;
let initiateRadius2 = 0;


let initiateAverage = 0;

/* DUREE DU DEFILEMENT */

let duree = 1.5;

/* DUREE INTERVAL DU DEFILEMENT ENTRE LES CHIFFRES */

let rotationInterval = Math.ceil(duree * 1000)/finalRotationNumber;
let rotationInterval2 = Math.ceil(duree * 1000)/finalRotationNumber2;

let revolutionInterval = Math.ceil(duree * 1000)/finalRevolutionNumber;
let revolutionInterval2 = Math.ceil(duree * 1000)/finalRevolutionNumber2;

let radiusInterval = Math.ceil(duree * 1000)/finalRadiusNumber;
let radiusInterval2 = Math.ceil(duree * 1000)/finalRadiusNumber2;


let averageInterval = Math.ceil(duree * 1000)/finalAverageNumber;

/* *********** FONCTION ROTATION * ***********/

function rotationCountdown(){
    if(rotation.innerHTML >= 1){
        rotation.innerHTML = ++initiateRotation;
    if(initiateRotation < finalRotationNumber){
        setTimeout(rotationCountdown, rotationInterval);
    }
    }
}

setTimeout(rotationCountdown, rotationInterval);

function rotationCountdown2(){
    if(rotation2.innerHTML >=1){
        rotation2.innerHTML = ++initiateRotation2;
        if(initiateRotation2 < finalRotationNumber2){
            setTimeout(rotationCountdown2, rotationInterval2);
        }
    }
   
}

setTimeout(rotationCountdown2, rotationInterval2);

/* *********** FONCTION REVOLUTION * ***********/

function revolutionCountdown(){
    revolution.innerHTML = ++initiateRevolution;
    if(initiateRevolution < finalRevolutionNumber){
        setTimeout(revolutionCountdown, revolutionInterval);
    }
}

setTimeout(revolutionCountdown, revolutionInterval);

function revolutionCountdown2(){
    if(revolution2.innerHTML >= 1){
        revolution2.innerHTML = ++initiateRevolution2;
        if(initiateRevolution2 < finalRevolutionNumber2){
        setTimeout(revolutionCountdown2, revolutionInterval2);
    }
    }
    
}

setTimeout(revolutionCountdown2, revolutionInterval2);

/* *********** FONCTION RADIUS * ***********/

function radiusCountdown(){
    radius.innerHTML = ++initiateRadius;
    if(initiateRadius < finalRadiusNumber){
        setTimeout(radiusCountdown, radiusInterval);
    }
}

setTimeout(radiusCountdown, radiusInterval);

function radiusCountdown2(){
    radius2.innerHTML = ++initiateRadius2;
    if(initiateRadius2 < finalRadiusNumber2){
        setTimeout(radiusCountdown2, radiusInterval2);
    }
}

setTimeout(radiusCountdown2, radiusInterval2);




    let radiusInterval3 = Math.ceil(duree * 1000)/finalRadiusNumber3;
    let initiateRadius3 = 0;

    function radiusCountdown3(){
        if(radius3.innerHTML >= 1){
            radius3.innerHTML = ++initiateRadius3;
            if(initiateRadius3 < finalRadiusNumber3){
            setTimeout(radiusCountdown3, radiusInterval3);
        }
        }
        
    }
    
    setTimeout(radiusCountdown3, radiusInterval3);


/* *********** FONCTION AVERAGE * ***********/

function averageCountdown(){
    average.innerHTML = ++initiateAverage;
    if(initiateAverage < finalAverageNumber){
        setTimeout(averageCountdown, averageInterval);
    }
}

setTimeout(averageCountdown, averageInterval);