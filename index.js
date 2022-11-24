let result = document.getElementById('result');
let buttons = Array.from(document.getElementsByClassName('col-sm'));


buttons.map( button => {
    button.addEventListener('click', (e) => {
console.log('clicked');
console.log(e);
console.log(e.target);
console.log(e.target.innerText);
    });

} );