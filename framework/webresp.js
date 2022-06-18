var windowSize = window.innerWidth;



//     if (windowSize >= 769) {
//         console.log('Greater than 768');
//         document.getElementById('here').addClass = 'full-page';
// }

//     else  {
//         console.log('Less than 768');
//         document.getElementById('here').removeClass = 'full-page';
// }

var btn = document.getElementById('webresp-hide1');
var nav = document.getElementById('nav-lists');
var hideIcon = document.getElementsByClassName('webresp-hide')

    if(windowSize <= 767){
        hideIcon[0].style.display = "block";
        nav.addClass = 'mbresp-navbar';
        
    }
    else{
        alert('This Is It ' + windowSize)
    }


function showNavbar(){
    if (windowSize <= 480) {
        nav.addClass = 'mbresp-navbar';
        nav.style.display = 'block';
    }
    if(windowSize<= 767){
        
        nav.addClass = 'tbresp-navbar';
        nav.addClass = 'tbresp-logo'
    }
    else{
        console.log('The Screen Size is :', windowSize);
    }
}