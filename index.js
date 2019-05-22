function takeANumber(curline, person) {
  
  curline.push(person);
  
  return 'Welcome, ' + person + '. You are number '+curline.length + ' in line.';
}

function nowServing( katzDeliLine ) {
  
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  
  var serve = katzDeliLine[0];
  katzDeliLine.shift();
  
  return serve;
  
}