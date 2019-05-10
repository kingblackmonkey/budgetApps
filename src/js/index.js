import DATA from './Model/Data';
import {elements} from './View/Base'
import * as dataView from './View/DataView' 
let data = new DATA();

window.data = data;



//event handler for btn add
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

//event handler for delete btn
let incListAndExpList = [elements.inc, elements.exp];
incListAndExpList.forEach((item)=>{
    item.addEventListener('click',(evt)=>{
          if (evt.target.matches('.item__delete, .item__delete * '))  {
           let listItem = evt.target.closest('.income-item, .expense-item') ;
        
                //  remove item from data model  
           data.removeItemFromDataModel( listItem.dataset.type, listItem.id)
        //    remove item from userinterface
                dataView.removeItemFromUserInterface(listItem.id)
                //calcualte total income or total expense and  budget
                   let total =  data.calculateBudget(listItem.dataset.type);
                 //display total income ,expense, and budget  to user interface   
                    dataView.displayBudget(total);
          }
    })
});








