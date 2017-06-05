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
  //now to loop through the undetermined packages
  while(packagesdepend.length > 0) {
    //checking if theres a found dependency package
    var packagesdependcheck = packagesdepend.length;
    //if dependencies present in packagesdependcheck, push into packages array and remove from packagesdepend array
    if (packages.indexOf(packagesdepend.dependency) >= 0){
      packages.push(packagesdepend.package);
      assert.splice(index, 1);
    };

    //if there were no found packages in this iteration, return false
    if(packagesdepend.length == packagesdependcheck){
      return false;
    }
  };
  //returns packages into packages array and rejoins the dependencies
  return packages.join(", ")
};

// console.log(dependencies(['KittenService: ','Leetmeme: Cyberportal','Cyberportal: Ice','CamelCaser: KittenService','Fraudstream: Leetmeme','Ice: ']))
