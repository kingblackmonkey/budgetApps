
import {elements} from './Base'





export let getDataFromUserInterface = ()=>{
    let result = {
        type: elements.type.value,
        desscription: elements.description.value,        
        amount: parseInt(elements.amount.value) ,
        
    }

    elements.description.value = '';
    elements.amount.value = '';


    return result;
}






export let addItemToUserInterface = (item)=>{
    let html = '';
    if (item.type === 'inc'){
        html = `
        <li class="income-item" id=${item.id} data-type="inc">
            <div class="income-item-number item">$${item.amount}</div>
            <div class="income-item-text item">${item.description}</div> 
            <div class="item__delete item">
                <button class="item-delete-btn"><i class="icon ion-ios-close"></i></button>
            </div>                     
        </li>        
        
        `
   

    }else{

     html = ` <li class="expense-item" id=${item.id} data-type="exp">
                        <div class="expense-item-number item">$${item.amount}</div>
                        <div class="expense-item-text item ">${item.description}</div>
                        <div class="expense-item-info item">
                            <div class="expense-item-percentage ">50%</div>
                            <div class="item__delete">
                                <button class="item-delete-btn "><i class="icon ion-ios-close"></i></button>
                            </div>                         
                        </div>                        
                    </li>`
    }

   elements[item.type].insertAdjacentHTML('beforeend',html);

  
}  

//display total income, total expense and budget to user interface

export let displayBudget = (result)=>{

 //display total income and total expense
 document.querySelector(`.budget-${result.type}`).innerHTML = result.total;
 //display total budget
 document.querySelector('.budget-total').innerHTML = result.totalBudget;
}


export let removeItemFromUserInterface = (id)=>{
    let listItem = document.querySelector(`#${id}`);
    listItem.parentElement.removeChild(listItem);
}