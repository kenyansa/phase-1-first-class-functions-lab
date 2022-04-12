// Code your solution in this file!
// returnFirstTwoDrivers()
// should return a new array containing the first two drivers from the passed-in array:  
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
// returnLastTwoDrivers()
// should return an array of the last two drivers:
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
// selectingDrivers
// has the `returnFirstTwoDrivers` function to as its first element:
   
// selectingDrivers
// has the `returnLastTwoDrivers` function to as its last element:

// selectingDrivers
// allows us to invoke either function from the array:
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiplyfare) {
  return function (fare) {
    return multiplyfare * fare;
  };
}
// createFareMultiplier()
// returns a function:
// createFareMultiplier()
// should multiply a given value using the created multiplier:
// fareDoubler() is a function: fareDoubler(), doubles fares:
// fareTripler() is a function: fareTripler() triples fares:
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
// selectDifferentDrivers(arrayOfDrivers, function)
// returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
// selectDifferentDrivers(arrayOfDrivers, function)
// returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
function selectDifferentDrivers(drivers, drive) {
  return drive(drivers);
}

       
