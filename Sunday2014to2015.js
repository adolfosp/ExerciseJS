
const array = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];

const periodoAno = (2050-2014);
let arrayAnos= [];
for(let i =0; i<=periodoAno;i++){
    let data = new Date((2014+i),0);
    console.log(`O ano ${data.getFullYear()} e o dia da semana ${data.getDay()}`);
    if(array[data.getDay()] === 'Domingo'){
        arrayAnos.push(data.getFullYear());
    }
}
console.log(arrayAnos);