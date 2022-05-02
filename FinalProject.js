const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
const storyText = "Meet :insertx:, from :inserty:! They are interseted in :insertz:. At Age years old, we think :insertx: is the perfect match for you!";


const insertX = ["Shrek", "Gru", "Dr. Doofensmirtz","Voldemort","Rapunzel","Adele","Ms. Frizzle"];
const insertY = ["Hogsmeade", "Mystic Falls", "Bikini Bottom","The Good Place","Gotham City","Pawnee, Indiana"];
const insertZ = ["sports and music", "reading and knitting", "makeup and movies", "butter churning and cattle ranching", "throwing eggs at strangers and stealing cars","designing clothes for chihuahas and opening pizza stores under the sea"];

randomize.addEventListener('click', result);

function result() {



newStory=storyText

let xItem= randomValueFromArray (insertX)
let yItem= randomValueFromArray (insertY)
let zItem= randomValueFromArray (insertZ)

newStory=newStory.replace(/:insertx:/g, xItem)
newStory=newStory.replace(/:inserty:/g, yItem)
newStory=newStory.replace(/:insertz:/g, zItem)
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Age',name)

  }

  story.textContent =newStory ;
  story.style.visibility = 'visible';
}
