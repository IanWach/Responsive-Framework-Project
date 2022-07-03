//This is the declaration of Variables using IDs
var windowSize = window.screen.availWidth; 
var btn = document.getElementById('webresp-hide1');
var nav = document.getElementById('navbar');
var navList = document.getElementById('nav-list');
var navitem2 = document.getElementById('navbaritem2');

//This is the Declaration of variables through Class Names
var hideIcon = document.getElementsByClassName('webresp-hide')


//This is the Code to add Class Names with Web Responsive Style


/*
This code entails A Conditional Statement to detect the window Size 
and then it adds Class name to the declared variables above
*/
    if(windowSize <= 480){
        hideIcon[0].style.display = "block";
        nav.classList.add("mbresp-navbar");
        navitem2.classList.add("mbresp-navbaritem2");
        
    }
   else if(windowSize > 480 && windowSize<= 767){
        hideIcon[0].style.display = "block";
        nav.classList.add("tbresp-navbar");
        navitem2.classList.add("tbresp-navbaritem2");
    }
    else{
        alert('This Is It ' + windowSize)
    }


function showNavbar(screenSize){
    screenSize = window.screen.availWidth;
    let nav1 = document.getElementById('navbar');
    let navList1 = document.getElementById('nav-list');

    if (screenSize <= 480) {
        alert('The is a Screen Size is : ' +screenSize);
        nav1.classList.add("mbresp-navbar");
        nav1.style.display = 'block';
        navList1.classList.add ("mbresp-navlist");
        
    }
    else if(screenSize > 480 && screenSize <= 767){
        alert('This Screen Size is : '+ screenSize);
        nav1.style.display = 'block';
        navList1.classList.add ("tbresp-navlist");
        nav1.classList.add ("tbresp-logo");
    }
    else{
        alert('The Screen Size is : ' +screenSize);
    }
   
}