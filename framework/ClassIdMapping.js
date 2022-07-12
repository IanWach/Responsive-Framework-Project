//Importing Datasets
import jsonAttributes from './classIdDataset.json' assert {type: 'json'};
function changescreenElement(){
var windowSize = window.innerWidth;   
return windowSize;
}
    window.onresize = () => {

        changescreenElement()
        }
    //Access the Website Attributes
    jsonAttributes.map((Item, index) =>{
    var elementAttributes = document.getElementsByClassName(Item.previousClass);
    var windowSize = changescreenElement()

    console.log(Item.tabletId)
    console.log(jsonAttributes)
    /*
    This code entails A Conditional Statement to detect the window Size 
    and then it adds Class name to the declared variables above
    */
    if(windowSize <= 480){
        for (let i = 0; i < jsonAttributes.length; i++) {
            elementAttributes.item(i).classList.add(Item.mobileClass);
            }
        }
    else if(windowSize > 480 && windowSize<= 767){  
        for (let i = 0; i < elementAttributes.length; i++) {
            elementAttributes.item(i).classList.add(Item.tabletClass);
        }
    }
    else{
        
    }
  });
  window.onresize = () => {
    location.reload();
    }