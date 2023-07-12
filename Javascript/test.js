/*const myArray = [['John', 23], ['cat', 2]];

// Only change code below this line
let removedFromArray;
removedFromArray = myArray.pop();
console.log(removedFromArray); 
console.log(myArray);  */

/* const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr); */


// Setup
/* const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);
console.log(myArray); */

/* let loc;
function myTest() {
    const loc = "foo";
    console.log(loc);
  }
  
  myTest();
  console.log(loc); */

/* let sum = 0;

function addSum(num) {
  sum = sum + num;
}

console.log(addSum(3)); */
/* 
function nextInLine(arr, item) {
    // Only change code below this line
      arr.push(item);
      return item;
    // Only change code above this line
    
  }
    // Setup
  let testArr = [1, 2, 3, 4, 5];
    // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr)); */

 /*  function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";    
    } else {
      return "Greater than or equal to 10";
    }
  }
  */
/* 
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1){
    return names[0];
  } else if (strokes <= par -2 ){
    return names[1];
  } else if (strokes === par -1 ){
    return names[2];
  } else if (strokes === par ){
    return names[3];
  } else if (strokes === par + 1){
    return names[4];
  } else if (strokes === par + 2){  
    return names[5];
  } else if (strokes === par + 3){
    return names[6];
  }  
  
  // Only change code above this line
}
golfScore(4, 1);
golfScore(4, 2);
golfScore(5, 2);
golfScore(4, 3);
golfScore(4, 4);
golfScore(1, 1);
golfScore(5, 5);
golfScore(4, 5);
 */

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case 1:
        answer = "alpha";
        break;    
      case 2:
        answer = "beta";
        break;    
      case 3:
        answer = "gamma";
        break;    
      case 4:
        answer = "delta";
        break;      
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);


