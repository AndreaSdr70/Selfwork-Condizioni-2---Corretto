let temperatura = Number(prompt('Inserisci la temperatura'));

// if(temperatura <= -10){
//     console.log('copriti fa molto freddo');   
// }else if (temperatura <= 0){
//     console.log('oggi non fa molto freddo');
// }else if (temperatura < 20){
//     console.log('Non ci sono più le mezze stagioni');
// }else if (temperatura < 30){
//     console.log('mi dia qualcosa da bere');
// }else{
//     console.log('lu sole lu mare lu ientu');
// }


let descrizione;

switch (true) {
    case temperatura <= -10 :
        descrizione = 'copriti, fa molto freddo'
        break;

    case temperatura <= 0:
        descrizione = 'oggi non fa molto freddo'
        break;

    case temperatura < 20:
        descrizione = 'non ci sono più le mezze stagioni'
        break;

    case temperatura < 30:
        descrizione = 'mi dia qualcosa da bere'
        break;

    default:
        descrizione = 'lu sole, lu mare, lu ientu'
        break;
}
console.log(descrizione);

 