// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    //    return x-42 
   
    if ( x >= 42) {
        return x - 42;
      } else {
        return 42 - x;
      }

    }
    // var y = distanceFromHqInBlocks ();

    function  distanceFromHqInFeet  (feet)  {

       const test = distanceFromHqInBlocks(feet) ;
       return test * 264
}
function distanceTravelledInFeet(start,destinatiion){
    const result = distanceFromHqInBlocks(start,destinatiion)
    if ( start < destinatiion) {
      return (destinatiion-start)*264 ;
      } else if(start > destinatiion) {
        return (start-destinatiion)*264;
      }
}

const calculatesFarePrice = (start, destination) => {
  const feet = distanceTravelledInFeet(start,destination) 
  //const minus = feet - 400 ;
  // const feet = (minus * 264)
  if(feet <= 400){
    return 0
}else if (400 < feet && feet < 2000 ){
  return (feet - 400)*0.02
}else if (2000 < feet && feet< 2500 ){
  return 25
}else{
  return "cannot travel that far"
}} 
console.log(distanceTravelledInFeet(50,58));
console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50,58))
console.log(calculatesFarePrice(34, 24));