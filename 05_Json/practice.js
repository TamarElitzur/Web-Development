let userObj = {

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

let user2 = arr[1];
user2.password = "12345";
