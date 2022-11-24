var sum = "";
let operator = document.getElementsByClassName('operator');

function evaluateSum() {
  let t = document.getElementById("result").innerHTML 
  sum = eval(t);
  document.getElementById("result2").innerHTML = sum;
}

function clearSum() {
  document.getElementById("result").innerHTML = " ";
  document.getElementById("result2").innerHTML = " ";
}

 function addToSum(operator) {
        document.getElementById("result").innerHTML += operator;
  }


function del() {
  if (document.getElementById("result").innerHTML) {
    document.getElementById("result").innerHTML = document
      .getElementById("result")
      .innerHTML.slice(0, -1);
  }
}

