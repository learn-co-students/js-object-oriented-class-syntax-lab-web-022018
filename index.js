// In index.js, build an ES2015 BoardMember class with the following properties set by the constructor:
// name, homeState, and training.
//
// Add following methods to the prototype using the class syntax:
//
// veto — returns No, I must disagree
//
// approve — returns You can do that!
//
// doCharity — returns I like to help people.
//
// releasePressStatement — returns You will see great things from Scuber.
//
// sayHi — returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.

class BoardMember {
  constructor(name, homeState, training){
    this.name   =  name ;
    this.homeState   = homeState  ;
    this.training   = training  ;
  }
  veto(){ return "No, I must disagree"}
  approve(){ return "You can do that!"}
  doCharity(){ return "I like to help people."}
  releasePressStatement(){ return "You will see great things from Scuber."}
  // releasePressStatement(){ return ""}
  sayHi(){ return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`}
}

class Ceo extends BoardMember{
  hireEmployee(){return "Welcome aboard!"}
}
