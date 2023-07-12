/* function checkObj(obj, checkProp) {
    // Only change code below this line
    if (checkObj.hasOwnProperty(checkProp)) {
        return checkObj[checkProp];
    } else {
      return "Not Found";
    }
    // Only change code above this line
  }
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet"));
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"));
  console.log(checkObj({city: "Seattle"}, "city"));
  console.log(checkObj({city: "Seattle"}, "district"));
  console.log(checkObj({pet: "kitten", bed: "sleigh"}, "gift")); */

  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const a = myStorage.car.inside['globe box'];
  console.log(a);
  