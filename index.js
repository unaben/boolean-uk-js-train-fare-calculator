const passengerAge = prompt("What's your age?");
console.log(passengerAge);

const destinationInKiloMeters = prompt("Travel destination?");
console.log(destinationInKiloMeters);

const pricePerKiloMeter = 0.21;

const distanceToPaddingtonInKiloMeters = 20;

const distanceToEustonInKiloMeters = 43;

const journeyFareToPaddington = distanceToPaddingtonInKiloMeters * pricePerKiloMeter;
console.log(journeyFareToPaddington);

const journeyFareToEuston = distanceToEustonInKiloMeters * pricePerKiloMeter;
console.log(journeyFareToEuston);

if (passengerAge < 18) alert("Apply 20% Doscount");
else alert("Not eligible for Junior Passenger Discount");
if (passengerAge > 65) alert("Apply 40% Discount");
else alert("Not eligible for Senior Passenger Discount");

const juniorPassengersDiscount = 0.2;
const seniorPassengersDiscount = 0.4;

const fareForUnder18ToPaddington =
    journeyFareToPaddington - (journeyFareToPaddington * juniorPassengersDiscount); 
 
console.log(fareForUnder18ToPaddington);

const fareForUnder18ToEuston =
    journeyFareToEuston - (journeyFareToEuston * juniorPassengersDiscount);

console.log(fareForUnder18ToEuston);

const fareForOver65ToPaddington =
    journeyFareToPaddington - (journeyFareToPaddington * seniorPassengersDiscount);
  
console.log(fareForOver65ToPaddington);

const fareForOver65ToEuston =
    journeyFareToEuston - (journeyFareToEuston * seniorPassengersDiscount);
  
console.log(fareForOver65ToEuston);
