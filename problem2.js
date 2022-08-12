// Problem:2  isJavaScriptFile 

// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 


  function  isJavaScriptFile(filename){
    if(typeof filename!=='string'){
      return 'Enter a string file.';
    }else{
      let len=filename.length;
    if(filename.endsWith('.js')){
        return true;
    }else{
        return false;
    }
    }
  }  
  let name='my.js';
  let result=isJavaScriptFile(name);
  console.log(result);
  
 