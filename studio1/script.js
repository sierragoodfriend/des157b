(function(){

    const video = document.querySelector(`#videoOnTV`);
    const playButton = document.querySelector(`.fa-play`);
    const pauseButton = document.querySelector(`.fa-pause`);


    //event listener for play button
    playButton.addEventListener(`click`, function() {
        video.play();
    });

    //event listener for pause button
    pauseButton.addEventListener(`click`, function(){
        video.pause();
    });

    //change hue depending on where mouse (x) is on the page
    document.addEventListener(`mousemove`, function(event) {
        // Calculate hue rotation based on mouse x position
        const xPosition = event.clientX;

        //set hue roatation to be mouse x position
        video.style.filter = `hue-rotate(${xPosition}deg)`;
    });

})();
