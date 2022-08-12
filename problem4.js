function  publicBusFare(people){
    if(typeof people!=='number'){
        return 'Enter Number type input';
    }else{
        let restOfBusPeople=people%50;
    let restOfmicroPeople=restOfBusPeople%11;
    return restOfmicroPeople*250;
    }
}
let totalcost=publicBusFare('4551');
console.log(totalcost);