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
        //calculate total income or total expense      
       
       let arrOfAmmount = this.data[type].map((item)=>{
            return item.amount;
        })

     let total= arrOfAmmount.reduce((acc = 0, amount)=>{
            return acc + amount
      })

      this.total[type] = total;
      //calculate budget 
      let totalBudget = this.total.inc - this.total.exp
      return {
          type,
          total,
          totalBudget
      }

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