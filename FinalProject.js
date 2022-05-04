const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
const storyText = "Meet :insertx:, from :inserty:! They are interested in :insertz:. :insertx:'s favorite color is also Color, so we think you two iwll be life long friends!";


const insertX = ["Emerson", "Alex", "Cameron","Jamie","Chris","Jordan","Taylor"];
const insertY = ["Hogsmeade", "Mystic Falls", "Bikini Bottom","The Good Place","Gotham City","Pawnee, Indiana", "Boulder", "Room 100 in the ATLAS building"];
const insertZ = ["sports and music", "reading and knitting", "makeup and movies", "butter churning and cattle ranching", "throwing eggs at strangers and stealing cars","designing clothes for chihuahas and opening pizza stores under the sea"];
const imgLink= ["./img/Images/Gru.png","./img/Images/voldemort.png","./img/Images/witches.png","./img/Images/Dude.png","./img/Images/edna.png"];
randomize.addEventListener('click', result);

function result() {



newStory=storyText

let xItem= randomValueFromArray (insertX)
let yItem= randomValueFromArray (insertY)
let zItem= randomValueFromArray (insertZ)
let randImg = randomValueFromArray(imgLink);

newStory=newStory.replace(/:insertx:/g, xItem)
newStory=newStory.replace(/:inserty:/g, yItem)
newStory=newStory.replace(/:insertz:/g, zItem)
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Color',name)

}


  story.textContent =newStory ;
  story.style.visibility = 'visible';
}


let img = document.getElementById("result");
console.log(img.src)
