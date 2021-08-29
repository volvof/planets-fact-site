
/* BOUTONS */
const btnOver = document.querySelector('.over');
const btnStructure = document.querySelector('.structure');
const btnSurface = document.querySelector('.surface');

/* BUTTON PHONE VERS. */
const btnOverPhone = document.querySelector('.over-phone');
const btnStructurePhone = document.querySelector('.structure-phone');
const btnSurfacePhone = document.querySelector('.surface-phone');


/* TEXT */

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

/* IMAGES */

const bgOverview = document.querySelector('.general');
const bgStructure = document.querySelector('.internal');
const bgGeologie = document.querySelector('.geo');


btnOver.addEventListener('click', ()=>{
    if(first.style.display = 'none'){
        first.style.display = 'block';
        bgOverview.style.display = 'block';   
    }
   
    if(second.style.display = 'block'){
        second.style.display = 'none';
        bgStructure.style.display = 'none';
    }

    if(third.style.display = 'block'){
        third.style.display = 'none';
        bgGeologie.style.display = 'none';
    }
})


btnStructure.addEventListener('click', () =>{
    if(second.style.display = 'none'){
        second.style.display = 'block';
        bgStructure.style.display = 'block';
    }

    if(first.style.display = 'block'){
        first.style.display = 'none';
        bgOverview.style.display = 'none';
    }

    if(third.style.display = 'block'){
        third.style.display = 'none';
        bgGeologie.style.display = 'none';
    }
 
})


btnSurface.addEventListener('click', ()=>{
    if(third.style.display = 'none'){
        third.style.display = 'block';
        bgGeologie.style.display = 'block';
    }

    if(second.style.display = 'block'){
        second.style.display = 'none';
        bgStructure.style.display = 'none';
    }

    if(first.style.display = 'block'){
        first.style.display = 'none';
        bgOverview.style.display = 'block';
    }

})

/* PHONE PART */

btnOverPhone.addEventListener('click', ()=>{
    if(first.style.display = 'none'){
        first.style.display = 'block';
        bgOverview.style.display = 'block';   
    }
   
    if(second.style.display = 'block'){
        second.style.display = 'none';
        bgStructure.style.display = 'none';
    }

    if(third.style.display = 'block'){
        third.style.display = 'none';
        bgGeologie.style.display = 'none';
    }
})


btnStructurePhone.addEventListener('click', () =>{
    if(second.style.display = 'none'){
        second.style.display = 'block';
        bgStructure.style.display = 'block';
    }

    if(first.style.display = 'block'){
        first.style.display = 'none';
        bgOverview.style.display = 'none';
    }

    if(third.style.display = 'block'){
        third.style.display = 'none';
        bgGeologie.style.display = 'none';
    }
 
})


btnSurfacePhone.addEventListener('click', ()=>{
    if(third.style.display = 'none'){
        third.style.display = 'block';
        bgGeologie.style.display = 'block';
    }

    if(second.style.display = 'block'){
        second.style.display = 'none';
        bgStructure.style.display = 'none';
    }

    if(first.style.display = 'block'){
        first.style.display = 'none';
        bgOverview.style.display = 'block';
    }

})







