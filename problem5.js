// Problem 5: isBestFriend



// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

function isBestFriend(me,friend){
  if(typeof me !=='object'|| typeof friend !=='object'){
    return 'Enter Object type parameter';
  }else{
    if(me.name==friend.friendName && me.friendName==friend.name){
        return true;
    }else{
        return false;
    }

  }
}
let me={
    name:'Doua',
    friendName:'Alex'
}
let friend={
    name:'Alex',
    friendName:'Doua'
}
let result=isBestFriend(me,friend);
console.log(result);