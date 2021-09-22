document.addEventListener('DOMContentLoaded',function(){


    var screenWidth = window.innerWidth    // The browser viewport width (including vertical scroll bar, includes padding but not border or margin)
    || document.documentElement.clientWidth
    || document.body.clientWidth;
        var scroll =  window.requestAnimationFrame ||
           
            // IE Fallback
            function(callback){ window.setTimeout(callback, 10000/6)};
// ////////////////////////////////////////////////////////////////////////////////////////////
function onScroolMove(targetedElemnts,animationClass,topAndBottom,windowHighetRate){
    // Detect request animation frame
 
            var elementsToShow = document.querySelectorAll(targetedElemnts); 
// console.log(elementsToShow)
            function loop() {

            elementsToShow.forEach(function (element) {
            if (isElementInViewport(element)) {
            element.classList.add(animationClass);
            } else {
            element.classList.remove(animationClass);
            }
            });

            scroll(loop);
            }
          
            // Helper function from: http://stackoverflow.com/a/7557433/274826
            function isElementInViewport(el) {
            // special bonus for those using jQuery
            if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
            }
            var rect = el.getBoundingClientRect();
            // console.log(rect)
            return (
            (rect.top >= topAndBottom
            && rect.bottom <= topAndBottom)
            ||
            (rect.bottom <= (window.innerHeight/ windowHighetRate || document.documentElement.clientHeight/ windowHighetRate) &&
            rect.top >= (window.innerHeight/ windowHighetRate || document.documentElement.clientHeight/ windowHighetRate))
            ||
            (rect.top <= topAndBottom &&
            rect.bottom >= (window.innerHeight/ windowHighetRate || document.documentElement.clientHeight/ windowHighetRate))
            );
            }
            // make every thing work
            loop();

          
            // Helper function from: http://stackoverflow.com/a/7557433/274826
            function isElementInViewport(el) {
            // special bonus for those using jQuery
            if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
            }
            var rect = el.getBoundingClientRect();
            // console.log(rect)
            return (
            (rect.top <= topAndBottom
            && rect.bottom >= topAndBottom)
            ||
            (rect.bottom >= (window.innerHeight/ windowHighetRate || document.documentElement.clientHeight/ windowHighetRate) &&
            rect.top <= (window.innerHeight/ windowHighetRate || document.documentElement.clientHeight/ windowHighetRate))
            ||
            (rect.top >= topAndBottom &&
            rect.bottom <= (window.innerHeight/ windowHighetRate || document.documentElement.clientHeight/ windowHighetRate))
            );
            }
            // make every thing work
            loop();
}

if(screenWidth<600){
    onScroolMove('.work-img','inview-img',300,2);
}
// if(screenWidth<685){
//     // console.log('hoal')
//     onScroolMoveUp('.header','scrolling-logo',0,1);
// }
// ////////////////no code beneath
})