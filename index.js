function theBeatlesPlay(person,instrument){
  var member = [];

  for(var i = 0; i < person.length; i++){
    member[i] = (person[i] + " plays " + instrument[i]);
  }
  return member;
}
function johnLennonFacts(fact){
  var exc = "!!!";
  while(var i = 0; i<fact.length){
    fact[i] = fact[i].concat(exc);
  }
  return  johnLennonFacts;
}