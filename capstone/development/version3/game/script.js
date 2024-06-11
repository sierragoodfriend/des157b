document.addEventListener('DOMContentLoaded', function() {

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
    const overlayContents = document.querySelector(`#overlayContents`);
    const exitOverlay = document.querySelector(`.fa-arrow-right`);;
    const overlayHeaderBackground = document.querySelector(`#overlayHeaderBackground`);

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
                        overlayContents.innerHTML = `
                        <div id="overlayHeaderBackground">
                            <h1 class="overlayTitleText">Build homeless shelters</h1>
                        </div>

                        <div class="overlayText">
                            <p class="firstOverlayTextP">This is a good idea, but it's only a temporary solution.</p>
                            <p class="overlayTextP">✰ A homeless person requires stable, permanent housing without time restrictions to effectively stabilize their life.</p>
                            <p class="overlayTextP">✰ Creating new, quality, and affordable housing should be our top priority!</p>

                        </div>`;

                        break;
                    case 'option2':
                        health -= 20;
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlay.style.backgroundColor = `rgb(29, 121, 15)`;
                        overlayContents.innerHTML = `
                        <div id="overlayHeaderBackground">
                            <h1 class="overlayTitleText">Repurpose empty buildings as homes</h1>
                        </div>

                        <div class="overlayText">
                            <p class="firstOverlayTextP">This is a great idea!</p>
                            <p class="overlayTextP">✰ 'Housing first' is the most successful homelessness intervention strategy, and converting unused buildings into housing units is cost-effective and sustainable solution.</p>
                            <p class="overlayTextP">✰ New housing should be intended for low-income people and designed to address challenges faced by past public housing projects, such as ensuring proper maintenance, safety, and community integration.</p>
                            <p class="overlayTextP">✰ Success will require attentiveness, community engagement, and robust social services.</p>

                        </div>
                        `;
                        break;
                    case 'option3':
                        health -= 15;
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlayContents.innerHTML = `
                        <div id="overlayHeaderBackground">
                            <h1 class="overlayTitleText">Implement a housing voucher program</h1>
                        </div>

                        <div class="overlayText">
                            <p class="firstOverlayTextP">That's an acceptable choice.</p>
                            <p class="overlayTextP">✰ Housing vouchers provide low-income people with flexible housing options, enabling access to better neighborhoods.</p>
                            <p class="overlayTextP">✰ However, vouchers face challenges like insufficient funding, discrimination, and limited acceptance by landlords. These are just a few of the issues that would need to be addressed.</p>
                            <p class="overlayTextP">✰ Developing new, quality, integrated housing specifically for low-income residents might be a more effective solution.</p>
                        </div>
                        `;
                        break;
                }
                choiceSequence++;
                break;
            case 1: // Second set of options
                switch (choice) {
                    case 'option1':
                        health -= 15;
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlay.style.backgroundColor = `rgb(29, 121, 15)`;
                        overlayContents.innerHTML = `
                        <div id="overlayHeaderBackground">
                            <h1 class="overlayTitleText">Approve the "Home Sharing Support Act"</h1>
                        </div>

                        <div class="overlayText">
                            <p class="firstOverlayTextP">Great choice!</p>
                            <p class="overlayTextP">✰ Incentivizing people to open up their homes to residents – homeless, low-income, or otherwise – can help to lessen strains on the housing market.</p>
                            <p class="overlayTextP">✰ This act also has the potential to cultivate meaningful connections!</p>
                            <p class="overlayTextP">✰ Always remember that ensuring the safety of both tenants and homeowners is essential. Safety precautions could include regular inspections and clear emergency protocols.</p>
                        </div>
                        `;
                        break;
                    case 'option2':
                        health -= 10;
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlay.style.backgroundColor = `rgb(202, 174, 20)`;
                        overlayContents.innerHTML = `
                        <div id="overlayHeaderBackground">
                            <h1 class="overlayTitleText">Propose another solution</h1>
                        </div>

                        <div class="overlayText">
                            <p class="firstOverlayTextP">This is a good choice.</p>
                            <p class="overlayTextP">✰ Home sharing might raise safety and legal concerns for homeowners and tenants, so declining this proposal might be wise...</p>
                            <p class="overlayTextP">✰ But! With the right precautions, it could be a smart way to cultivate community and increase affordable housing options.</p>
                            <p class="overlayTextP">✰ Overall, by proposing another solution, you're engaging with legislation and keeping momentum for constructive change going.</p>
                        </div>
                        `;
                        break;
                    case 'option3':
                        health += 20;
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlay.style.backgroundColor = `rgb(189, 17, 17)`;
                        overlayContents.innerHTML = `
                        <div id="overlayHeaderBackground">
                            <h1 class="overlayTitleText">Ignore the "Home Sharing Support Act"</h1>
                        </div>

                        <div class="overlayText">
                            <p class="firstOverlayTextP">Terrible choice...</p>
                            <p class="overlayTextP">Ignoring the "Home Sharing Support Act" is a missed opportunity to address critical housing challenges and support vulnerable populations.</p>
                            <p class="overlayTextP">Approving, proposing a different solution... or even declining would be better options than ignoring the problem altogether.</p>
                            <p class="overlayTextP">Failing to engage with issues – like the housing crisis and homelessness – actively perpetuates existing adversities and inequalities.</p>
                        </div>
                        `;
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
                        overlay.style.backgroundColor = `rgb(189, 17, 17)`;
                        overlayContents.innerHTML = `
                        <div id="overlayHeaderBackground">
                            <h1 class="overlayTitleText">Luxurious and Spacious</h1>
                        </div>

                        <div class="overlayText">
                            <p class="firstOverlayTextP">✰ Bad choice...</p>
                            <p class="overlayTextP">✰ Luxurious, spacious housing takes up a lot of land and space, and it houses fewer people.</p>
                            <p class="overlayTextP">✰ 432 Park Avenue in New York is the world's tallest residential building, yet it only has 104 units. Given its height of 1,396 feet, it could potentially accommodate hundreds of units — perhaps 400 to 600.</p>
                            <p class="overlayTextP">✰ With the housing market in the United States in crisis and homelessness rates increasing, luxury housing exacerbates the problem, deepening inequalities and worsening the housing crisis.</p>
                        </div>
                        `;
                        break;
                    case 'option2':
                        health -= 15; 
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlay.style.backgroundColor = `rgb(29, 121, 15)`;
                        overlayContents.innerHTML = `
                        <div id="overlayHeaderBackground">
                            <h1 class="overlayTitleText">Efficient and compact</h1>
                        </div>

                        <div class="overlayText">
                            <p class="firstOverlayTextP">Great choice!</p>
                            <p class="overlayTextP">✰ This decision is a step in the right direction. Creating more housing opportunities is essential as we navigate the housing and homeless crises</p>
                            <p class="overlayTextP">✰ Efficient units can indeed be comfortable, livable, and affordable, making them a practical and equitable housing solution.</p>
                        </div>
                        `;
                        break;
                    case 'option3':
                        health -= 5; 
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlay.style.backgroundColor = `rgb(202, 174, 20)`;
                        overlayContents.innerHTML = `
                        <div id="overlayHeaderBackground">
                            <h1 class="overlayTitleText">Propose another solution</h1>
                        </div>

                        <div class="overlayText">
                            <p class="firstOverlayTextP">This is an acceptable choice.</p>
                            <p class="overlayTextP">✰ Opting for efficient and compact units could accommodate more tenants and reduce housing costs...</p>
                            <p class="overlayTextP">✰ However, favoring moderately-sized units over luxury ones offers a nice balance between comfort and affordability.</p>
                            <p class="overlayTextP">✰ Moving away from building luxury units is critical as we attempt to decrease homeless rates and create affordable housing.</p>
                        </div>
                        `;
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
                        overlay.style.backgroundColor = `rgb(29, 121, 15)`;
                        overlayContents.innerHTML = `
                        <div id="overlayHeaderBackground">
                            <h1 class="overlayTitleText">Healthcare</h1>
                        </div>

                        <div class="overlayText">
                            <p class="firstOverlayTextP">Great choice!</p>
                            <p class="overlayTextP">✰ Support centers providing healthcare services for unhoused and marginalized individuals help them by...</p>
                            <ol>
                                <li>Preventing long-term health issues and providing life saving support.</li>
                                <li>Providing holistic support, including mental health and addiction services.</li>
                                <li>Playing a crucial role in helping these individuals on a path towards housing and recovery.</li>
                            </ol>
                        </div>
                        `;
                        break;
                    case 'option2': // Housing
                        health -= 10; 
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlay.style.backgroundColor = `rgb(29, 121, 15)`;
                        overlayContents.innerHTML = `
                        <div id="overlayHeaderBackground">
                            <h1 class="overlayTitleText">Housing</h1>
                        </div>

                        <div class="overlayText">
                            <p class="firstOverlayTextP">Great choice!</p>
                            <p class="overlayTextP">✰ Support centers offering housing assistance to unhoused and marginalized individuals contribute by...</p>
                        <ol>
                            <li>Preventing homelessness and supporting individuals on a path towards housing and recovery.</li>
                            <li>Facilitating access to supportive services for long-term stability.</li>
                            <li>Helping to navigate ways to achieve permanent housing solutions.</li>
                        </ol>
                        </div>
                        `;
                        break;
                    case 'option3': // Job Assistance
                        health -= 10; 
                        overlay.classList.remove(`hidden`);
                        exitGame.classList.add(`hidden`);
                        overlay.style.backgroundColor = `rgb(29, 121, 15)`;
                        overlayContents.innerHTML = `
                        <div id="overlayHeaderBackground">
                            <h1 class="overlayTitleText">Job assistance</h1>
                        </div>

                        <div class="overlayText">
                            <p class="firstOverlayTextP">Great choice!</p>
                            <p class="overlayTextP">✰ Support centers providing job assistance to unhoused and marginalized individuals are important because they...</p>
                            <ol>
                                <li>Offer job training and skill development programs that are often very exclusive, privileged resources that unhoused and marginalized peoples struggle to gain access to.</li>
                                <li>Connect individuals with employers and help them achieve financial stability.</li>
                            </ol>
                        </div>
                        `;
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
                prompt.innerHTML = `<p>You're a government official and a city needs your help!<br><br>Homeless rates have reached a record high, and the city is running out of room for new developments.<br><br>What solution do you propose?</p>  `;
                option1.innerHTML = 'Build homeless shelters';
                option2.innerHTML = 'Repurpose empty buildings as homes';
                option3.innerHTML = 'Implement a housing voucher program';
                break;
            case 1:
                option1.innerHTML = 'Approve';
                option2.innerHTML = 'Propose another solution';
                option3.innerHTML = 'Ignore';
                prompt.innerHTML = `<p>You're presented with a proposal for the "Home Sharing Support Act".<br><br>It offers assistance to individuals who rent out part of their homes to tenants.<br><br>Will you approve this measure?</p>`;
                break;
            case 2:
                option1.innerHTML = 'Luxurious and spacious';
                option2.innerHTML = 'Efficient and compact';
                option3.innerHTML = 'Moderately sized and comfortable';
                prompt.innerHTML = `<p>An abandoned grocery store is being converted into apartments<br><br>Should they be...</p>`;
                break;
            case 3:
                option1.innerHTML = 'Healthcare';
                option2.innerHTML = 'Housing';
                option3.innerHTML = 'Job assistance';
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

});