//Importing Datasets
import {responsiveAttributes} from './classIdDataset.js';
import {addAttributes} from './classIdDataset.js';
// $(windowSize).resize(windowSize = $(windowSize).innerWidth())
function changescreenElement(){
var windowSize = window.innerWidth;   
return windowSize;
}
    window.onresize = () => {

        changescreenElement()
        }
    //Access the Website Attributes
    responsiveAttributes.map((Item, index) =>{
    var variableName = document.getElementsByClassName(Item.previousClass);
    var windowSize = changescreenElement()
    /*
    This code entails A Conditional Statement to detect the window Size 
    and then it adds Class name to the declared variables above
    */
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

  //Function to add Values to the Dataset
  
    
  var formValues = document.getElementById('form-settings')
    formValues.addEventListener("submit", function addAttributes(){
       var prvClass = document.getElementById('prev-cls').value;
        var idName = document.getElementById('current-id').value;
        var tabltCls = document.getElementById('mobile-cls').value;
        var mobilCls = document.getElementById('tablt-cls').value;
    //var editAttributes = addAttributes( )
        responsiveAttributes.push({
            
        //The Navbar List
            previousClass : prvClass,
            tabletClass :tabltCls,
            mobileClass :mobilCls, 
            tabletId :idName, 
            mobileId: idName,
            variableName: null 
    },
    );
    console.log(responsiveAttributes[responsiveAttributes.length-1]);  
  });
  
  window.onresize = () => {
    location.reload();
    }