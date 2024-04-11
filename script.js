(function() { 
    'use strict';

    const button = document.querySelector(`button`);
    const flowers = document.querySelectorAll(`.flowers`);
    const body = document.querySelector(`body`);
    const giveSunText = document.querySelector(`p`);
    const assignmentTitles = document.querySelectorAll(`h3`);
    const header = document.querySelector(`header`);
    let allFlowersShowing = false;

    button.addEventListener(`click`, function(){
        // if all flowers are not showing
        if(!allFlowersShowing) {
            for(let i = 0; i < flowers.length; i++){
                flowers[i].style.display = `block`; //no longer hidden
                flowers[i].classList.add(`flowersGrowing`); //animation
                button.innerHTML = ``;
                button.classList.remove(`button-start`); //changes button desgin from btn to sun
                button.classList.add(`button-clicked`);
                body.style.backgroundColor = `rgb(134, 201, 246)`; //lighter background for sun shining!
                for(let i = 0; i < assignmentTitles.length; i++) {
                    assignmentTitles[i].style.color = `rgb(85, 81, 81)`;
                } //change assignment title colors darker
                header.style.color = `rgb(85, 81, 81)`; //header color is now darker
                
            }
            button.classList.add(`btnAnimation`);
            giveSunText.innerHTML = ``;
            allFlowersShowing = true;
        } else {
            for(let i = 0; i < flowers.length; i++){
                flowers[i].style.display = `none`;
                flowers[i].classList.remove(`flowersGrowing`);
                button.innerHTML = `❂`;
                button.classList.remove(`button-clicked`);
                button.classList.add(`button-start`);
                body.style.backgroundColor = `rgb(84, 160, 211)`;
                for(let i = 0; i < assignmentTitles.length; i++) {
                    assignmentTitles[i].style.color = `rgb(247, 241, 241)`;
                } //change assignment title colors
                header.style.color = `rgb(247, 241, 241)`;
            }
            button.classList.remove(`btnAnimation`);
            giveSunText.innerHTML = `Give the flowers some sun!`;
            allFlowersShowing = false;
        }

    })

})();