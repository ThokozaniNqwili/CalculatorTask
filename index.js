var sum = "";
let operator = document.getElementById("dot");
let value = document.getElementsByClassName("value");
let result = document.getElementById("result").innerHTML;
let num = []; // array to store values
let allOperators = document.getElementsByClassName('operator');

function evaluateSum() {
  let t = document.getElementById("result").innerHTML;
  sum = eval(t);
  num = ['.']
  console.log(num)

  if (sum === undefined) {
    document.getElementById("result2").innerHTML = " ";
  } else {
    document.getElementById("result2").innerHTML = sum;
  }
}

function clearSum() {
  document.getElementById("result").innerHTML = " ";
  document.getElementById("result2").innerHTML = " ";
  num =[]
  console.log(num)
}

function addToSum(value) {
  switch(value){
      case `+`:
        case `-`:
          case `*`:
            case `/`:
                num = []
                console.log(num)
                document.getElementById("result").innerHTML += value;

                break;
                default:
                  document.getElementById("result").innerHTML += value;
                  num.push(value)
                  console.log(num)

}
}

  

function decimal(){
  if(num.includes(operator.innerHTML)){ //checks to see if a dot is already in the array
    document.getElementById('result').innerHTML = document.getElementById('result').innerHTML 
    console.log("step reached")
  } else{
    document.getElementById('result').innerHTML += operator.innerHTML
    num.push(operator.innerHTML) // adds to the num array
    console.log(num)
  }
}

function del() {
    document.getElementById("result").innerHTML = document
      .getElementById("result")
      .innerHTML.slice(0, -1);
      num.pop() // removes the last value in the num array
      console.log(num)
  
}


// console.log(e)
console.log(operator.innerHTML)
console.log()