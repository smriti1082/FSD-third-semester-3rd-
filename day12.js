//type of error

 //syntax error-jb hum code likhte h or usme koi galti ho jese ki
 //  bracket ka galat use ya phir koi aur galti
console.log("h")  

//reference error-jb hume variable ka reference milta h but
//  wo variable exist nhi krta h
console.log(x);  //reference error


//type error-jb hum kisi variable ka type galat use krte h
const num=10;
num()  //type error
num=20  //type error

//range error-jb hum kisi variable ka range galat use krte h
const arr=new Array(-5)  //range error

//URL error-jb hum kisi variable ka URI galat use krte h
decodeURIComponent("%")  //URL error

