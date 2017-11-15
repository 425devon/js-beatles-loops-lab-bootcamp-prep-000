function theBeatlesPlay(person,instruments){
  var personPlays = [];
  for(var i = 0; i < person.length; i++){
    personPlays[i] = person[i] + " plays " + instruments;

  };
  return personPlays;
};
