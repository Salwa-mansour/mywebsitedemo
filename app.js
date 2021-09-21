document.addEventListener('DOMContentLoaded',function(){

    // Detect request animation frame
var scroll = window.requestAnimationFrame ||
// IE Fallback
function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.work-img'); 

function loop() {

elementsToShow.forEach(function (element) {
if (isElementInViewport(element)) {
element.classList.add('inview-img');
} else {
element.classList.remove('inview-img');
}
});

scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
// special bonus for those using jQuery
if (typeof jQuery === "function" && el instanceof jQuery) {
el = el[0];
}
var rect = el.getBoundingClientRect();
return (
(rect.top <= 300
&& rect.bottom >= 300)
||
(rect.bottom >= (window.innerHeight/2 || document.documentElement.clientHeight/2) &&
rect.top <= (window.innerHeight/2 || document.documentElement.clientHeight/2))
||
(rect.top >= 0 &&
rect.bottom <= (window.innerHeight/2 || document.documentElement.clientHeight/2))
);
}

})