// make sure whatever we put here is accessible outside of the file
module.exports = function dependencies(input){
  // full list of packages
  var packages = []
  // packages that have dependencies
  var packagedepend = []

  //pick out each element in the input array in order and then run through funtion
  input.forEach(function(package){
    //split will separate dependency if present
    package = package.split(": ");
    //if no dependencies present, push into packages arrray
    if(package[1] === ""){
      packages.push(package[0])
    }else{
      //else, place into packagedepend
      packagedepend.push({
        package: package[0],
        dependency: package[1]
      });
    }
  });
};
