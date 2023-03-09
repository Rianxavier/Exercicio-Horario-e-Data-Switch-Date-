const exibirData = document.querySelector('.container h1');
const data = new Date();


/* const opcoes = {
    dateStyle: 'full',
}

exibirData.innerHTML = data.toLocaleDateString('pt-BR', opcoes); */
 
 function getDia(diaSemana){
    let diaSemanaDate;

    switch(diaSemana){
        case 0:
            diaSemanaDate = 'domingo';
            return diaSemanaDate;
        case 1:
            diaSemanaDate = 'segunda-feita';
            return diaSemanaDate;
        case 2:
            diaSemanaDate = 'terça-feita';
            return diaSemanaDate;
        case 3:
            diaSemanaDate = 'quarta-feita';
            return diaSemanaDate;
        case 4:
            diaSemanaDate = 'quinta-feita';
            return diaSemanaDate;
        case 5:
            diaSemanaDate = 'sexta-feira';
            return diaSemanaDate;
        case 6:
            diaSemanaDate = 'sabado';
            return diaSemanaDate;
    }

}

function getNomeMes(mes){
    let mesDate;

    switch(mes){
        case 0:
            mesDate = 'janeiro';
            return mesDate;
        case 1:
            mesDate = 'fevereiro';
            return mesDate;
        case 2:
            mesDate = 'março';
            return mesDate;
        case 3:
            mesDate = 'abril';
            return mesDate;
        case 4:
            mesDate = 'maio';
            return mesDate;
        case 5:
            mesDate = 'junho';
            return mesDate;
        case 6:
            mesDate = 'julho';
            return mesDate;
        case 7:
            mesDate = 'agosto';
            return mesDate;
        case 8:
            mesDate = 'setembro';
            return mesDate;
        case 9:
            mesDate = 'outubro';
            return mesDate;
        case 10:
            mesDate = 'novembro';
            return mesDate;
        case 11:
            mesDate = '';
            return mesDate;
    }

}

function criaDate(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDia(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}`+
    ` ${data.getHours()}:${zeroEsquerda(data.getMinutes())}`;
}

function zeroEsquerda(num){
    return num < 10? `0${num}` : num;
}
exibirData.innerHTML = criaDate(data);