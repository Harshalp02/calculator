
  function square() {
    var num1 = parseFloat(document.getElementById("num1").value);
  
    if (isNaN(num1) && isNaN(num2)) {
      document.getElementById("result").innerHTML = alert('Please enter valid numbers.');
    } else {
      var result = num1 * num1;
      document.getElementById("result").innerHTML = "Result: " + result;
    }
  }
  function reset() {
    document.getElementById("res").innerHTML = '<input type="text" id="num1"  placeholder="Enter first number">';
    document.getElementById("mes").innerHTML = '<input type="text" id="num2"  placeholder="Enter another number">' ;
    document.getElementById("result").innerHTML = "" ;

  }

function add() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML = alert('Please enter valid numbers.');
  } else {
    var result = num1 + num2;
    document.getElementById("result").innerHTML = "Result: " + result;
  }
}

function subtract() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML = alert("Please enter valid numbers.");
  } else {
    var result = num1 - num2;
    document.getElementById("result").innerHTML = "Result: " + result;
  }
}

function multiply() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML = alert("Please enter valid numbers.");
  } else {
    var result = num1 * num2;
    document.getElementById("result").innerHTML = "Result: " + result;
  }
}

function divide() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML = alert("Please enter valid numbers.");
  } else if (num2 === 0) {
    document.getElementById("result").innerHTML = alert("Cannot divide by zero.");
  } else {
    var result = num1 / num2;
    document.getElementById("result").innerHTML = "Result: " + result;
  }
}

  