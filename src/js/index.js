import DATA from './Model/Data';
import {elements} from './View/Base'
import * as dataView from './View/DataView' 
let data = new DATA();

window.data = data;


//add button and delete button will share this functionalities
//cal culate budget, display budget,calculate total exp percentage, display percentage
let  renderResult = (type) => {
    //calcualte total income or total expense and  budget
    let total =  data.calculateBudget(type);        
  
    //display total income ,expense, and budget to user interface   
       dataView.displayBudget(total);
          
    //calculate total  expense percentage 
        data.calculateExpPercent() 
        //display total exp percentage
        dataView.displayExpPercent(data.expPercentage, data.totalBudget);
    //calcullate individual expense percentage in the list of  expense and income   
     let result=  data.calculateIndividualExpPercent();
     //display individual expense percentage to uer interface     
    dataView.displayIndividualExpPercent(result);

}




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
        //render result
        // calculate budget, display budget,calculate total exp percentage, display percentage
        renderResult(item.type)    
    
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
        // calculate budget, display budget,calculate total exp percentage, display percentage       
                renderResult(listItem.dataset.type)
          }
    })
});








