let data = new Date();

let year = data.getFullYear();
let month = data.getMonth()+1;
let day = data.getDate();


if(month <=9){
    month = '0'+month;
}
if(day <= 9){
    day = '0'+day;
}

console.log(`${month}-${day}-${year}`);

