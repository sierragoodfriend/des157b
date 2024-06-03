(function() {
    'use strict';

    const backgroundImg = document.querySelector(`#entranceImg`);
    const doorClickableArea = document.querySelector(`#doorClickableArea`);
    const doorOutline = document.querySelector(`#doorOutline`);
    const person1ClickableArea = document.querySelector(`#person1ClickableArea`);
    const person1Outline = document.querySelector(`#person1Outline`);
    const person1Sound = document.querySelector(`#person1Sound`);
    const person2ClickableArea = document.querySelector(`#person2ClickableArea`);
    const person2Outline = document.querySelector(`#person2Outline`);
    const person2Sound = document.querySelector('#person2Sound');
    const person3ClickableArea = document.querySelector(`#person3ClickableArea`);
    const person3Outline = document.querySelector(`#person3Outline`);
    const person3Sound = document.querySelector('#person3Sound');
    const person4ClickableArea = document.querySelector(`#person4ClickableArea`);
    const person4Outline = document.querySelector(`#person4Outline`);
    const person4Sound = document.querySelector('#person4Sound');
    const person5ClickableArea = document.querySelector(`#person5ClickableArea`);
    const person5Outline = document.querySelector(`#person5Outline`);
    const person5Sound = document.querySelector('#person5Sound');
    const catClickableArea = document.querySelector(`#catClickableArea`);
    const catOutline = document.querySelector(`#catOutline`);
    const catSound = document.querySelector('#catSound');
    const windowClickableArea = document.querySelector(`#windowClickableArea`);
    const windowOutline = document.querySelector(`#windowOutline`);
    const gameClickableArea = document.querySelector(`#gameClickableArea`);
    const gameOutline = document.querySelector(`#gameOutline`);
    const cityMainTextContainer = document.querySelector(`#cityScapeTextContainer`);
    const btnCloseMainCityText = document.querySelector(`#cityScapeTextButton`);
    const letters = document.querySelectorAll(`.letter`);



    window.onload = function() {
        alert(`Hello and welcome! 1) Please see if you know what to do when entering the page, or if you can find out relatively quickly, 2) please see if you can play the game (it's not completed, I still need to update the overlays, but please see if the game makes sense and let me know if you think the questions asked aren't good enough, and 3) please explore the elements, let me know if you think I should add anything, and see what works well / what doesn't work well. Thank you!`);
    };
    
    let doorClicked = false; //used to track if door has been clicked

    //remove hidden class on the outline image of the door IF it hasn't been clicked and it is hovered over
    doorClickableArea.addEventListener(`mouseover`, function(){
        if (!doorClicked) {
            doorOutline.classList.remove(`hidden`);
        }
    });

    // hide outline when door isn't hovered over (assuming the door hasn't been clicked yet)
    doorClickableArea.addEventListener(`mouseout`, function(){
        if (!doorClicked) {
            doorOutline.classList.add(`hidden`);
        }
    });

    // when clicking door area
    //GOES TO LIVING ROOM!!
    function onDoorClick() {
        backgroundImg.src = `images/living-room.png`
        backgroundImg.alt = `Living Room Background`

        // hide the door clickable area and the outline!
        doorOutline.classList.add(`hidden`);
        doorClickableArea.classList.add(`hidden`);

        doorClicked = true;

        //selector boxes placed and outlines displayed when selector boxes are hovered over
        //people's # goes in order around the circle they are sitting in, starting on the leftmost person and moving clockwise
        // remove hidden class from person 1 outline when hovering over selector box
        person1ClickableArea.addEventListener(`mouseover`, function(){
            person1Outline.classList.remove(`hidden`);
        });

        // add hidden class back when not hovering over selector box so outline doesn't show
        person1ClickableArea.addEventListener(`mouseout`, function(){
            person1Outline.classList.add(`hidden`);
        });

        //play person 1 sound when they are clicked on
        person1ClickableArea.addEventListener(`click`, function(){
            person1Sound.play();
        });
        ///////////////////////////////////////////////////////////

        person2ClickableArea.addEventListener(`mouseover`, function(){
            person2Outline.classList.remove(`hidden`);
        });

        person2ClickableArea.addEventListener(`mouseout`, function(){
            person2Outline.classList.add(`hidden`);
        });

        person2ClickableArea.addEventListener(`click`, function(){
            person2Sound.play();
        });
        ///////////////////////////////////////////////////////////

        person3ClickableArea.addEventListener(`mouseover`, function(){
            person3Outline.classList.remove(`hidden`);
        });

        person3ClickableArea.addEventListener(`mouseout`, function(){
            person3Outline.classList.add(`hidden`);
        });

        person3ClickableArea.addEventListener(`click`, function(){
            person3Sound.play();
        });
        ///////////////////////////////////////////////////////////

        person4ClickableArea.addEventListener(`mouseover`, function(){
            person4Outline.classList.remove(`hidden`);
        });

        person4ClickableArea.addEventListener(`mouseout`, function(){
            person4Outline.classList.add(`hidden`);
        });

        person4ClickableArea.addEventListener(`click`, function(){
            person4Sound.play();
        });
        ///////////////////////////////////////////////////////////

        person5ClickableArea.addEventListener(`mouseover`, function(){
            person5Outline.classList.remove(`hidden`);
        });

        person5ClickableArea.addEventListener(`mouseout`, function(){
            person5Outline.classList.add(`hidden`);
        });

        person5ClickableArea.addEventListener(`click`, function(){
            person5Sound.play();
        });
        ///////////////////////////////////////////////////////////

        catClickableArea.addEventListener(`mouseover`, function(){
            catOutline.classList.remove(`hidden`);
        });

        catClickableArea.addEventListener(`mouseout`, function(){
            catOutline.classList.add(`hidden`);
        });

        catClickableArea.addEventListener(`click`, function(){
            catSound.play();
        });

        ///////////////////////////////////////////////////////////
        gameClickableArea.addEventListener(`mouseover`, function(){
            gameOutline.classList.remove(`hidden`);
        });

        gameClickableArea.addEventListener(`mouseout`, function(){
            gameOutline.classList.add(`hidden`);
        });

        ///////////////////////////////////////////////////////////
        //if window hasn't been clicked, then add and remove hidden class, when the window is clicked a new background is displayed and the window outline 
        windowClickableArea.addEventListener(`mouseover`, function(){
            if(!windowClicked) {
                windowOutline.classList.remove(`hidden`);
            }
        });
    
        windowClickableArea.addEventListener(`mouseout`, function(){
            if(!windowClicked) {
                windowOutline.classList.add(`hidden`);
            }
        });

        }

        doorClickableArea.addEventListener(`click`, onDoorClick);


    //the following code will look similar to the above code! Same method

    let windowClicked = false;

    function onWindowClick() {
        backgroundImg.src = `images/city-scape.png`;
        backgroundImg.alt = `City Scape Background`;

        //go through each outline and selector box and make them hidden
        windowClickableArea.classList.add(`hidden`);
        windowOutline.classList.add(`hidden`);
        gameClickableArea.classList.add(`hidden`);
        gameOutline.classList.add(`hidden`);
        catClickableArea.classList.add(`hidden`);
        catOutline.classList.add(`hidden`);
        person1ClickableArea.classList.add(`hidden`);
        person1Outline.classList.add(`hidden`);
        person2ClickableArea.classList.add(`hidden`);
        person2Outline.classList.add(`hidden`);
        person3ClickableArea.classList.add(`hidden`);
        person3Outline.classList.add(`hidden`);
        person4ClickableArea.classList.add(`hidden`);
        person4Outline.classList.add(`hidden`);
        person5ClickableArea.classList.add(`hidden`);
        person5Outline.classList.add(`hidden`);

        windowClicked = true;

        cityMainTextContainer.classList.remove(`hidden`);
        btnCloseMainCityText.classList.remove(`hidden`);

        for (let i = 0; i < letters.length; i++) {
            const eachLetter = letters[i];
            eachLetter.style.animationDelay = (i * 0.06) + 's';
        }
        
        btnCloseMainCityText.addEventListener(`click`, function(){
            cityMainTextContainer.classList.add(`hidden`);
            btnCloseMainCityText.classList.add(`hidden`);
        });
    }

    windowClickableArea.addEventListener(`click`, onWindowClick);

})();
