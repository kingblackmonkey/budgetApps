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





    //cal calculate expense percentage
    // calculateExpPercent(){
    //     let result = this.total.exp / this.total.inc * 100;
        
    // }


    // remove item from data model
    removeItemFromDataModel(type, id){
      let index =   this.data[type].findIndex((item)=>{
            return item.id === id;
        })
        this.data[type].splice(index,1);
        
    }


	



    



}



// async getData () {
//     try{
//         // this proxy does not work anymore but use chrome extension will work temporarily
//     // const proxy = 'https://cors-anywhere.herokuapp.com/';
//     // const proxy = 'https://crossorigin.me/';	
//     const key = 'c91c51ac267d0b8413dba35491bc1e98';

//     let res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${key}&q=pizza`)
//         await res.json();
    
//     // this.results = res.data.recipes;
//     console.log('i run first')
//     return res


    
//     }

//     catch(error){
//         console.log(error);
//     }

// }