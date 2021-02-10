let data = new Date();

let ano = 2016;

function validaAnoBissexto(ano){

     const anoNot = 'Ano não é bissexto';   
    if(!(ano % 4 === 0)) return console.log(anoNot);
    if(!(ano % 100 !== 0)) return console.log(anoNot);
    if((ano % 400 === 0)) return console.log(anoNot);
    console.log('Ano bissexto');
}

 validaAnoBissexto(ano);