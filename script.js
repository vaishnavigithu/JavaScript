//function another another function 

// console.log(1);
// console.log(2);
// function students(){
//     setTimeout(function(){
//        console.log('data saved successfully');
//     },8000);
// }
// students();                          //and after 8 sec this will run
// console.log("start"); 
// console.log('end'); //it gives start ,end,data


/*
// we require start, 'data saved successfully',end
function students(callback){    
    setTimeout(function(){
       console.log('data saved successfully');    //2.after 8 sec this will run
       callback();   currect way                             //and then callback() is run after this
    },8000);
    callback(); wrong way to call callback//if i write callback here then 1st the callback run and after 8sec the data saved successfully is run 
}
                        
console.log("start");     //1.first start is run
students(function(){        //this is callback function this is run 
    console.log('end'); 
}); 
*/

/*
1.first start is run

*/
/*start 
data saved successfully 
end
 */

//first run this 
//1, 2 ,data saved, data saved successfully

/* but if I take ine example like we can order pizza online 
 order placed
 After 2s-chef reveived and started preparing
 after 10s-pizza sauce added
 after  5s -first layer of cheese added
 after 12s-topping added
 afert 5s-2nd layer  of cheese added
 after 15 s-pizza baked
 after 8s-oregano addded
 after 2s-packaged received  to zomato boy

 BUT THIS SEQUENCE IS NOT ACHIVED WHEN USING SETTIMEOUT bcoz after first 2s whole code run earlier

*/
const manageOrder=(callback) => {
    console.log('order placed');
    setTimeout(function(){
        console.log('chef received and started preparing');
        setTimeout(function(){
          console.log('pizza sauce added');
          setTimeout(function(){
            console.log('first layer of cheese added');
            setTimeout(function(){
                console.log('2nd layer  of cheese added');
                setTimeout(function(){
                    console.log('Pizza baked');
                    setTimeout(function(){
                        console.log('Oregano addded');
                        setTimeout(function(){
                            console.log('packaged and received  to zomato boy');
                            callback();
                         },2000);
                        
                     },8000);
                    
                },15000);
                
            },5000);
            
           },5000);
          
        },10000);
    },2000)   //first completed this 2 sec then after the 2nd step will run
}

//this will give the main order after one another after waiting for each process to over

// const chefReceivedOrder= () => {
    
// }

// const pizzaSauseAdded = () => {
//     setTimeout(function(){
//           console.log('pizza sauce added');
          
//     },10000);
// }

// const firstLayerOfCheeseAdded = () => {
//     setTimeout(function(){
//          console.log('first layer of cheese added');
//     },5000);
// }

// const toppingAdded = () => {
//     setTimeout(function(){
//          console.log('first layer of cheese added');
//     },12000);
// }
// const secondLayerOfCheeseAdded = () => {
//     setTimeout(function(){
//         console.log('2nd layer  of cheese added');
//     },5000);
// }
// const pizzaBaked = () => {
//     setTimeout(function(){
//         console.log('Pizza baked');
//     },15000);
// }
// const oreganoAddded = () => {
//     setTimeout(function(){
//        console.log('Oregano addded');
//     },8000);
// }
// const packagedReceivedToZomatoBoy = () => {
//     setTimeout(function(){
//        console.log('packaged and received  to zomato boy');
//     },2000);
// }

// chefReceivedOrder(function(){
//     console.log('pizza sause added');
// });

// pizzaSauseAdded();
// firstLayerOfCheeseAdded();
// toppingAdded();
// secondLayerOfCheeseAdded();
// oreganoAddded();
// packagedReceivedToZomatoBoy();
// pizzaBaked();