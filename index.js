// Code your solution in this file.
function lowerCaseDrivers(drivers){
  
  return drivers.map(function(drivers){return drivers.toLowerCase();});
  
  
  
}


function nameToAttributes(drivers){
  
 return drivers.map(function(driver){ driver.split(" "); 
   let driverFirstName = driver.split(" ")[0];
   let driverLastName = driver.split(" ")[1];
    return {firstName: driverFirstName, lastName: driverLastName};
 }) ;
  
  
  
  
  
}