var sum = "";
let operator = document.getElementById("dot");
let value = document.getElementsByClassName("value");
let result = document.getElementById("result").innerHTML;
let num = []; // array to store values
let allOperators = document.getElementsByClassName("operator");

function evaluateSum() {
  let t = document.getElementById("result").innerHTML;
  sum = eval(t.replace(/\s/g, "")).toFixed(2);
  num = ["."];
  

  if (sum === undefined) {
    document.getElementById("result2").innerHTML = "";
  } else {
    document.getElementById("result2").innerHTML = sum;
  }
}


function clearSum() {
  document.getElementById("result").innerHTML = " ";
  document.getElementById("result2").innerHTML = " ";
  num = [];
  
}

function addToSum(value) {
  switch (value) {
    case `+`:
    case `-`:
    case `*`:
    case `/`:
      num = [];
      
      document.getElementById("result").innerHTML += value;

      break;
    default:
      document.getElementById("result").innerHTML += value;
      num.push(value);
     
  }
}

function decimal() {
  if (num.includes(operator.innerHTML)) { //checks to see if a dot is already in the array
    document.getElementById("result").innerHTML =
      document.getElementById("result").innerHTML;
    
  } else {
    document.getElementById("result").innerHTML += operator.innerHTML;
    num.push(operator.innerHTML); // adds to the num array
    
  }
}

function del() {
  document.getElementById("result").innerHTML = document
    .getElementById("result")
    .innerHTML.slice(0, -1);
  num.pop(); // removes the last value in the num array
  
}


