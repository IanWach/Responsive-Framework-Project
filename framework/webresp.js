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
var nav = document.getElementById('navbar');
var navList = document.getElementById('nav-list');
var navitem2 = document.getElementById('navbaritem2');
var hideIcon = document.getElementsByClassName('webresp-hide')

    if(windowSize <= 767){
        hideIcon[0].style.display = "block";
        nav.classList.add("mbresp-navbar");
        navitem2.classList.add("mbresp-navbaritem2");
        
    }
    else{
        alert('This Is It ' + windowSize)
    }


function showNavbar(){
    if (windowSize <= 480) {
        nav.addClass = 'mbresp-navbar';
        nav.style.display = 'block';
        navList.classList.add = 'mbresp-navlist';
        
    }
    if(windowSize<= 767){
        
        navList.classList.add = 'mbresp-navlist';
        nav.classList.add = 'tbresp-logo'
    }
    else{
        console.log('The Screen Size is :', windowSize);
    }
}