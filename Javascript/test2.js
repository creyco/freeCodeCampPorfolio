/* const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value
  } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) {
    records[id][prop] = [value]
  } else if (prop === 'tracks' && value !== "") {
    records[id][prop].push(value)
  } else if (value === "") {
    delete records[id][prop]
  }
  return records;
  }
   
console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"))
console.log(updateRecords(recordCollection, 2548, 'artist', ''));
console.log(updateRecords(recordCollection, 1245, 'tracks', "Addicted to Love"));
console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
console.log(updateRecords(recordCollection, 2548, "tracks", ""));
console.log(updateRecords(recordCollection, 2548, "albumTitle", "Riptide"));
 */

/* const myArray = [];

// Only change code below this line
for (let i=9; i>0; i -= 2) {
  console.log("i=",i);
  console.log(myArray.push(i));
} */

/* // Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0;

// Only change code below this line
for (let i = 0; i < myArr.length; i++) {
   total += myArr[i];
   console.log(myArr[i]);
}
console.log(total); */
/* 
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++){
      for (let j=0; j < arr[i].length; j++) {
          console.log(arr[i] *= arr[j])
      }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]); */

/* 
const myArray = [];
let i = 10;

// Only change code below this line
do {
  
  myArray.push(i);
  i++;
  console.log(i);

} while (i < 5)  */

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

console.log(sum([1], 0));
console.log(sum([2, 3, 4], 1));
console.log(sum([2, 3, 4, 5], 3));