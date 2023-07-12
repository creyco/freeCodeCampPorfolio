// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
 /*  function lookUpProfile(name, prop) {
    // Only change code below this line
    for(let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstname === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                    return contacts[i][prop];
            } else {
                    return "No such property";
            }
        }
  }
    // Only change code above this line
  } */
  
  function lookUpProfile(firstName, prop) { 
    var result = contacts.filter(x => x.firstName == firstName)

    if (result.length === 0) {
        return "No such contact";
    } else {
        return result[0][prop] ? result[0][prop] : "No such property";
    }
  }

  function PRN(a){
    console.log(a);
  }
  
  PRN(lookUpProfile("Kristian", "lastName"));
  PRN(lookUpProfile("Sherlock", "likes"));
  PRN(lookUpProfile("Harry", "likes"));
  PRN(lookUpProfile("Bob", "number"));
  PRN(lookUpProfile("Bob", "potato"));
  PRN(lookUpProfile("Akira", "address"));
  
  
  lookUpProfile("Akira", "likes");