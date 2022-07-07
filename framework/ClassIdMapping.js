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

    var variableName = document.getElementsByClassName(Item.previousClass);
    console.log(variableName);
    var windowSize = changescreenElement()
    if(windowSize <= 480){
            for (let i = 0; i < variableName.length; i++) {
                variableName.item(i).classList.add(Item.mobileClass);
                }
        }
    else if(windowSize > 480 && windowSize<= 767){  
        for (let i = 0; i < variableName.length; i++) {
            variableName.item(i).classList.add(Item.tabletClass);
        }
    }
    else{
        
    }
  });

  window.onresize = () => {
    location.reload();
    }