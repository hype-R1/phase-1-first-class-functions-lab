let returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);
let returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


let selectDifferentDrivers = (arrayOfDrivers, parm2) => parm2(arrayOfDrivers)



function createFareMultiplier(ogValue){
  return function multiply4(value){
    return value = ogValue * value;
  }
 }
 let fareDoubler = createFareMultiplier(2);
 let fareTripler = createFareMultiplier(3);























































// function returnFirstTwoDrivers(drivers) {
//   return drivers.slice(0, 2)
//  }

//   function returnLastTwoDrivers(drivers) {
//     return drivers.slice(-2)
//   }

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function createFareMultiplier(origianlValue) {
//  return function (value){
//    return origianlValue * value
//  }
// }

// const fareDoubler =createFareMultiplier(2);

// const fareTripler =createFareMultiplier(3);

// function selectDifferentDrivers(drivers, driversToReturn) {
//  
 
//   return driversToReturn(drivers);
//  }

