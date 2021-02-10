
    let dataAtual = new Date();
    let diaArray = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    let dia = diaArray[dataAtual.getDay()];
    let hour = dataAtual.getHours();
    let minutes = dataAtual.getMinutes();
    let seconds = dataAtual.getSeconds();

    if(hour > 12){
        console.log(`${hour} PM : ${minutes} : ${seconds}`)
    }else{
        console.log(`${hour} AM : ${minutes} : ${seconds}`)
    }

