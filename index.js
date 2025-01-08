
function distanceFromHqInBlocks(block) {
    let hq = 42;
    return Math.abs(block - hq);
}

function distanceFromHqInFeet(block) {
  let distance = distanceFromHqInBlocks(block); 
  let feet = 264;
  return distance * feet;
}

function distanceTravelledInFeet(start, destination) {
    let feet = 264;
    let blocks = Math.abs(destination - start);
    return blocks * feet;
}
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance > 2500){
    return 'cannot travel that far';    
    } else if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
}