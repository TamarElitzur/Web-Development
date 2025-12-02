const express = require("express"); //   ספרייה שמאפשרת לבנות שרת HTTP בקלות
const path = require("path"); // עוזר לעבוד עם נתיבי קבצים
const fs = require("fs"); // File System - קריאה/כתיבה לקבצים

// יצירת השרת
const app = express(); // app מייצג את השרת עצמו
const PORT = 3000; // באיזה כתובת הוא מאזין

// JSON body support
app.use(express.json()); // אומר לשרת "אם מגיע אליי גוף בקשה, כלומר body, בפורמט JSON - תפרק אותו לאובייקט JS. בלי זה req.body === undeifined. בזכות השורה הזאת ניתן לבצע PUT ו- POST כראוי "

// Set static client for html pages/js/
// ***** הקשר בין frontend ל- backend
app.use(express.static(path.join(__dirname, "client"))); // השורה הזאת אומרת "אם מבקשים קובץ סטטי כמו לדוגמא HTML, JS, CSS - תחפש בתיקיית client "
// השורה הזאת למעשה תגרום לכך שברגע שמזינים את כתובת השרת, הדפדפן פונה לשרת ומבקש ממנו להביא את / שזה למעשה index.html ובכך הדפדפן יודע להציג את התוכן של index.html

const DATA_FILE = path.join(__dirname, "data", "songs.json"); //  מתאר את התיקייה והקובץ בו נשמור את הנתונים

function readSongs() {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf8"); // תקרא את הקובץ ותעצור את כל השרת עד שסיימת לקרוא ותחזיר אותו כקובץ גולמי
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading songs.json:", err.message);
    return [];
  }
}

function writeSongs(songs) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(songs, null, 2)); // תכתוב לתוך הקובץ songs.json ותעצור את השרת עד לסיום הכתיבה
}

// req = מה שהדפדפן שלח
// res = הכלי של השרת לענות לדפדפן
// fetch = שליחת בקשת HTTP מהדפדפן לשרת
// ---- SIMPLE HOME ROUTE (ONE PAGE) ----
// אם מישהו שולח בקשת HTTP מסוג GET לשרת, לנתיב X — תריץ את Y
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// ---- SIMPLE HOME ROUTE (ONE PAGE) ----
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// ---- SIMPLE HOME ROUTE (ONE PAGE) ----
app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// GET ALL SONGS
app.get("/api/songs", (req, res) => {
  const songs = readSongs();
  res.json(songs);
});

app.get("/api/songs/:id", (req, res) => {
  const songs = readSongs();
  const id = parseInt(req.params.id);
  const song = songs.find((s) => s.id === id);

  if (!song) return res.status(404).json({ error: "Song not found" });
  res.json(song);
});

app.get("/api/search", (req, res) => {
  const { artist, minYear, maxYear } = req.query; // בניית אובייקט מה- URL. אם ה- URL הוא /api/search?artist=queen&minYear=1980&maxYear=1990 אז בפועל req.query = {artist: "queen", minYear: 1980, maxYear: 1990 };
  let songs = readSongs();

  if (artist) {
    songs = songs.filter((s) =>
      s.artist.toLowerCase().includes(artist.toLowerCase())
    );
  }

  if (minYear) {
    songs = songs.filter((s) => s.year >= parseInt(minYear));
  }

  if (maxYear) {
    songs = songs.filter((s) => s.year <= parseInt(maxYear));
  }

  res.json(songs);
});

// ---- START SERVER ----
// מפעיל את השרת. אומר ל- Node: תתחיל להאזין לפורט 3000
// מרגע זה השרת חי ומקבל בקשות
//  ה- callback רץ פעם אחת בלבד - כשהשרת עלה
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// הוספת שיר חדש POST
app.post("/api/songs", (req, res) => {
  const songs = readSongs();
  const { title, artist, year } = req.body;

  if (!title || !artist || !year) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const newSong = {
    id: songs.length ? Math.max(...songs.map((s) => s.id)) + 1 : 1,
    title,
    artist,
    year: parseInt(year),
    mp3: null, // will use later when we add upload
  };

  songs.push(newSong);
  writeSongs(songs);
  res.status(201).json(newSong);
});

// עריכת שיר קיים PUT
app.put("/api/songs/:id", (req, res) => {
  const songs = readSongs();
  const id = parseInt(req.params.id);
  const { title, artist, year } = req.body;

  const index = songs.findIndex((s) => s.id === id);
  if (index === -1) return res.status(404).json({ error: "Song not found" });

  songs[index].title = title ?? songs[index].title;
  songs[index].artist = artist ?? songs[index].artist;
  songs[index].year = year ? parseInt(year) : songs[index].year;

  writeSongs(songs);

  res.json(songs[index]);
});

app.delete("/api/songs/:id", (req, res) => {
  const songs = readSongs();
  const id = parseInt(req.params.id);

  const index = songs.findIndex((s) => s.id === id);
  if (index === -1) return res.status(404).json({ error: "Song not found" });

  const deleted = songs.splice(index, 1)[0];
  writeSongs(songs);

  res.json({ message: "Deleted", song: deleted });
});
