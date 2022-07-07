//Importing Datasets
import {responsiveAttributes} from './classIdDataset.js';

//Access the Website Attributes
responsiveAttributes.map((Item, index) =>{

        var variableName = document.getElementById(Item.variableName);    
        console.log(variableName);
      })