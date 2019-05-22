function takeANumber(curline, person) {
  
  curline.push(person);
  
  return 'Welcome, ' + person + '. You are number '+curline.length + ' in line.';
}