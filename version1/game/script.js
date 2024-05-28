(function() {
    'use strict';

    let health = 50; // Starting homeless rate
    const healthBarInterior = document.querySelector('#healthBarInterior');
    const healthPercentage = document.querySelector('#healthPercentage');
    const winning = document.querySelector(`#winningContainer`);
    const exitGame = document.querySelector(`.fa-house`);
    const prompt = document.querySelector('#prompt');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const overlay = document.querySelector(`#overlay`);
    const overlayText = document.querySelector(`#overlayText`);
    const exitOverlay = document.querySelector(`#exitOverlay`);;

    // //go back home if you don't want to play game
    // exitGame.addEventListener(`click`, function(){

    //     // window.history.back();
    // })

    function updateHealthBar(health) {
        healthBarInterior.style.width = `${health}%`;

        healthPercentage.innerHTML = `Homeless Rate – ${health}%`;

        if(health <= 40) {
            healthBarInterior.style.background = `linear-gradient(0deg, rgba(1,148,57,1) 0%, rgba(68,203,120,1) 50%, rgba(1,148,57,1) 100%)`;
        } else if (health <= 60) {
            healthBarInterior.style.background = `linear-gradient(0deg, rgb(183, 171, 7) 0%, rgb(230, 217, 33) 50%, rgb(183, 171, 7) 100%)`;
        } else {
            healthBarInterior.style.background = `linear-gradient(0deg, rgb(183, 7, 7) 0%, rgb(232, 49, 49) 50%, rgb(183, 7, 7) 100%)`;
        }
    }
    // Initial update
    updateHealthBar(health);

    let choiceSequence = 0; // Track the current choice sequence

    // turns off overlay when clicking x in corner, back to making choices
    exitOverlay.addEventListener(`click`, function(){
        overlay.classList.add('hidden');
        exitGame.classList.remove(`hidden`);
    })

    function makeChoice(choice) {
        switch (choiceSequence) {
            case 0: // First set of options
                switch (choice) {
                    case 'option1':
                        health -= 10;
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlayText.innerHTML = `Button Set 1 Option 1`;
                        break;
                    case 'option2':
                        health -= 20;
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlayText.innerHTML = `Button Set 1 Option 2`;
                        break;
                    case 'option3':
                        health += 15;
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlayText.innerHTML = `Button Set 1 Option 3`;
                        break;
                }
                choiceSequence++;
                break;
            case 1: // Second set of options
                switch (choice) {
                    case 'option1':
                        health -= 10;
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlayText.innerHTML = `Button Set 2 Option 1`;
                        break;
                    case 'option2':
                        health += 10;
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlayText.innerHTML = `Button Set 2 Option 2`;
                        break;
                    case 'option3':
                        health += 15;
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlayText.innerHTML = `Button Set 2 Option 3`;
                        break;
                }
                choiceSequence++;
                break;
                case 2: // Third set of options
                switch (choice) {
                    case 'option1':
                        health += 20;
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlayText.innerHTML = `Button Set 3 Option 1`;
                        break;
                    case 'option2':
                        health -= 15; 
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlayText.innerHTML = `Button Set 3 Option 2`;
                        break;
                    case 'option3':
                        health -= 5; 
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlayText.innerHTML = `Button Set 3 Option 3`;
                        break;
                }
                choiceSequence ++;
                break;
                case 3: // Fourth set of options
                switch (choice) {
                    case 'option1': // Healthcare
                        health -= 10;
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlayText.innerHTML = `Button Set 4 Option 1`;
                        break;
                    case 'option2': // Housing
                        health -= 10; 
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlayText.innerHTML = `Button Set 4 Option 2`;
                        break;
                    case 'option3': // Job Assistance
                        health -= 10; 
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlayText.innerHTML = `Button Set 4 Option 3`;
                        break;
                }
                choiceSequence ++;
               
        }
        updateHealthBar(health);
        regenerateOptions(); // Regenerate options to reflect the current state
    }

    function regenerateOptions() {
        switch (choiceSequence) {
            case 0:
                option1.innerHTML = 'Erect temporary homeless shelters';
                option2.innerHTML = 'Repurpose empty buildings as homes';
                option3.innerHTML = 'Wait for the issue to resolve on its own';
                prompt.innerHTML = `<p>You're a local government official and the city needs your help!<br><br>Homeless rates have reached a record high, and the city is running out of room for new developments.<br><br>What solution do you propose?</p>  `;
                break;
            case 1:
                option1.innerHTML = 'Approve';
                option2.innerHTML = 'Decline';
                option3.innerHTML = 'Ignore';
                prompt.innerHTML = `<p>You're presented with a proposal for the "Home Sharing Support Act".<br><br>It offers assistance to individuals who rent out part of their homes to tenants.<br><br>Will you approve this measure?</p>`;
                break;
            case 2:
                option1.innerHTML = 'Luxurious and Spacious';
                option2.innerHTML = 'Efficient and Compact';
                option3.innerHTML = 'Moderately Sized and Comfortable';
                prompt.innerHTML = `<p>An abandoned grocery store is being converted into apartments<br><br>Should they be...</p>`;
                break;
            case 3:
                option1.innerHTML = 'Healthcare';
                option2.innerHTML = 'Housing';
                option3.innerHTML = 'Job Assistance';
                prompt.innerHTML = `<p>The city wants to deploy support centers that will provide aid to unhoused people.<br><br>What essential resource could they provide?</p>`;
                break;
            case 4:
            prompt.innerHTML = ``;
            option1.remove();
            option2.remove();
            option3.remove();

            if (health > 10) {
                alert("You lost. The situation worsened due to your choices.");
            } else if (health <= 10) {
                winning.classList.remove(`hidden`);
            }

            break;
        }
    }

    regenerateOptions();
    option1.addEventListener('click', () => makeChoice('option1'));
    option2.addEventListener('click', () => makeChoice('option2'));
    option3.addEventListener('click', () => makeChoice('option3'));

    // allows window to be refreshed to go back to home page
    exitGame.addEventListener(`click`, function(){
        window.history.back();
    });
})();