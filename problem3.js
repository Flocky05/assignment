// Problem 3: oilPrice

// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 

// ভিডিও ভালো করে দেখবে। 



// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা

// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 

// প্রতি লিটার অকটেনের এর দাম – 135 টাকা 



// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 

function oilPrice(digel,petrol,octen){
   if(typeof digel!=='number'|| typeof petrol!=='number'|| typeof octen!=='number'){
    return 'Enter Number type input.';
   }else{
    let priceDigel=digel*114;
    let pricePetrol=petrol*130;
    let priceOcten=octen*135;
    let totalPrice=priceDigel+pricePetrol+priceOcten;
    return totalPrice;
   }
}
let price=oilPrice(0,2,3);
console.log(price);