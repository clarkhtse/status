require('NSCharacterSet')
defineClass('User', {
  // replace the -genView method
  commitName: function() {
    var resultName = self.ORIGcommitName()    
    resultName = resultName.stringByTrimmingCharactersInSet(NSCharacterSet.whitespaceCharacterSet())
    var isEmpty = resultName.length() == 0
    if(isEmpty){
        resultName = "COMMITER";
    }
    //console.log(isEmpty.toString() +", resultName: " + JSON.stringify(resultName));
    return resultName;
  },
  commitEmail: function() {
    var resultName = self.ORIGcommitEmail()    
    resultName = resultName.stringByTrimmingCharactersInSet(NSCharacterSet.whitespaceCharacterSet())
    var isEmpty = resultName.length() == 0
    if(isEmpty){
        resultName = "COMMITER@gmail.com";
    }
    //console.log(isEmpty.toString() +", resultEmail: " + JSON.stringify(resultName));
    return resultName;
  }

}, {});
