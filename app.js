function lifeInWeeks(age) {
    var age = parseInt(prompt('Input your current age'));
    var years = 90 - age;
    var Sam = years * 365;
    var Tew = years * 52;
    var Tom = years * 12;
  
    var output = "You have " + Sam + " days, " + Tew + " weeks " + "and " + Tom + " months left if you live until 90 years old.";
    console.log(output)
}
lifeInWeeks();

