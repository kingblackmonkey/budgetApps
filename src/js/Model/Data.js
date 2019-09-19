import uniqid from 'uniqid'
export default class DATA{
    constructor(){
        this.data = {
            inc: [],
            exp:[]
        };
        this.total = {
            inc: 0 ,
            exp: 0
        };
        
        this.totalBudget = 0;
        this.expPercentage = 0;
    }
    //add income or expense to data model and return item to add to usr interafce 
    addItemToData(type, description,amount){
        let id = uniqid();
        let item = {
            type,
            id,            
            description,
            amount,
        }

       this.data[type].push(item); 
       return item;
    }
    //remove item from data
    removeIteFromData(type, id){
        let index = this.data[type].findIndex((item)=>{
            return item.id === id;
        })
        this.data[type].splice(index,1);
        
        
    }

    //calculate total income and total expense
    calculateBudget(type){
        let total = 0;
        //only calculate when there is item in income or expense array or else total is 0 by default
       if (this.data[type].length> 0){
             //=====calculate total income or total expense      
            //get array of amount of either income or expense
                let arrOfAmmount = this.data[type].map((item)=>{
                    return item.amount;
                })
                //if there is item in array then we 
           total= arrOfAmmount.reduce((acc = 0, amount)=>{
                    return acc + amount
            })
       }
           
            //store total income or exepnse
            this.total[type] = total;
            //calculate budget 
            let totalBudget = this.total.inc - this.total.exp
            //store total budget
            this.totalBudget = totalBudget;
            return {
                type,
                total,
                totalBudget
            }
        

    }


    //calculate total expense percentage
    calculateExpPercent(){
        let result = 0;
        if(this.data.inc.length > 0){
            result = this.total.exp / this.total.inc * 100;            
        }
        this.expPercentage = Math.round(result) ;
        
    }

    //calculate individual expense percentage
    calculateIndividualExpPercent(){
       
        if(this.totalBudget >= 0 && this.data.exp.length !== 0 && this.data.inc.length !== 0 ){
            //extract inc amount into array
            let expAmount = this.data.exp.map((item)=>{
                return item.amount
            });
            
            
            let incAmount = this.data.inc.map((item)=>{
                return item.amount
            });

            // total the income
           let incTotal = incAmount.reduce((total = 0, curr)=>{
                return total + curr
            })
            // calculate percentage exp
           expAmount=  expAmount.map((item)=>{
                  return Math.round(item/incTotal*100) 
           });

           return expAmount;
        }else{
            return false;
        }

    }


    // remove item from data model
    removeItemFromDataModel(type, id){
      let index =   this.data[type].findIndex((item)=>{
            return item.id === id;
        })
        this.data[type].splice(index,1);
        
    }


	



    



}



