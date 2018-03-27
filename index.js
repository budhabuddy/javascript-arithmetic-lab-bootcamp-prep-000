function add(a,b) {

  return a + b;
}

function subtract(a,b) {
  
  return a - b;
}

function multiply(a,b) {
  
  return a * b;
}

function divide(a,b) {
  
  return a / b;
}

function inc(n) {
  let number = n++ ;
  return number + 1;
}

function dec(n) {
  let number = n--;
  return number - 1;
}

function makeInt(n) {
  let parses = parseInt('2.222','n');
  if(isNaN(parses)) {return 0}
    return parses * 'n';
  }

  function preserveDecimal(n) {
  let parses = parseFloat('2.222', 10);
  if(isNaN(parses)){return 0}
  return parses * '1';
  }


