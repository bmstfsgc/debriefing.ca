class mytime
{
    
constructor(name) {
    this.name = name;
    this.startTime==new Date();
    this.endTime=new Date();
}

start() {
  this.startTime = new Date();
};

end() {
  this.endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
  return seconds;
}

elapsedTime(startTime,seconds)
{
    this.endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;
  
    // get seconds 
    var elapsedSeconds = Math.round(timeDiff);
    
    if(elapsedSeconds> seconds)
    return true;
    else 
    return false
}

}