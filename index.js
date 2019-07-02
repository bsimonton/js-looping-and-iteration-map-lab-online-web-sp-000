// Code your solution in this file.
function lowerCaseDrivers(drivers){
  
  return drivers.map(function(drivers){return drivers.toLowerCase();});
  
  
  
}


function nameToAttributes(drivers){
  
 return drivers.map(function(drivers){ drivers.split(" "); 
   let firstName = drivers.split(" ")[0];
   let lastName = drivers.split(" ")[1];
    return {firstName: driverFirstName, lastName: driverLastName};
 }) ;
  
  
  
  
  
}