function takeANumber(curline, person) {
  
  curline.push(person);
  
  return 'Welcome, ' + person + '. You are number '+curline.length + ' in line.';
}

function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  
  var serve = katzDeliLine[0];
  katzDeliLine.shift();
  
  return 'Currently serving ' + serve + '.';
  
}

function currentLine(curline) {
  
  var str = 'The line is currently';
  
  if (curline.length === 0) {
    return str + ' empty.';
  }
  else {
    str += ':'
    for (i = 1; i <= curline.length; i++) {
      str += ' ' + i + '. ' + curline[i-1] + ',';
    }
  }
  return str.
}