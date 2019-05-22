function takeANumber(curline, person) {
  
  curline.push(person);
  
  return 'Welcome, ' + person + '. You are number '+curline.length + ' in line.';
}

function nowServing( katzDeliLine ) {
  
  var serve = katzDeliLine[0];
  
  katzDeliLine.shift();
  
}