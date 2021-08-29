const bgPlanet = document.querySelector('.bg-planet');

const overBtn = document.querySelector('.over');
const structureBtn = document.querySelector('.structure');
const surfaceBtn = document.querySelector('.surface');

/*PHONE*/

const overBtnPhoneAnim = document.querySelector('.over-phone');
const structureBtnPhoneAnim = document.querySelector('.structure-phone');
const surfaceBtnPhoneAnim = document.querySelector('.surface-phone');


const overviewBg = document.querySelector('.general');
const structureBg = document.querySelector('.internal');
const geologieBg = document.querySelector('.geo');

/* TEXT */

const firstTxt = document.querySelector('.first');
const secondTxt = document.querySelector('.second');
const thirdTxt = document.querySelector('.third');



overBtn.addEventListener('click', () =>{

    overviewBg.classList.add('fade_in');

    if(structureBg.classList.contains('fade_in')){
        structureBg.classList.remove('fade_in');
    }

    if(geologieBg.classList.contains('fade_in')){
        geologieBg.classList.remove('fade_in');
    }

    firstTxt.classList.add('fade_in_text');

})

structureBtn.addEventListener('click', () =>{

    structureBg.classList.add('fade_in');

    if(overviewBg.classList.contains('fade_in')){
        overviewBg.classList.remove('fade_in');
    }

    if(geologieBg.classList.contains('fade_in')){
        geologieBg.classList.remove('fade_in');
    }

    secondTxt.classList.add('fade_in_text');
   
})

surfaceBtn.addEventListener('click', () =>{

    geologieBg.classList.add('fade_in');
    overviewBg.classList.add('fade_in');
    
    if(structureBg.classList.contains('fade_in')){
        structureBg.classList.remove('fade_in');
    }

    thirdTxt.classList.add('fade_in_text');
    
})


/************* PHONE PART  ********** */


overBtnPhoneAnim.addEventListener('click', () =>{

    overviewBg.classList.add('fade_in_phone');

    if(structureBg.classList.contains('fade_in_phone')){
        structureBg.classList.remove('fade_in_phone');
    }

    if(geologieBg.classList.contains('fade_in_phone')){
        geologieBg.classList.remove('fade_in_phone');
    }

    firstTxt.classList.add('fade_in_text_phone');

})

structureBtnPhoneAnim.addEventListener('click', () =>{

    structureBg.classList.add('fade_in_phone');

    if(overviewBg.classList.contains('fade_in_phone')){
        overviewBg.classList.remove('fade_in_phone');
    }

    if(geologieBg.classList.contains('fade_in_phone')){
        geologieBg.classList.remove('fade_in_phone');
    }

    secondTxt.classList.add('fade_in_text_phone');
   
})

surfaceBtnPhoneAnim.addEventListener('click', () =>{

    geologieBg.classList.add('fade_in_phone');
    overviewBg.classList.add('fade_in_phone');
    
    if(structureBg.classList.contains('fade_in_phone')){
        structureBg.classList.remove('fade_in_phone');
    }

    thirdTxt.classList.add('fade_in_text_phone');
    
})


