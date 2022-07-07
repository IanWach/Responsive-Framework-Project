//Importing Datasets
import {responsiveAttributes} from './classIdDataset.js';
// $(windowSize).resize(windowSize = $(windowSize).innerWidth())
function changescreenElement(){
var windowSize = window.innerWidth;   
console.log("We have " +windowSize);
return windowSize;
}
window.onresize = () => {

    changescreenElement()
    var windowSize = window.innerWidth;
    }
//Access the Website Attributes
responsiveAttributes.map((Item, index) =>{

    var variableName = document.getElementById(Item.previousClass);
    toString (variableName);
    console.log(variableName);

  });
    // jQuery.each(responsiveAttributes, function(i, val) {
    //     $("#" + i).append(document.createTextNode(" - " + val));
    //   });
                

//This is the declaration of Variables using IDs
var windowSize = changescreenElement()
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
        hideIcon[0].style.display = "block !important";
        nav.classList.add("mbresp-navbar");
        navitem2.classList.add("mbresp-navbaritem2");
        
    }
    else if(windowSize > 480 && windowSize<= 767){
        hideIcon[0].style.display = "block";
        nav.style.display = "none";
        nav.classList.add("tbresp-navbar");
        navitem2.classList.add("tbresp-navbaritem2");
    }
    else{
        alert('This Is It ' + windowSize)
    }
//Function to reload screen when there is a Resize

    function changeScreenElement1(){
        var screenSize = window.innerWidth;
        return screenSize
    }
        window.onresize = function(){
            changeScreenElement1()
        }
//Function for an Event Listener when the Menu Bar in the Navbar is clicked.
function showNavbar(screenSize){
        
    var screenSize = changeScreenElement1()
    let nav1 = document.getElementById('navbar');
    let navList1 = document.getElementById('nav-list');

    if (screenSize <= 480) {
        alert('A Screen Size is : ' +screenSize);
        nav1.classList.add("mbresp-navbar");
        navList1.classList.add ("mbresp-navlist");
        
    }
    else if(screenSize > 480 && screenSize <= 767){
        alert('This Screen Size is : '+ screenSize);
        nav1.style.display = 'block';
        navList1.classList.add ("tbresp-navlist");
        nav1.classList.add ("tbresp-logo");
    }
    else{
        alert('Screen Size is : ' +screenSize);
    }
   
}

window.onresize = () => {
    location.reload();
    }