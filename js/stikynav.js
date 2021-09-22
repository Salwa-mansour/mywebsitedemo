

document.addEventListener('DOMContentLoaded',function(){

    let screenWidth = screen.availWidth ;   // Device screen width, minus the operating system taskbar (if present)

    function moveScrolledNav(){
        let body = document.querySelector('body')
        // let nav =document. querySelector('.logo-container');
        let header =document.querySelector('.header');
        var scroll =  window.requestAnimationFrame ||   // IE Fallback
        function(callback){ window.setTimeout(callback, 1000/60)};
        // function(callback){ window.setTimeout(callback, 100000/1)};
        
        
        function navscrolled(){
            let top=body.getBoundingClientRect().top;
            // console.log(top)
            if(top<0){
                header.classList.add('scrolling-logo')
            }else{header.classList.remove('scrolling-logo')}
            scroll(navscrolled)
        }
        
        navscrolled()
    }

    if(screenWidth<750){
        moveScrolledNav()
    }

///no code benith
})
