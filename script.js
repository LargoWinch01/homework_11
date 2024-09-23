function getrandom(arr) {
    let randomindex = Math.floor(Math.random() * arr.length);
    return arr[randomindex]
}

let game = ['rock', 'paper', 'scissors' ];
 
let randomelement = getrandom(game);


let text = prompt('enter: rock >> paper >> scissors ' );

userChooise=text.toLowerCase();


switch(true){

    case randomelement === userChooise:
        console.log('ფრე');
        break;

    case randomelement === 'rock' && userChooise === 'paper' ||randomelement === 'paper' && userChooise === 'scissors' || randomelement === 'scissors' && userChooise === 'rock':
        console.log('მომხმარებელმა მოიგო');
        break;
    default:
        console.log('მოიგო კომპიუტერმა');
        break;

}


console.log(`მომხმარებლი--->  ${userChooise} : ${randomelement}  <---კომპიუტერი`);

