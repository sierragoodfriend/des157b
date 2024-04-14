(function() { 
    'use strict';

    const button = document.querySelector(`button`);
    const flowers = document.querySelectorAll(`.flowers`);
    const body = document.querySelector(`body`);
    const assignmentTitles = document.querySelectorAll(`h3`);
    const header = document.querySelector(`header`);
    const startPinkFlower = document.querySelector(`#starting-flower`);
    const startPurpFlower = document.querySelector(`#starting-purp-flower`);
    const startflw2 = document.querySelector(`#flower12`);
    const startflw3 = document.querySelector(`#flower13`);
    const startflw4 = document.querySelector(`#flower8`);
    let allFlowersShowing = false;

    //flowers there on start
    startflw2.style.display = `block`;
    startflw3.style.display = `block`;
    startflw4.style.display = `block`;

    button.addEventListener(`click`, function(){
        // if all flowers are not showing
        if(!allFlowersShowing) {
            for(let i = 0; i < flowers.length; i++){
                flowers[i].style.display = `block`; //no longer hidden
                flowers[i].classList.add(`flowersGrowing`); //animation
            }
                body.style.backgroundColor = `rgb(134, 201, 246)`; //lighter background for sun shining!
                for(let i = 0; i < assignmentTitles.length; i++) {
                    assignmentTitles[i].style.color = `rgb(85, 81, 81)`;
                } //change assignment title colors darker
                header.style.color = `rgb(85, 81, 81)`; //header color is now darker
                button.style.backgroundColor = `rgb(245, 250, 150)` //button is yellow
                button.style.boxShadow = `0 0 15px 10px rgb(245, 250, 150)`;

            allFlowersShowing = true;

            function randomColorGenerator() {
                const flowerColors = [
                    `images/pink-flower.png`,
                    `images/blue-flower.png`,
                    `images/yellow-flower.png`,
                    `images/orange-flower.png`,
                    `images/purple-flower.png`
                ];
                //generate a num between 0-4.9999, round down, use as flower color array number
                const randomNum = Math.floor(Math.random() * flowerColors.length);
                return flowerColors[randomNum];
                }

                flowers.forEach(function(flower) {
                    const interval = Math.random() * 14000 + 1000; // Random interval between 1 and 15 seconds
                    setInterval(function() {
                        flower.src = randomColorGenerator();
                    }, interval);
                });

            } else {
            
            for(let i = 0; i < flowers.length; i++){
                flowers[i].style.display = `none`;
                flowers[i].classList.remove(`flowersGrowing`);
            } 
            //change assignment title colors
            for(let i = 0; i < assignmentTitles.length; i++) {
                assignmentTitles[i].style.color = `rgb(247, 241, 241)`;
            }
            body.style.backgroundColor = `rgb(52, 125, 174)`;
            header.style.color = `rgb(247, 241, 241)`;
            // put start flowers back
            startPinkFlower.style.display = `block`;
            startPurpFlower.style.display = `block`;
            startflw2.style.display = `block`;
            startflw3.style.display = `block`;
            startflw4.style.display = `block`;

            allFlowersShowing = false;

            button.style.backgroundColor = `rgb(224, 215, 215)`
            button.style.boxShadow = `0 0 15px 10px rgb(224, 215, 215)`;
        }

    })

})();