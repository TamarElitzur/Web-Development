let userObj = {
<<<<<<< HEAD
  username: "or",
  grade: 100,
  password: "pass123",
  isConnected: true,
  address: {
    country: "israel",
    city: "Kash",
    street: "ben gurion 10",
  },
  allgrades: [{ csharp: 90 }, { cpp: 70 }, 90, 100, 85],
};

let newGrade = userObj.grade + 10;
userObj.grade += 10;
userObj.id = 1000;

let userObj2 = userObj;
userObj.grade += 10;
userObj2.grade = 0;
let grade1 = userObj.grade;

userObj.address.street = "";
userObj["address"].city = "telaviv";

let arr = [
  userObj,
  {
    username: "or",
    grade: 100,
    password: "pass123",
    isConnected: true,
    address: {
      country: "israel",
      city: "Kash",
      street: "ben gurion 10",
    },
    allgrades: [{ csharp: 90 }, { cpp: 70 }, 90, 100, 85],
  },
];

arr[0].allgrades[1] = { CPP: 80 };
arr[1].avg = 95;
=======

    username: "matan",
    grade:85,
    password:"pass123",
    address:{
        country:"Israel",
        city:"Avtalyon",
        street:"Mitzpe Hayamim",
        number:"157"
    },
    allgrades:[80,90,100,85]
    
}

let newGrade = userObj.grade+10;
userObj.grade += 20;
userObj.id = 1000;

let userObj2 = userObj;
userObj2.grade = 0;

userObj.address.street = "Sesame Street";

let arr = [userObj, {

    username: "matan",
    grade:85,
    password:"pass123",
    address:{
        country:"Israel",
        city:"Avtalyon",
        street:"Mitzpe Hayamim",
        number:"157"
    },
    allgrades:[80,90,100,85]
    
}]

arr[0].allgrades[1] = {CPP:80};
arr[1].avg = 95;

>>>>>>> c05cf63896e1d67e5cd42b6006584222571bfbb1
let user2 = arr[1];
user2.password = "12345";
