//This is the declaration of Variables using IDs
var windowSize = window.innerWidth; var btn = document.getElementById('webresp-hide1');var nav = document.getElementById('navbar');
var navList = document.getElementById('nav-list');var navitem2 = document.getElementById('navbaritem2');

//This is the Declaration of variables through Class Names
var hideIcon = document.getElementsByClassName('webresp-hide')


//This is the Code to add Class Names with Web Responsive Style


/*
This code entails A Conditional Statement to detect the window Size 
and then it adds Class name to the declared variables above
*/
    if(windowSize <= 767){
        hideIcon[0].style.display = "block";
        nav.classList.add("tbresp-navbar");
        navitem2.classList.add("tbresp-navbaritem2");
        
    }
   else if(windowSize <= 480){
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
        
        navList.classList.add = 'tbresp-navlist';
        nav.classList.add = 'tbresp-logo'
    }
    else{
        console.log('The Screen Size is :', windowSize);
    }
}