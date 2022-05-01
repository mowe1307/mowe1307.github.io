let liEls = document.querySelectorAll('ul li');
let index = 0;
window.show = function(increase) {
  console.log("function run");
  index = index + increase;
  index = Math.min(
    Math.max(index,0),
    liEls.length-1
  );
  liEls[index].scrollIntoView({behavior: 'smooth'});
}
