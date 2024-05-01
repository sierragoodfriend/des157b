let globalData;

async function getData(){
    const myPics = await fetch(`data/catphotos.json`);
    const data = await myPics.json();
    globalData = data;
    document.querySelector(`#picker`).innerHTML = createOptions(data);
}

//function that makes html in select box the dates
function createOptions(data){
    let html = `<option>---</option>`;
    const dataPoints = Object.keys(data); // variable that holds the keys - the dates - in an array
    dataPoints.forEach(function(eachPoint){
        html += `<option value="${eachPoint}">${eachPoint}</option>`
    });
    return html;
}

document.querySelector('#picker').addEventListener('change', function() {
    const selectedDate = this.value; // access selected date
    const images = globalData[selectedDate].images; // variable to acces the images for the selected date
    document.querySelector('#imageContainer').innerHTML = ``; // clear the image container
    images.forEach(function(imageSelected) { //create image tags for added images
        const img = document.createElement(`img`);
        img.src = imageSelected; //adds necessary src and alt tags
        img.alt = `Cat Photo From Selected Date`;
        document.querySelector(`#imageContainer`).appendChild(img);
    });
});

getData();