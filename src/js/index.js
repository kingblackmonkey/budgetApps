import DATA from './Model/Data';
import {elements} from './View/Base'
import * as dataView from './View/DataView' 
let data = new DATA();

window.data = data;




elements.headerTop.addEventListener('click', (evt)=>{
    evt.preventDefault();
    if(elements.description.value!==''&& elements.amount.value > 0){
           //use matches to return true to make sure btn-add or its child is clicked
        if(evt.target.matches('.btn-add, .btn-add *')){

            //get the result from user interface
        let result =  dataView.getDataFromUserInterface();
        //store result to data model
        let item = data.addItemToData(result.type, result.desscription, result.amount);
        //display item to user interface
        dataView.addItemToUserInterface(item);
        //calcualte total income or total expense and  budget
            let total =  data.calculateBudget(item.type);
        //display total income ,expense, and budget  to user interface   
            dataView.displayBudget(total);
        
        }
    }
 




})











