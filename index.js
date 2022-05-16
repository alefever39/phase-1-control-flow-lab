const rideDistance = 2501;
console.log(scuberGreetingForFeet(rideDistance));

function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance <= 2000) {
    return 'That will be twenty bucks.';
  } else if (distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  const returnValue = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return returnValue;
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}