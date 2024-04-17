(function(){

    const video = document.querySelector(`#videoOnTV`);
    const playButton = document.querySelector(`.fa-play`);
    const pauseButton = document.querySelector(`.fa-pause`);

    //text on tv
    const line1 = document.querySelector(`#line1`);
    const line2 = document.querySelector(`#line2`);
    const line3 = document.querySelector(`#line3`);
    //data for text display timing
    const poem = {
        start: [1, 7, 18],
        stop: [5, 13, 26],
        line: [line1, line2, line3]
    }


    //event listener for play button
    playButton.addEventListener(`click`, function() {
        video.play();
    });

    //event listener for pause button
    pauseButton.addEventListener(`click`, function(){
        video.pause();
    });

    // make text play at different times using data above
    function checkTime() {
        console.log(parseInt(video.currentTime));
      
        if (poem.start[0] < video.currentTime && video.currentTime < poem.stop[0]) {
          poem.line[0].className = "showing";
        } else {
          poem.line[0].className = "hidden";
        }
        if (poem.start[1] < video.currentTime && video.currentTime < poem.stop[1]) {
          poem.line[1].className = "showing";
        } else {
          poem.line[1].className = "hidden";
        }
        if (poem.start[2] < video.currentTime && video.currentTime < poem.stop[2]) {
          poem.line[2].className = "showing";
        } else {
          poem.line[2].className = "hidden";
        }
      }

      //actively checks the time in order to run/update the checkTime function
      video.addEventListener('timeupdate', checkTime);

    //set hue roatation to be mouse x position
    document.addEventListener(`mousemove`, function(event) {

        video.style.filter = `hue-rotate(${event.clientX}deg)`;

    });

})();
