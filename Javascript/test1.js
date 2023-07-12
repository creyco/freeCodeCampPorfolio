/* function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case 'a':
        answer = "alpha";
        break;    
      case 'b':
        answer = "beta";
        break;    
      case 'c':
        answer = "gamma";
        break;    
      default:
        answer = "stuff";
        break;      
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch('a');
 */

/*   function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;  
    case 4:
    case 5:
    case 6:
      answer = "Mid";
    case 7:
    case 8:
    case 9:
      answer = "High";  
  }
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);
  sequentialSizes(2);
  sequentialSizes(2);
  sequentialSizes(4);
  sequentialSizes(5);
  sequentialSizes(6);
  sequentialSizes(7);
  sequentialSizes(8);
  sequentialSizes(9); */


/*   // Setup
function abTest(a, b) {
    // Only change code below this line
  
    return (a < 0 || b <0 );
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  console.log(abTest(2,2)); */

  let count = 0;

function cc(card) {
  // Only change code below this line
  const grupo_cards = [[2,3,4,5,6], [7,8,9] , [10,'J','Q','K','A']];
  let mayorQueDiez = arreglo.filter(element => element > 10);
  
  if (grupo_cards.includes(card))
        grupo_cards.indexof(card);


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

,