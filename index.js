// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const scuberLocation = 42;
    return Math.abs(pickupLocation - scuberLocation);
}
console.log(distanceFromHqInBlocks(34));
console.log(distanceFromHqInBlocks(43));

function distanceFromHqInFeet(pickupLocation) {
    const oneBlockDistance = 264;
    return (distanceFromHqInBlocks(pickupLocation) * oneBlockDistance);
}
console.log(distanceFromHqInFeet(34));
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start, destination) {
    const oneBlockDistance = 264;
    return (Math.abs(destination - start) * oneBlockDistance);
}
console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return ((distanceInFeet - 400) * 0.02);
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));