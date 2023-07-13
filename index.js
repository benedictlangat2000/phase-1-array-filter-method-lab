// Code your solution here
// findMatching function
// findMatching function
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }
  
  // fuzzyMatch function
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  // matchName function
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
  }
  

  
  // Sample driver data
const drivers = [
    { name: "Seth", hometown: "Ngong" },
    { name: "Daisy", hometown: "Runda" },
    { name: "Tom", hometown: "Kibra" },
    { name: "Sandra", hometown: "Juja" }
  ];
  
  console.log(findMatching(drivers, "DAISY")); 
  console.log(fuzzyMatch(drivers, "Sa")); 
  console.log(matchName(drivers, "Tom")); 
  