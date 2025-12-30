<<<<<<< HEAD
let song1 = {
  title: "Shape of You",
  artist: "Ed Sheeran",
  duration: 233,
  genre: "Pop",
};
// Clone
let song2 = (Object.assign({}, song1)[(title, duration)] = song2);

// Iterate using for...in
for (let key in song) {
  console.log(`${key}: ${song1[key]}`);
}

let playlist = {
  playlistName: "My Favorites",
  createdBy: "John",
  songs: [
    {
      title: "Shape of You",
      artist: "Ed Sheeran",
      duration: 233,
    },
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      duration: 200,
    },
  ],
};

let addSong = {
  title: "Shape of You",
  artist: "Ed Sheeran",
  duration: 233,
};
playlist.songs.push(addSong);

// Iterate and print song titles
playlist.songs.forEach((song, i) => {
  console.log(`Title: ${song.title}, Artist: ${song.artist}`);
});

const jsonText = JSON.stringify(playlist);
let playlist2 = JSON.parse(jsonText);

// Save the playlist text as a key in browser client local storage
localStorage.setItem("playlist", jsonText);
let storageText = localStorage.getItem("playlist");
let playlist3 = JSON.parse(storageText);
=======
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
>>>>>>> c05cf63896e1d67e5cd42b6006584222571bfbb1
