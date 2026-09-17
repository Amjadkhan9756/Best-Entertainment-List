// require("dotenv").config();
const dotenv = require("dotenv")
const express = require("express");
const mongoose = require("mongoose");

const Content = require("./schemas/ContentSchema.js"); //For movies in home
const Web = require("./schemas/WebSchema.js"); // for series in home

const Animee = require("./schemas/AnimeeSchema.js");
const Kdrama = require("./schemas/KdramaSchema.js");

//Navbar
const topData = require("./NavbarSchema/TopSchema.js");

const MovieData = require("./NavbarSchema/MoviesSchema.js");
const SeriesData = require("./NavbarSchema/WebSchema.js");
const AnimeData = require("./NavbarSchema/AnimeSchema.js");

const KdramaData = require("./NavbarSchema/KdramaSchema.js")

dotenv.config();

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch((err) => console.error("❌ MongoDB connection failed:", err));

app.get("/", (req, res) => {
    res.send("✅ API is working and connected to MongoDB Atlas!");
});
























// Home Movies

app.get("/TopContent", async(req, res) => {
    try {
        const Data = await topData.find();
        res.json(Data);
    } catch (err) {
        res.status(500).json({ error: "Error fetching movies" });
    }
});







// hMovies

// app.get("/addMovies", (req, res) => {
//     let tempMovies = [{
//             "_id": "dark_knight_2008",
//             "title": "The Dark Knight",
//             "releaseDate": "2008-07-18T00:00:00Z",
//             "duration": "2h 32m",
//             "rating": "PG-13",
//             "imdbRating": 9.1,
//             "metascore": 85,
//             "votes": "3.1M",
//             "genre": ["Action", "Crime", "Drama"],
//             "director": "Christopher Nolan",
//             "writers": ["Jonathan Nolan", "Christopher Nolan", "David S. Goyer"],
//             "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Gary Oldman", "Michael Caine"],
//             "actresses": ["Maggie Gyllenhaal"],

//             "story": "When the menacing Joker wreaks havoc and chaos on the people of Gotham, Batman must work alongside James Gordon and Harvey Dent to put an end to the madness. The film explores themes of chaos versus order and the fine line between hero and vigilante.",
//             "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSCbZe3-VF-UzvuW80mL5zBYlnKZpgYckUFE_k4wWCiOaEUyLnxtsufNgUDY6JYgF9WDtAJOcgWRDjEs3zY4jmljnrbLGxlfo3HRs0b2g"
//         },
//         {
//             "_id": "avengers_endgame_2019",
//             "title": "Avengers: Endgame",
//             "releaseDate": "2019-04-26T00:00:00Z",
//             "duration": "3h 1m",
//             "rating": "PG-13",
//             "imdbRating": 8.4,
//             "metascore": 78,
//             "votes": "1.4M",
//             "genre": ["Action", "Adventure", "Drama"],
//             "director": ["Anthony Russo", "Joe Russo"],
//             "writers": ["Christopher Markus", "Stephen McFeely"],
//             "actors": ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Jeremy Renner"],
//             "actresses": ["Scarlett Johansson", "Brie Larson", "Karen Gillan"],

//             "story": "After the devastating events of Infinity War, the universe is in ruins due to Thanos' snap. The remaining Avengers assemble once more to reverse the damage and restore balance to the universe through a desperate time heist mission.",
//             "imageUrl": " https://moviebabble.com/wp-content/uploads/2019/04/Avengers-Endgame-1.jpg"
//         },
//         {
//             "_id": "avengers_infinity_war_2018",
//             "title": "Avengers: Infinity War",
//             "releaseDate": "2018-04-27T00:00:00Z",
//             "duration": "2h 29m",
//             "rating": "PG-13",
//             "imdbRating": 8.4,
//             "metascore": 68,
//             "votes": "1.3M",
//             "genre": ["Action", "Adventure", "Sci-Fi"],
//             "director": ["Anthony Russo", "Joe Russo"],
//             "writers": ["Christopher Markus", "Stephen McFeely"],
//             "actors": ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo", "Chris Evans", "Josh Brolin"],
//             "actresses": ["Scarlett Johansson", "Elizabeth Olsen", "Zoe Saldana"],

//             "story": "The Avengers and their allies must be willing to sacrifice everything in an attempt to defeat the powerful Thanos. The Mad Titan seeks to collect all six Infinity Stones to complete his devastating plan of universal destruction.",
//             "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5X6PfcI2sdF0fjM6vl_KTf7idCd9Vj5TCVLWD-4dn_XaMfJM6ml39sCrcXOpd-5uEYJPTRto7Ceq_jmXIsF0PvxP2L7BRsTfXDgZ2VlI"
//         },
//         {
//             "_id": "dark_knight_rises_2012",
//             "title": "The Dark Knight Rises",
//             "releaseDate": "2012-07-20T00:00:00Z",
//             "duration": "2h 44m",
//             "rating": "PG-13",
//             "imdbRating": 8.4,
//             "metascore": 78,
//             "votes": "1.9M",
//             "genre": ["Action", "Crime", "Drama"],
//             "director": "Christopher Nolan",
//             "writers": ["Jonathan Nolan", "Christopher Nolan", "David S. Goyer"],
//             "actors": ["Christian Bale", "Tom Hardy", "Gary Oldman", "Joseph Gordon-Levitt", "Michael Caine"],
//             "actresses": ["Anne Hathaway", "Marion Cotillard"],

//             "story": "Eight years after the Joker's reign of chaos, Batman is forced out of exile when the masked terrorist Bane attacks Gotham City. Bruce Wayne must overcome his physical and emotional wounds to save his beloved city from complete destruction.",
//             "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDJ0X2xpDCEaBy0C2gyP-UUBVcHs4McRLaMusx0DUn7-Bx1pg8jOmWDAUMxF5A129s-5tUt8MpZ8JIceAXfTR2iPTksmN2LlppnKh9wok"
//         },
//         {
//             "_id": "spiderman_no_way_home_2021",
//             "title": "Spider-Man: No Way Home",
//             "releaseDate": "2021-12-17T00:00:00Z",
//             "duration": "2h 28m",
//             "rating": "PG-13",
//             "imdbRating": 8.2,
//             "metascore": 71,
//             "votes": "968K",
//             "genre": ["Action", "Adventure", "Sci-Fi"],
//             "director": "Jon Watts",
//             "writers": ["Chris McKenna", "Erik Sommers"],
//             "actors": ["Tom Holland", "Benedict Cumberbatch", "Willem Dafoe", "Alfred Molina", "Jamie Foxx"],
//             "actresses": ["Zendaya", "Marisa Tomei"],

//             "story": "With Spider-Man's identity revealed to the world, Peter Parker asks Doctor Strange for help. When a spell goes wrong, dangerous villains from other dimensions begin appearing, forcing Peter to discover what it truly means to be Spider-Man.",
//             "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSW27tFgUYvQmdEb2BKlRAYw4TvNcSmxrORwx98T4rLZmbwz8_z"
//         },
//         {
//             "_id": "logan_2017",
//             "title": "Logan",
//             "releaseDate": "2017-03-03T00:00:00Z",
//             "duration": "2h 17m",
//             "rating": "R",
//             "imdbRating": 8.1,
//             "metascore": 77,
//             "votes": "899K",
//             "genre": ["Action", "Drama", "Sci-Fi"],
//             "director": "James Mangold",
//             "writers": ["James Mangold", "Scott Frank", "Michael Green"],
//             "actors": ["Hugh Jackman", "Patrick Stewart", "Boyd Holbrook", "Stephen Merchant"],
//             "actresses": ["Dafne Keen"],

//             "story": "In a dystopian future where mutants are nearly extinct, an aging Logan cares for a sick Professor X. When a young mutant named Laura appears, Logan must protect her from sinister forces while confronting his own mortality.",
//             "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQf1vHq7mmnTD7MdK9tt2Nld_7ETfvu_MvexvxAhEsVCgyoLRGnDSYRX155UcLUR7_jUsVBhrIjfuSRenuFSmgd7dUkN8gQOtZZ1XtV6_c"
//         },
//         {
//             "_id": "batman_begins_2005",
//             "title": "Batman Begins",
//             "releaseDate": "2005-06-15T00:00:00Z",
//             "duration": "2h 20m",
//             "rating": "PG-13",
//             "imdbRating": 8.2,
//             "metascore": 70,
//             "votes": "1.7M",
//             "genre": ["Action", "Crime", "Drama"],
//             "director": "Christopher Nolan",
//             "writers": ["Bob Kane", "David S. Goyer", "Christopher Nolan"],
//             "actors": ["Christian Bale", "Michael Caine", "Ken Watanabe", "Liam Neeson", "Gary Oldman"],
//             "actresses": ["Katie Holmes"],

//             "story": "After witnessing his parents' murder, young Bruce Wayne travels the world learning to fight injustice. He returns to Gotham City as Batman to battle the corrupt elite and a mysterious terrorist organization threatening to destroy the city.",
//             "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUOjNpenUsceGKR6lDXcU1f-zfTI1JfDPqkprkZfmfIvs-_nMGErYryXpy854WH7-PHKPCeKojCzMwEcTSjqSP7Y3YUhFhFfeYa4xPXA"
//         },
//         {
//             "_id": "avengers_2012",
//             "title": "The Avengers",
//             "releaseDate": "2012-05-04T00:00:00Z",
//             "duration": "2h 23m",
//             "rating": "PG-13",
//             "imdbRating": 8.0,
//             "metascore": 69,
//             "votes": "1.5M",
//             "genre": ["Action", "Adventure", "Sci-Fi"],
//             "director": "Joss Whedon",
//             "writers": ["Joss Whedon", "Zak Penn"],
//             "actors": ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Jeremy Renner"],
//             "actresses": ["Scarlett Johansson"],

//             "story": "When the mischievous Loki threatens global domination with his alien army, Nick Fury assembles Earth's mightiest heroes. The team must overcome their differences and learn to work together to save humanity from enslavement.",
//             "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTD9J4JeLDIEEOUqkOEpn3T4ZMuDtgpLPRh6m7OIZQRCXL13LaL6ofqjz_W3zzeMIcc39SUX8OyujJOQ23fl0P6L0pJY2A7LkzqZEIhyA"
//         },
//         {
//             "_id": "iron_man_2008",
//             "title": "Iron Man",
//             "releaseDate": "2008-05-02T00:00:00Z",
//             "duration": "2h 6m",
//             "rating": "PG-13",
//             "imdbRating": 7.9,
//             "metascore": 79,
//             "votes": "1.2M",
//             "genre": ["Action", "Adventure", "Sci-Fi"],
//             "director": "Jon Favreau",
//             "writers": ["Mark Fergus", "Hawk Ostby", "Art Marcum", "Matt Holloway"],
//             "actors": ["Robert Downey Jr.", "Jeff Bridges", "Terrence Howard", "Shaun Toub"],
//             "actresses": ["Gwyneth Paltrow"],

//             "story": "Billionaire industrialist Tony Stark is captured in Afghanistan and forced to build a weapon. Instead, he creates a powered suit of armor to escape and becomes the armored superhero Iron Man, fighting against his own company's weapons being used by terrorists.",
//             "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuynilB95qrbHcvPtoNm3SkzQlkLJpvWui0I4CI_zuD6UAcBqiRXXDUNHxVsFZ0Af29tXtZnDUC69FPX2hSuKBpMQ8ZcNVXT5mTMZMYig"
//         },
//         {
//             "_id": "kick_ass_2010",
//             "title": "Kick-Ass",
//             "releaseDate": "2010-04-16T00:00:00Z",
//             "duration": "1h 57m",
//             "rating": "R",
//             "imdbRating": 7.6,
//             "metascore": 66,
//             "votes": "612K",
//             "genre": ["Action", "Comedy", "Crime"],
//             "director": "Matthew Vaughn",
//             "writers": ["Jane Goldman", "Matthew Vaughn"],
//             "actors": ["Aaron Taylor-Johnson", "Nicolas Cage", "Christopher Mintz-Plasse", "Mark Strong"],
//             "actresses": ["Chloë Grace Moretz"],

//             "story": "Dave Lizewski is an ordinary teenager who decides to become a real-life superhero despite having no powers or training. His actions inspire others, including the deadly father-daughter vigilante duo Big Daddy and Hit-Girl, in this violent and darkly comic tale.",
//             "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQip2smpL6zi5d8wRKqMpfYh7yjh-PNRT5fY8Qd2RC1Y1VReADb"
//         },
//         {
//             "_id": "the_batman_2022",
//             "title": "The Batman",
//             "releaseDate": "2022-03-04T00:00:00Z",
//             "duration": "2h 56m",
//             "rating": "PG-13",
//             "imdbRating": 7.8,
//             "metascore": 72,
//             "votes": "887K",
//             "genre": ["Action", "Crime", "Drama"],
//             "director": "Matt Reeves",
//             "writers": ["Matt Reeves", "Peter Craig"],
//             "actors": ["Robert Pattinson", "Paul Dano", "Colin Farrell", "Jeffrey Wright", "Andy Serkis"],
//             "actresses": ["Zoë Kravitz"],

//             "story": "When a sadistic serial killer begins murdering key political figures in Gotham, the Batman is forced to investigate the city's hidden corruption. This dark detective story explores Batman's early years and questions his family's involvement in Gotham's criminal underworld.",
//             "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNM4kpyfjMnXRlUxwu-YeAJ82VenF9KFMo3XXQpcodrVVVoBsbjvpJHuJEMmj3MY5M5BgMzyPyHn58HMGfY1CEUo8J9KY01hfQDIwxxg"
//         },
//         {
//             "_id": "watchmen_2009",
//             "title": "Watchmen",
//             "releaseDate": "2009-03-06T00:00:00Z",
//             "duration": "2h 42m",
//             "rating": "R",
//             "imdbRating": 7.6,
//             "metascore": 56,
//             "votes": "602K",
//             "genre": ["Action", "Drama", "Mystery"],
//             "director": "Zack Snyder",
//             "writers": ["David Hayter", "Alex Tse", "Alan Moore"],
//             "actors": ["Jackie Earle Haley", "Patrick Wilson", "Billy Crudup", "Matthew Goode", "Jeffrey Dean Morgan"],
//             "actresses": ["Malin Akerman", "Carla Gugino"],

//             "story": "In an alternate 1985 where superheroes exist, the murder of a government-sanctioned vigilante draws his former colleagues out of retirement. As they investigate the conspiracy, they uncover a plot that will change the course of history and challenge their understanding of heroism.",
//             "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNf4bBUntB4vWN82fuGJZBCU4ArqreD61hnEXVy0Gzu5aLgcTQnhjIQn2NKFVDg-ELuEGt2fAXT4jav4hU-sE8XEaLo_oRmJszGU3ROnY"
//         },
//         {
//             "_id": "xmen_days_of_future_past_2014",
//             "title": "X-Men: Days of Future Past",
//             "releaseDate": "2014-05-23T00:00:00Z",
//             "duration": "2h 12m",
//             "rating": "PG-13",
//             "imdbRating": 7.9,
//             "metascore": 75,
//             "votes": "775K",
//             "genre": ["Action", "Adventure", "Sci-Fi"],
//             "director": "Bryan Singer",
//             "writers": ["Simon Kinberg", "Jane Goldman", "Matthew Vaughn"],
//             "actors": ["Hugh Jackman", "James McAvoy", "Michael Fassbender", "Patrick Stewart", "Ian McKellen"],
//             "actresses": ["Jennifer Lawrence", "Halle Berry", "Ellen Page"],

//             "story": "In a dystopian future where mutants face extinction, the X-Men send Wolverine back in time to 1973. His mission is to change history and prevent the creation of the Sentinel program that leads to the dark future for both humans and mutants.",
//             "imageUrl": " https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZctBOs7qKnUyrLjl2mGKo5mX96RSJjed2hf-irkZVxVpwvOP0arLQLUG3RGKs3fJcV6qWg8cZbbBPG7aq5W2Z8Ea_1oDi47pn4WIRcQ"
//         },
//         {
//             "_id": "zack_snyder_justice_league_2021",
//             "title": "Zack Snyder's Justice League",
//             "releaseDate": "2021-03-18T00:00:00Z",
//             "duration": "4h 2m",
//             "rating": "R",
//             "imdbRating": 7.9,
//             "metascore": 54,
//             "votes": "461K",
//             "genre": ["Action", "Adventure", "Fantasy"],
//             "director": "Zack Snyder",
//             "writers": ["Jerry Siegel", "Joe Shuster", "Chris Terrio"],
//             "actors": ["Henry Cavill", "Ben Affleck", "Gal Gadot", "Ezra Miller", "Jason Momoa", "Ray Fisher"],
//             "actresses": ["Gal Gadot", "Amy Adams"],

//             "story": "Determined to ensure Superman's ultimate sacrifice wasn't in vain, Bruce Wayne recruits a team of metahumans to protect the world. They must unite against the ancient threat of Steppenwolf and his master Darkseid in this director's vision of the Justice League story.",
//             "imageUrl": "https://pbs.twimg.com/profile_banners/1261435037288783872/1616084048/600x200"
//         },
//         {
//             "_id": "guardians_of_the_galaxy_2014",
//             "title": "Guardians of the Galaxy",
//             "releaseDate": "2014-08-01T00:00:00Z",
//             "duration": "2h 1m",
//             "rating": "PG-13",
//             "imdbRating": 8.0,
//             "metascore": 76,
//             "votes": "1.3M",
//             "genre": ["Action", "Adventure", "Comedy"],
//             "director": "James Gunn",
//             "writers": ["James Gunn", "Nicole Perlman"],
//             "actors": ["Chris Pratt", "Vin Diesel", "Bradley Cooper", "Dave Bautista", "Lee Pace"],
//             "actresses": ["Zoe Saldana", "Karen Gillan"],

//             "story": "A group of intergalactic misfits and criminals must pull together to stop the fanatical warrior Ronan from destroying the galaxy. Led by the wise-cracking Peter Quill, this unlikely team becomes the galaxy's most wanted heroes in a fun space adventure.",
//             "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQqYTsXJOgoltvIobDnl8ON2TOPxxML0mrItFNWKu4TPLthOmK7Roo88K39AjMt4ufAtdsx2VZJVUH8yar_qnqnmqysDO0N_DsEDQYuV7E"
//         },
//         {
//             "_id": "spiderman_homecoming_2017",
//             "title": "Spider-Man: Homecoming",
//             "releaseDate": "2017-07-07T00:00:00Z",
//             "duration": "2h 13m",
//             "rating": "PG-13",
//             "imdbRating": 7.4,
//             "metascore": 73,
//             "votes": "767K",
//             "genre": ["Action", "Adventure", "Sci-Fi"],
//             "director": "Jon Watts",
//             "writers": ["Jonathan Goldstein", "John Francis Daley", "Jon Watts"],
//             "actors": ["Tom Holland", "Michael Keaton", "Robert Downey Jr.", "Marisa Tomei", "Jon Favreau"],
//             "actresses": ["Marisa Tomei", "Laura Harrier", "Zendaya"],

//             "story": "Young Peter Parker tries to balance his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man. He must stop Adrian 'The Vulture' Toomes from selling weapons made with advanced alien technology while proving himself to Tony Stark.",
//             "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRL7su_Kz7OkzSKJCG4Lm-kVsrki5uISd-s6aLxjjjM4Mv-5YZUQP_Gq313Gfv44IvuzIAdZ9rR7C7NFzuoZKRiIl-9KW5y5xPe9p1Wi7g"
//         },
//         {
//             "_id": "deadpool_wolverine_2024",
//             "title": "Deadpool & Wolverine",
//             "releaseDate": "2024-07-26T00:00:00Z",
//             "duration": "2h 8m",
//             "rating": "R",
//             "imdbRating": 7.5,
//             "metascore": 56,
//             "votes": "518K",
//             "genre": ["Action", "Comedy", "Sci-Fi"],
//             "director": "Shawn Levy",
//             "writers": ["Ryan Reynolds", "Rhett Reese", "Paul Wernick"],
//             "actors": ["Ryan Reynolds", "Hugh Jackman", "Matthew Macfadyen", "Dafne Keen"],
//             "actresses": ["Emma Corrin"],

//             "story": "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction. This irreverent team-up brings together two of Marvel's most popular anti-heroes in a multiverse-spanning adventure.",
//             "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkoqR8m36PXJEXYVcrnIN6ZL1foGNCq1Fhwdb6MSRwckMvpBqQU-BTci5Mp5-iFicX2XnktDLCsP9DDa1YNaJ6nY_3r1ncbHgV8Zj6oQ"
//         },
//         {
//             "_id": "xmen_first_class_2011",
//             "title": "X-Men: First Class",
//             "releaseDate": "2011-06-03T00:00:00Z",
//             "duration": "2h 11m",
//             "rating": "PG-13",
//             "imdbRating": 7.7,
//             "metascore": 65,
//             "votes": "751K",
//             "genre": ["Action", "Adventure", "Sci-Fi"],
//             "director": "Matthew Vaughn",
//             "writers": ["Ashley Miller", "Zack Stentz", "Jane Goldman", "Matthew Vaughn"],
//             "actors": ["James McAvoy", "Michael Fassbender", "Kevin Bacon", "Nicholas Hoult"],
//             "actresses": ["Jennifer Lawrence", "January Jones", "Rose Byrne"],

//             "story": "Set in the 1960s, this prequel shows how Charles Xavier and Erik Lensherr first met and became friends. They work together to find other mutants, but Erik's vengeful pursuit of those who wronged him creates a schism that divides them into Professor X and Magneto.",
//             "imageUrl": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/674a6e41-c48e-404c-91a1-22572587a2b7/compose?aspectRatio=1.78&format=webp&width=1200"
//         },
//         {
//             "_id": "deadpool_2_2018",
//             "title": "Deadpool 2",
//             "releaseDate": "2018-05-18T00:00:00Z",
//             "duration": "1h 59m",
//             "rating": "R",
//             "imdbRating": 7.6,
//             "metascore": 66,
//             "votes": "721K",
//             "genre": ["Action", "Comedy", "Adventure"],
//             "director": "David Leitch",
//             "writers": ["Rhett Reese", "Paul Wernick", "Ryan Reynolds"],
//             "actors": ["Ryan Reynolds", "Josh Brolin", "Morena Baccarin", "Julian Dennison", "Zazie Beetz"],
//             "actresses": ["Morena Baccarin", "Zazie Beetz", "Brianna Hildebrand"],

//             "story": "Foul-mouthed mutant mercenary Wade Wilson assembles a team of fellow mutant rogues to protect a young boy with supernatural abilities from Cable, a brutal time-traveling cyborg. This sequel delivers more irreverent humor, action, and heart than the original.",
//             "imageUrl": "  https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSkHg0prF8-boatw86GxkFC4B_ITvnv7iWPU2yGSpOwffoAZgqfe6jxQ3QSr02rc04vwLwAacGOj3PVNJOvjSLMwJm0NKgxo4FkMOBVy6o"
//         },
//         {
//             "_id": "avengers_age_of_ultron_2015",
//             "title": "Avengers: Age of Ultron",
//             "releaseDate": "2015-05-01T00:00:00Z",
//             "duration": "2h 21m",
//             "rating": "PG-13",
//             "imdbRating": 7.3,
//             "metascore": 66,
//             "votes": "970K",
//             "genre": ["Action", "Adventure", "Sci-Fi"],
//             "director": "Joss Whedon",
//             "writers": ["Joss Whedon"],
//             "actors": ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo", "Chris Evans", "Jeremy Renner"],
//             "actresses": ["Scarlett Johansson", "Elizabeth Olsen"],

//             "story": "When Tony Stark and Bruce Banner attempt to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong. The artificial intelligence becomes hostile and it's up to Earth's mightiest heroes to stop Ultron from enacting his terrible plan for human extinction.",
//             "imageUrl": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/e9b8aaf1-d1d1-4e6c-9fe9-6d524b47914f/compose?aspectRatio=1.78&format=webp&width=1200"
//         }
//     ];

//     tempMovies.forEach((item) => {
//         let newMovies = new Content({

//             id: item.id,
//             title: item.title,
//             releaseDate: item.releaseDate,
//             duration: item.duration,
//             rating: item.rating,
//             imdbRating: item.imdbRating,
//             metascore: item.metascore,
//             votes: item.votes,
//             genre: item.genre,
//             director: item.director,
//             writers: item.writers,
//             actors: item.actors,
//             actresses: item.actresses,

//             story: item.story,
//             imageUrl: item.imageUrl

//         });
//         newMovies.save();
//     })
//     res.send("Done!");

// });

app.get("/addMovies", async(req, res) => {
    try {
        const movies = await Content.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: "Error fetching movies" });
    }
});


//H web series 
app.get("/addWebseries", async(req, res) => {
    try {
        const Webs = await Web.find();
        res.json(Webs);
    } catch (err) {
        res.status(500).json({ error: "Error fetching movies" });
    }
});

//H anime
app.get("/addAnimee", async(req, res) => {
    try {
        const Animes = await Animee.find();
        res.json(Animes);
    } catch (err) {
        res.status(500).json({ error: "Error fetching movies" });
    }
});

//H K-drama

// app.get("/addKdrama", (req, res) => {

//     let tempKdrama = [{
//             "id": "41",
//             "title": "While You Were Sleeping",
//             "releaseDate": "2017",
//             "duration": "32 eps",
//             "rating": "Not Rated",
//             "imdbRating": 8.3,
//             "metascore": null,
//             "votes": "12K",
//             "genre": ["Drama", "Fantasy", "Romance"],
//             "director": [],
//             "writers": [],
//             "actors": ["Lee Jong-suk", "Jung Hae-in"],
//             "actresses": ["Bae Suzy"],
//             "story": "The drama is about a woman, Nam Hong Joo, who can see accidents that take place in the future through her dreams. And a prosecutor, Jung Jae Chan, who struggles to stop the woman's dreams from coming true.",
//             "imageUrl": ""
//         },
//         {
//             "id": "42",
//             "title": "Kill Me, Heal Me",
//             "releaseDate": "2015",
//             "duration": "20 eps",
//             "rating": "Not Rated",
//             "imdbRating": 8.3,
//             "metascore": null,
//             "votes": "6.8K",
//             "genre": ["Drama", "Romance", "Comedy"],
//             "director": [],
//             "writers": [],
//             "actors": ["Ji Sung", "Park Seo-joon"],
//             "actresses": ["Hwang Jeong-eum"],
//             "story": "A love story between the son from a wealthy family who has 7 personalities Cha Do Hyun and Oh Ri Jin who becomes his secret psychiatrist.",
//             "imageUrl": ""
//         },
//         {
//             "id": "43",
//             "title": "Secret Garden",
//             "releaseDate": "2010-2011",
//             "duration": "20 eps",
//             "rating": "Not Rated",
//             "imdbRating": 8.0,
//             "metascore": null,
//             "votes": "8.3K",
//             "genre": ["Drama", "Romance", "Fantasy"],
//             "director": [],
//             "writers": [],
//             "actors": ["Hyun Bin", "Yoon Sang-Hyun"],
//             "actresses": ["Ha Ji-Won"],
//             "story": "Gil Ra-im is a tough stuntwoman with a soft heart. Kim Joo-won is a nit-picky CEO with a long list of complexes. Love-struck, Joo-won barges into Ra-im's life in all the wrong ways, trying to make sense of his illogical feelings.",
//             "imageUrl": ""
//         },
//         {
//             "id": "44",
//             "title": "W",
//             "releaseDate": "2016",
//             "duration": "17 eps",
//             "rating": "Not Rated",
//             "imdbRating": 8.0,
//             "metascore": null,
//             "votes": "17K",
//             "genre": ["Drama", "Romance", "Fantasy"],
//             "director": [],
//             "writers": [],
//             "actors": ["Lee Jong-suk", "Lee Chae-kyung"],
//             "actresses": ["Han Hyo-joo"],
//             "story": "Yeon-joo discovers that W, a webtoon created by her father, is a living world and saves the protagonist, Kang Chul. A confused Kang Chul falls in love with her and follows her to the real world.",
//             "imageUrl": ""
//         },
//         {
//             "id": "45",
//             "title": "Guardian: The Lonely and Great God",
//             "releaseDate": "2016-2017",
//             "duration": "16 eps",
//             "rating": "TV-14",
//             "imdbRating": 8.6,
//             "metascore": null,
//             "votes": "34K",
//             "genre": ["Drama", "Romance", "Fantasy"],
//             "director": [],
//             "writers": [],
//             "actors": ["Gong Yoo", "Lee Dong-wook"],
//             "actresses": ["Kim Go-eun"],
//             "story": "In his quest for a bride to break his immortal curse, Dokkaebi, a 939-year-old guardian of souls, meets a grim reaper and a sprightly student with a tragic past.",
//             "imageUrl": ""
//         },
//         {
//             "id": "46",
//             "title": "Defendant",
//             "releaseDate": "2017",
//             "duration": "18 eps",
//             "rating": "Not Rated",
//             "imdbRating": 8.0,
//             "metascore": null,
//             "votes": "2.3K",
//             "genre": ["Drama", "Thriller", "Mystery"],
//             "director": [],
//             "writers": [],
//             "actors": ["Ji Sung", "Uhm Ki-joon"],
//             "actresses": ["Seo Jung-yeon"],
//             "story": "A prosecutor has lost his memory and discovers that he is convicted on death row. He is now left with no option but to find the truth behind his condition and prove his innocence.",
//             "imageUrl": ""
//         },
//         {
//             "id": "47",
//             "title": "My Love from Another Star",
//             "releaseDate": "2013-2014",
//             "duration": "22 eps",
//             "rating": "Not Rated",
//             "imdbRating": 8.2,
//             "metascore": null,
//             "votes": "18K",
//             "genre": ["Drama", "Romance", "Fantasy"],
//             "director": [],
//             "writers": [],
//             "actors": ["Kim Soo-hyun", "Park Hae-jin"],
//             "actresses": ["Jun Ji-hyun"],
//             "story": "Do Min-Joon, an alien that came to our planet 400 years ago, will be able to return to his planet in 3 months, but when he meets famous actress Chun Song-Yi, all the centuries he spent distancing himself from humans come to an end.",
//             "imageUrl": ""
//         },
//         {
//             "id": "48",
//             "title": "Ghost",
//             "releaseDate": "2012",
//             "duration": "20 eps",
//             "rating": "Not Rated",
//             "imdbRating": 7.8,
//             "metascore": null,
//             "votes": "700",
//             "genre": ["Drama", "Crime", "Thriller"],
//             "director": [],
//             "writers": [],
//             "actors": ["Kim Yun-tae", "So Ji-seob"],
//             "actresses": ["Song Ha-yoon"],
//             "story": "Kim Woo Hyun is the only son of a high-ranking police officer. He graduates police academy with honors. After being assigned to the CID, he finds himself entrenched in a cat and mouse game with a faceless enemy in the cyber world.",
//             "imageUrl": ""
//         },
//         {
//             "id": "49",
//             "title": "Descendants of the Sun",
//             "releaseDate": "2016",
//             "duration": "19 eps",
//             "rating": "TV-14",
//             "imdbRating": 8.2,
//             "metascore": null,
//             "votes": "26K",
//             "genre": ["Drama", "Romance", "Action"],
//             "director": [],
//             "writers": [],
//             "actors": ["Song Joong-ki", "Jin Goo"],
//             "actresses": ["Song Hye-kyo"],
//             "story": "This drama tells of the love story that develops between a surgeon and a special forces officer.",
//             "imageUrl": ""
//         },
//         {
//             "id": "50",
//             "title": "Fight for My Way",
//             "releaseDate": "2017",
//             "duration": "16 eps",
//             "rating": "Not Rated",
//             "imdbRating": 8.1,
//             "metascore": null,
//             "votes": "11K",
//             "genre": ["Drama", "Romance", "Comedy"],
//             "director": [],
//             "writers": [],
//             "actors": ["Park Seo-joon", "Ahn Jae-hong"],
//             "actresses": ["Kim Ji-won"],
//             "story": "Ko Dong Man, a former taekwondo champion, and Choi Ae Ra, a receptionist, struggle to follow their dreams as life throws obstacles in their path.",
//             "imageUrl": ""
//         },
//         {
//             "id": "51",
//             "title": "It's Okay, That's Love",
//             "releaseDate": "2014",
//             "duration": "16 eps",
//             "rating": "TV-14",
//             "imdbRating": 8.3,
//             "metascore": null,
//             "votes": "5K",
//             "genre": ["Drama", "Romance", "Medical"],
//             "director": [],
//             "writers": [],
//             "actors": ["Sung Dong-il", "Lee Kwang-soo", "Jin Kyung"],
//             "actresses": [],
//             "story": "A love story between a psychiatrist named Ji Hae Soo and an author who had schizophrenia named Jang Jae Yeol.",
//             "imageUrl": ""
//         },
//         {
//             "id": "52",
//             "title": "49 Days",
//             "releaseDate": "2011",
//             "duration": "20 eps",
//             "rating": "Not Rated",
//             "imdbRating": 7.9,
//             "metascore": null,
//             "votes": "1.7K",
//             "genre": ["Drama", "Fantasy", "Romance"],
//             "director": [],
//             "writers": [],
//             "actors": ["Jo Hyeon-jae"],
//             "actresses": ["Lee Yo-won", "Nam Gyu-ri"],
//             "story": "After an accident shatters her storybook life, a comatose woman gets a second chance at life when a reaper from above intervenes, at a cost.",
//             "imageUrl": ""
//         },
//         {
//             "id": "53",
//             "title": "Familiar Wife",
//             "releaseDate": "2018",
//             "duration": "16 eps",
//             "rating": "Not Rated",
//             "imdbRating": 7.7,
//             "metascore": null,
//             "votes": "1.8K",
//             "genre": ["Drama", "Romance", "Fantasy"],
//             "director": [],
//             "writers": [],
//             "actors": ["Ji Sung"],
//             "actresses": ["Han Ji-min", "Kang Han-na"],
//             "story": "A married couple suddenly finds themselves living entirely different lives after their fates magically change through an unexpected incident.",
//             "imageUrl": ""
//         },
//         {
//             "id": "54",
//             "title": "SKY Castle",
//             "releaseDate": "2018-2019",
//             "duration": "20 eps",
//             "rating": "Not Rated",
//             "imdbRating": 8.5,
//             "metascore": null,
//             "votes": "4.9K",
//             "genre": ["Drama", "Comedy", "Family"],
//             "director": [],
//             "writers": [],
//             "actors": ["Jeong Jun-ho"],
//             "actresses": ["Yum Jung-ah", "Lee Tae-ran", "Kim Seo-hyeong", "Yun Se-ah", "Oh Na-ra"],
//             "story": "A satirical drama that closely looks at the materialistic desires of upper-class parents in South Korea and how they ruthlessly secure the successes of their families at the cost of destroying others' lives.",
//             "imageUrl": ""
//         },
//         {
//             "id": "55",
//             "title": "Memories of the Alhambra",
//             "releaseDate": "2018-2019",
//             "duration": "16 eps",
//             "rating": "TV-MA",
//             "imdbRating": 7.7,
//             "metascore": null,
//             "votes": "7.9K",
//             "genre": ["Drama", "Romance", "Sci-Fi"],
//             "director": [],
//             "writers": [],
//             "actors": ["Hyun Bin", "Min Jin-woong"],
//             "actresses": ["Park Shin-hye"],
//             "story": "After suffering a setback following a friend's betrayal Yoo Jin Woo travels to Spain on a business. There, he stays at an old hostel owned by a former classical guitarist Jung Hee Joo. The two get entangled in a mysterious incident.",
//             "imageUrl": ""
//         },
//         {
//             "id": "56",
//             "title": "My Secret Terrius",
//             "releaseDate": "2018",
//             "duration": "32 eps",
//             "rating": "TV-14",
//             "imdbRating": 7.6,
//             "metascore": null,
//             "votes": "1.9K",
//             "genre": ["Drama", "Romance", "Action"],
//             "director": [],
//             "writers": [],
//             "actors": ["So Ji-seob", "Son Ho-joon"],
//             "actresses": ["Jung In-sun", "Im She-mi"],
//             "story": "Go Ae Rin suddenly loses her husband. A mysterious man, Kim Bon, lives next door. Kim Bon is a legendary NIS agent. He helps Ae Rin uncover a conspiracy, which husband became involved with.",
//             "imageUrl": ""
//         },
//         {
//             "id": "57",
//             "title": "Hotel Del Luna",
//             "releaseDate": "2019",
//             "duration": "16 eps",
//             "rating": "Not Rated",
//             "imdbRating": 8.1,
//             "metascore": null,
//             "votes": "17K",
//             "genre": ["Drama", "Fantasy", "Romance"],
//             "director": [],
//             "writers": [],
//             "actors": ["Yeo Jin-goo", "Shin Jeong-geun", "Pyo Ji-hoon"],
//             "actresses": ["IU", "Bae Hae-sun", "Kang Mi-na"],
//             "story": "When he's invited to manage a hotel for dead souls, an elite hotelier gets to know the establishment's ancient owner and her strange world.",
//             "imageUrl": ""
//         },
//         {
//             "id": "58",
//             "title": "Crash Landing on You",
//             "releaseDate": "2019-2020",
//             "duration": "19 eps",
//             "rating": "TV-14",
//             "imdbRating": 8.7,
//             "metascore": null,
//             "votes": "53K",
//             "genre": ["Drama", "Romance", "Comedy"],
//             "director": [],
//             "writers": [],
//             "actors": ["Hyun Bin"],
//             "actresses": ["Son Ye-jin", "Seo Ji-hye"],
//             "story": "The absolute top secret love story of a chaebol heiress who made an emergency landing in North Korea because of a paragliding accident and a North Korean special officer who falls in love with her and who is hiding and protecting her.",
//             "imageUrl": ""
//         },
//         {
//             "id": "59",
//             "title": "Itaewon Class",
//             "releaseDate": "2020",
//             "duration": "16 eps",
//             "rating": "TV-MA",
//             "imdbRating": 8.1,
//             "metascore": null,
//             "votes": "23K",
//             "genre": ["Drama", "Romance", "Business"],
//             "director": [],
//             "writers": ["Gwang Jin"],
//             "actors": ["Park Seo-joon", "Kim Dong-Hee", "Chris Lyon", "Ryu Kyung-soo", "Yoo Jae-myung"],
//             "actresses": ["Kim Da-mi", "Lee Joo-young"],
//             "story": "An ex-con opens a street bar in Itaewon, while also seeking revenge on the family who was responsible for his father's death.",
//             "imageUrl": ""
//         },
//         {
//             "id": "60",
//             "title": "Prison Playbook",
//             "releaseDate": "2017-2018",
//             "duration": "16 eps",
//             "rating": "Not Rated",
//             "imdbRating": 8.4,
//             "metascore": null,
//             "votes": "5.7K",
//             "genre": ["Drama", "Comedy", "Sports"],
//             "director": [],
//             "writers": [],
//             "actors": [],
//             "actresses": [],
//             "story": "Baseball pitcher Kim Je-hyeok becomes a convict overnight after being sent to prison for defending his sister from a sexual assault, days before he was due to fly to the US to join the Boston Red Sox.",
//             "imageUrl": ""
//         }
//     ]

//     tempKdrama.forEach((item) => {
//         let newKdrama = new Kdrama({

//             id: item.id,
//             title: item.title,
//             releaseDate: item.releaseDate,
//             duration: item.duration,
//             rating: item.rating,
//             imdbRating: item.imdbRating,
//             metascore: item.metascore,
//             votes: item.votes,
//             genre: item.genre,
//             director: item.director,
//             writers: item.writers,
//             actors: item.actors,
//             actresses: item.actresses,

//             story: item.story,
//             imageUrl: item.imageUrl

//         });
//         newKdrama.save();
//     });
//     res.send("Finis");

// });

app.get("/addKdrama", async(req, res) => {
    try {
        const Kdramas = await Kdrama.find();
        res.json(Kdramas);
    } catch (err) {
        res.status(500).json({ error: "Error fetching movies" });
    }
});

//Movies nevbar




app.get("/addMovieData", async(req, res) => {
    try {
        const Movies = await MovieData.find();
        res.json(Movies);
    } catch (err) {
        res.status(500).json({ error: "Error fetching movies" });
    }
});







//navbar webseries 

app.get("/addWebSeriesData", async(req, res) => {
    try {
        const Series = await SeriesData.find();
        res.json(Series);
    } catch (err) {
        res.status(500).json({ error: "Error fetching movies" });
    }
});









// navbar anime 
//     const tempAnimeData = [{
//             id: "1",
//             title: "Demon Slayer: Kimetsu no Yaiba",
//             releaseDate: "2019–2024",
//             duration: "TV Series - 44 episodes",
//             rating: "TV-MA",
//             imdbRating: 8.6,
//             metascore: null,
//             votes: "201K",
//             genre: ["Animation", "Action", "Adventure", "Drama", "Fantasy", "Supernatural"],
//             director: ["Haruo Sotozaki"],
//             writers: ["Koyoharu Gotouge"],
//             actors: ["David Matranga", "Yûki Kaji"],
//             actresses: ["Satomi Sato", "Hiro Shimono"],
//             story: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
//             imageUrl: "https://m.media-amazon.com/images/M/MV5BNDUyZTJmODQtZmRkMS00YjJiLTgxZmUtMjQ5OGNjNzkyM2Y5XkEyXkFqcGc@._V1_.jpg"
//         },
//         {
//             id: "2",
//             title: "Attack on Titan",
//             releaseDate: "2013–2023",
//             duration: "TV Series - 75 episodes",
//             rating: "TV-MA",
//             imdbRating: 9.1,
//             metascore: null,
//             votes: "646K",
//             genre: ["Animation", "Action", "Drama", "Fantasy", "Horror"],
//             director: ["Tetsuro Araki"],
//             writers: ["Hajime Isayama"],
//             actors: ["David Matranga", "Yûki Kaji"],
//             actresses: ["Marina Inoue", "Yui Ishikawa"],
//             story: "After his hometown is destroyed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
//             imageUrl: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GR751KNZY-backdrop_wide"
//         },
//         {
//             id: "3",
//             title: "One Piece",
//             releaseDate: "1999–",
//             duration: "TV Series - 1000+ episodes",
//             rating: "TV-14",
//             imdbRating: 9.0,
//             metascore: null,
//             votes: "321K",
//             genre: ["Animation", "Action", "Adventure", "Comedy", "Drama"],
//             director: ["Eiichiro Oda"],
//             writers: ["Eiichiro Oda"],
//             actors: ["Hiroaki Hirata", "Kazuya Nakai", "Kappei Yamaguchi"],
//             actresses: ["Akemi Okamura", "Mayumi Tanaka"],
//             story: "Rubber-bodied dreamer Monkey D. Luffy gathers an eclectic pirate crew and braves the perilous Grand Line, battling tyrants and monsters to claim the legendary 'One Piece' and become King of the Pirates.",
//             imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRY9wP9-nGuWqtw25PvGoi0V0drZ9dlRavJ5b3zh1PQq-gdyNSMrszGWavviaB9QibG4cTZbCLygEj4mIdyHZtcyha2OngNZQ1Y2jOC4lM"
//         },
//         {
//             id: "4",
//             title: "Dandadan",
//             releaseDate: "2024–",
//             duration: "TV Series - 12 episodes",
//             rating: "TV-14",
//             imdbRating: 8.3,
//             metascore: null,
//             votes: "43K",
//             genre: ["Animation", "Action", "Comedy", "Supernatural"],
//             director: ["Fuga Yamashiro"],
//             writers: ["Yukinobu Tatsu"],
//             actors: ["Kazuya Nakai", "Kaito Ishikawa", "Natsuki Hanae"],
//             actresses: ["Shion Wakayama", "Nana Mizuki", "Ayane Sakura"],
//             story: "When Momo and Okarun's beliefs clash, they're thrown into a world of ghosts, aliens and awakened powers.",
//             imageUrl: "https://m.media-amazon.com/images/M/MV5BYWFhOWMxNTYtZThiMi00ZmQ5LTlmODktN2QwNzUyZjMyZGQzXkEyXkFqcGc@._V1_.jpg"
//         },
//         {
//             id: "5",
//             title: "Jujutsu Kaisen",
//             releaseDate: "2020–",
//             duration: "TV Series - 24 episodes",
//             rating: "TV-MA",
//             imdbRating: 8.5,
//             metascore: null,
//             votes: "166K",
//             genre: ["Animation", "Action", "Drama", "Fantasy", "Supernatural"],
//             director: ["Sunghoo Park"],
//             writers: ["Gege Akutami"],
//             actors: ["Yûichi Nakamura", "Yuma Uchida", "Jun'ya Enoki"],
//             actresses: ["Asami Seto"],
//             story: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
//             imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRc99y4IUxAcCqdEB4acfW0A77hpqQ9nbl79RTrEgHfUXhKDu5ShdgNbHUiSTaFYxd9pJRPrHj1SuWYsgpbRciGL2LcWYnhm_VmNKH3FCg"
//         },
//         {
//             id: "6",
//             title: "Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train",
//             releaseDate: "2020",
//             duration: "1h 57m",
//             rating: "TV-MA",
//             imdbRating: 8.2,
//             metascore: 72,
//             votes: "90K",
//             genre: ["Animation", "Action", "Adventure", "Drama", "Fantasy"],
//             director: ["Haruo Sotozaki"],
//             writers: ["Koyoharu Gotouge"],
//             actors: ["Hiro Shimono", "Daisuke Hirakawa", "Satoshi Hino", "Yoshitsugu Matsuoka", "Natsuki Hanae"],
//             actresses: ["Akari Kitô"],
//             story: "After his family was brutally murdered and his sister turned into a demon, Tanjiro Kamado's journey as a demon slayer began. Tanjiro and his comrades embark on a new mission aboard the Mugen Train, on track to despair.",
//             imageUrl: "https://m.media-amazon.com/images/M/MV5BOWRhMzU3YWEtYTlkMC00ZmUwLTk4ZmMtMDE2YTFlNDFiNjhmXkEyXkFqcGc@._V1_.jpg"
//         },
//         {
//             id: "7",
//             title: "Dr. Stone",
//             releaseDate: "2019–",
//             duration: "TV Series - 58 episodes",
//             rating: "TV-14",
//             imdbRating: 8.1,
//             metascore: null,
//             votes: "38K",
//             genre: ["Animation", "Adventure", "Comedy", "Sci-Fi"],
//             director: ["Shinya Iino"],
//             writers: ["Riichiro Inagaki"],
//             actors: ["Mugihito", "Gen Satô", "Aaron Dismuke", "Tomoaki Maeno", "Kengo Kawanishi", "Yûsuke Kobayashi", "Ayumu Murase"],
//             actresses: ["Manami Numakura", "Felecia Angelle", "Reina Ueda", "Karin Takahashi"],
//             story: "High schooler Taiju awakens from petrification millennia after a blinding light turned humanity to stone. He finds his scientific genius friend Senku working on a plan to rebuild civilization using science.",
//             imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSF5V54KUp_6_G0MluhB9B5SCrsfPrbcyoAwavfsfkH_mTbwyUO9m1g3fIhLmR0CR7usgnjgzdtfbRSVyFAWiRF1wiKDi-9eLBhjjEVSg"
//         },
//         {
//             id: "8",
//             title: "Naruto: Shippuden",
//             releaseDate: "2007–2017",
//             duration: "TV Series - 500 episodes",
//             rating: "TV-PG",
//             imdbRating: 8.7,
//             metascore: null,
//             votes: "206K",
//             genre: ["Animation", "Action", "Adventure", "Drama", "Fantasy"],
//             director: ["Hayato Date"],
//             writers: ["Masashi Kishimoto"],
//             actors: ["Junko Takeuchi", "Noriaki Sugiyama"],
//             actresses: ["Chie Nakamura"],
//             story: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
//             imageUrl: "https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@._V1_.jpg"
//         },
//         {
//             id: "9",
//             title: "Death Note",
//             releaseDate: "2006–2007",
//             duration: "TV Series - 37 episodes",
//             rating: "TV-14",
//             imdbRating: 8.9,
//             metascore: null,
//             votes: "443K",
//             genre: ["Animation", "Crime", "Drama", "Fantasy", "Supernatural", "Thriller"],
//             director: ["Tetsuro Araki"],
//             writers: ["Tsugumi Ohba"],
//             actors: ["Kappei Yamaguchi", "Shidô Nakamura", "Mamoru Miyano"],
//             actresses: ["Aya Hirano"],
//             story: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
//             imageUrl: "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_.jpg"
//         },
//         {
//             id: "10",
//             title: "Fullmetal Alchemist: Brotherhood",
//             releaseDate: "2009–2010",
//             duration: "TV Series - 64 episodes",
//             rating: "TV-14",
//             imdbRating: 9.1,
//             metascore: null,
//             votes: "230K",
//             genre: ["Animation", "Action", "Adventure", "Drama", "Fantasy"],
//             director: ["Yasuhiro Irie"],
//             writers: ["Hiromu Arakawa"],
//             actors: ["Romi Park"],
//             actresses: ["Rie Kugimiya"],
//             story: "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
//             imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4v2ZaFCnAqElEqLmYdb8w_m8ZWmIKkFUU4OCmw2i5Dm67KeuhvzrAxOYs7lE9rLOZ6vcAl8SsxJoHup4v_tp9CJW2aBndlkG7XpCNlAo"
//         },
//         {
//             id: "11",
//             title: "Vinland Saga",
//             releaseDate: "2019–2023",
//             duration: "TV Series - 48 episodes",
//             rating: "TV-MA",
//             imdbRating: 8.8,
//             metascore: null,
//             votes: "111K",
//             genre: ["Animation", "Action", "Adventure", "Drama", "History"],
//             director: ["Shuuhei Yabuta"],
//             writers: ["Makoto Yukimura"],
//             actors: ["Akio Ôtsuka", "Naoya Uchida", "Kenshô Ono", "Ken'ichirô Matsuda", "Yûto Uemura", "Aleks Le"],
//             actresses: [],
//             story: "Following a tragedy, Thorfinn embarks on a journey with the man responsible for it to take his life in a duel as a true and honorable warrior to pay homage.",
//             imageUrl: "https://m.media-amazon.com/images/M/MV5BNDA3MGNmZTEtMzFiMy00ZmViLThhNmQtMjQ4ZDc5MDEyN2U1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
//         },
//         {
//             id: "12",
//             title: "Hunter x Hunter",
//             releaseDate: "2011–2014",
//             duration: "TV Series - 148 episodes",
//             rating: "TV-14",
//             imdbRating: 9.0,
//             metascore: null,
//             votes: "174K",
//             genre: ["Animation", "Action", "Adventure", "Fantasy"],
//             director: ["Hiroshi Kôjina"],
//             writers: ["Yoshihiro Togashi"],
//             actors: ["Keiji Fujiwara"],
//             actresses: ["Miyuki Sawashiro", "Mariya Ise", "Megumi Han"],
//             story: "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks out his father, who left him when he was younger.",
//             imageUrl: "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg"
//         },
//         {
//             id: "13",
//             title: "My Hero Academia",
//             releaseDate: "2016–",
//             duration: "TV Series - 138+ episodes",
//             rating: "TV-14",
//             imdbRating: 8.2,
//             metascore: null,
//             votes: "96K",
//             genre: ["Animation", "Action", "Adventure", "Comedy", "Drama", "Fantasy"],
//             director: ["Kenji Nagasaki"],
//             writers: ["Kōhei Horikoshi"],
//             actors: ["Daiki Yamashita", "Nobuhiko Okamoto"],
//             actresses: ["Ayane Sakura"],
//             story: "A superhero-admiring boy enrolls in a prestigious hero academy and learns what it really means to be a hero, after the strongest superhero grants him his own powers.",
//             imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTE-WkWyWtoD29DjuFzqOn0ojOg4lfaputZBkwfLE5Am5sQXvxoHGZxxCvGdhLv7-8-F_JmvriWTADQoNLQUo4FKQo01Vr6ob0ZdWGyhLg"
//         },
//         {
//             id: "14",
//             title: "Naruto",
//             releaseDate: "2002–2007",
//             duration: "TV Series - 220 episodes",
//             rating: "TV-PG",
//             imdbRating: 8.4,
//             metascore: null,
//             votes: "154K",
//             genre: ["Animation", "Action", "Adventure", "Comedy", "Drama", "Fantasy"],
//             director: ["Hayato Date"],
//             writers: ["Masashi Kishimoto"],
//             actors: ["Junko Takeuchi", "Noriaki Sugiyama"],
//             actresses: ["Chie Nakamura"],
//             story: "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",
//             imageUrl: "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_.jpg"
//         },
//         {
//             id: "15",
//             title: "Kill Bill: Vol. 1",
//             releaseDate: "2003",
//             duration: "1h 51m",
//             rating: "R",
//             imdbRating: 8.2,
//             metascore: 69,
//             votes: "1.3M",
//             genre: ["Action", "Crime", "Thriller"],
//             director: ["Quentin Tarantino"],
//             writers: ["Quentin Tarantino"],
//             actors: ["David Carradine"],
//             actresses: ["Uma Thurman"],
//             story: "After waking from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
//             imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRJR8UXLyB7LCltvAPwMxjO5V5U55sl0TQDqMNx4N4y8dS9n-fcvNx3a0Vhk8hCAiLKpeb81FZt0cyV1jp9sOsrhUcM4tM7gMsRNpbsOw"
//         },
//         {
//             id: "16",
//             title: "Your Name.",
//             releaseDate: "2016",
//             duration: "1h 46m",
//             rating: "PG",
//             imdbRating: 8.4,
//             metascore: 81,
//             votes: "370K",
//             genre: ["Animation", "Drama", "Fantasy", "Romance"],
//             director: ["Makoto Shinkai"],
//             writers: ["Makoto Shinkai"],
//             actors: ["Ryunosuke Kamiki"],
//             actresses: ["Mone Kamishiraishi"],
//             story: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
//             imageUrl: "https://example.com/your-name.jpg"
//         },
//         {
//             id: "17",
//             title: "Frieren: Beyond Journey's End",
//             releaseDate: "2023–",
//             duration: "TV Series - 28 episodes",
//             rating: "TV-14",
//             imdbRating: 8.9,
//             metascore: null,
//             votes: "52K",
//             genre: ["Animation", "Adventure", "Drama", "Fantasy"],
//             director: ["Keiichiro Saito"],
//             writers: ["Kanehito Yamada"],
//             actors: [],
//             actresses: ["Atsumi Tanezaki"],
//             story: "Elf mage Frieren and her fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the people around her?",
//             imageUrl: "https://example.com/frieren.jpg"
//         },
//         {
//             id: "18",
//             title: "Chainsaw Man",
//             releaseDate: "2022",
//             duration: "TV Series - 12 episodes",
//             rating: "TV-MA",
//             imdbRating: 8.3,
//             metascore: null,
//             votes: "82K",
//             genre: ["Animation", "Action", "Drama", "Horror", "Supernatural"],
//             director: ["Ryû Nakayama"],
//             writers: ["Tatsuki Fujimoto"],
//             actors: ["Kikunosuke Toya"],
//             actresses: ["Ai Fairouz"],
//             story: "Following a betrayal, a young man left for dead is reborn as a powerful devil-human hybrid after merging with his pet devil and is soon enlisted into an organization dedicated to hunting devils.",
//             imageUrl: "https://example.com/chainsaw-man.jpg"
//         },
//         {
//             id: "19",
//             title: "JoJo's Bizarre Adventure",
//             releaseDate: "2012–",
//             duration: "TV Series - 152+ episodes",
//             rating: "TV-14",
//             imdbRating: 8.5,
//             metascore: null,
//             votes: "47K",
//             genre: ["Animation", "Action", "Adventure", "Drama", "Fantasy"],
//             director: ["Naokatsu Tsuda"],
//             writers: ["Hirohiko Araki"],
//             actors: ["Unshô Ishizuka", "Takehito Koyasu", "Tomokazu Sugita", "Daisuke Ono", "Kenta Miyake", "Daisuke Hirakawa", "Kazuyuki Okitsu", "Fuminori Komatsu"],
//             actresses: [],
//             story: "The story of the Joestar family, who are possessed with intense psychic strength, and the adventures each member encounters throughout their lives.",
//             imageUrl: "https://example.com/jojo-bizarre-adventure.jpg"
//         },
//         {
//             id: "20",
//             title: "One Punch Man",
//             releaseDate: "2015–",
//             duration: "TV Series - 24 episodes",
//             rating: "TV-PG",
//             imdbRating: 8.6,
//             metascore: null,
//             votes: "209K",
//             genre: ["Animation", "Action", "Comedy", "Superhero"],
//             director: ["Shingo Natsume"],
//             writers: ["ONE"],
//             actors: ["Makoto Furukawa"],
//             actresses: ["Yûki Kaji"],
//             story: "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.",
//             imageUrl: "https://example.com/one-punch-man.jpg"
//         },
//         {
//             id: "21",
//             title: "Bleach",
//             releaseDate: "2004–2023",
//             duration: "TV Series - 366 episodes",
//             rating: "TV-14",
//             imdbRating: 8.2,
//             metascore: null,
//             votes: "85K",
//             genre: ["Animation", "Action", "Adventure", "Fantasy", "Supernatural"],
//             director: ["Noriyuki Abe"],
//             writers: ["Tite Kubo"],
//             actors: ["Masakazu Morita"],
//             actresses: ["Fumiko Orikasa"],
//             story: "High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from 'Hollows'.",
//             imageUrl: "https://example.com/bleach.jpg"
//         },
//         {
//             id: "22",
//             title: "Monster",
//             releaseDate: "2004–2005",
//             duration: "TV Series - 74 episodes",
//             rating: "TV-14",
//             imdbRating: 8.7,
//             metascore: null,
//             votes: "62K",
//             genre: ["Animation", "Crime", "Drama", "Mystery", "Thriller"],
//             director: ["Masayuki Kojima"],
//             writers: ["Naoki Urasawa"],
//             actors: ["Nozomu Sasaki", "Hidenobu Kiuchi"],
//             actresses: [],
//             story: "Tenma, a brilliant neurosurgeon with a promising future, risks his career to save the life of a critically wounded young boy. The boy, now a charismatic young man, reappears 9 years later in the midst of a string of unusual serial murders.",
//             imageUrl: "https://example.com/monster.jpg"
//         },
//         {
//             id: "23",
//             title: "Bleach: Thousand-Year Blood War",
//             releaseDate: "2022–",
//             duration: "TV Series - 26+ episodes",
//             rating: "TV-MA",
//             imdbRating: 9.0,
//             metascore: null,
//             votes: "66K",
//             genre: ["Animation", "Action", "Adventure", "Fantasy", "Supernatural"],
//             director: ["Tomohisa Taguchi"],
//             writers: ["Tite Kubo"],
//             actors: ["Kentarô Itô", "Masakazu Morita", "Takayuki Sugô", "Noriaki Sugiyama", "Tite Kubo", "Hiroki Yasumoto"],
//             actresses: ["Fumiko Orikasa", "Yuki Matsuoka"],
//             story: "The peace is suddenly broken when warning sirens blare through the Soul Society. Residents are disappearing without a trace and nobody knows who's behind it. Meanwhile, a darkness is approaching Ichigo and his friends in Karakura Town.",
//             imageUrl: "https://example.com/bleach-tybw.jpg"
//         },
//         {
//             id: "24",
//             title: "Cyberpunk: Edgerunners",
//             releaseDate: "2022",
//             duration: "TV Series - 10 episodes",
//             rating: "TV-MA",
//             imdbRating: 8.3,
//             metascore: null,
//             votes: "112K",
//             genre: ["Animation", "Action", "Crime", "Drama", "Sci-Fi"],
//             director: ["Hiroyuki Imaishi"],
//             writers: ["Bartosz Sztybor"],
//             actors: ["Kenn"],
//             actresses: ["Aoi Yûki"],
//             story: "A Street Kid trying to survive in a technology and body modification-obsessed city of the future. Having everything to lose, he chooses to stay alive by becoming an Edgerunner, a Mercenary outlaw also known as a Cyberpunk.",
//             imageUrl: "https://example.com/cyberpunk-edgerunners.jpg"
//         },
//         {
//             id: "25",
//             title: "Perfect Blue",
//             releaseDate: "1997",
//             duration: "1h 21m",
//             rating: "R",
//             imdbRating: 8.0,
//             metascore: 67,
//             votes: "112K",
//             genre: ["Animation", "Crime", "Drama", "Mystery", "Thriller"],
//             director: ["Satoshi Kon"],
//             writers: ["Yoshikazu Takeuchi"],
//             actors: [],
//             actresses: ["Junko Iwao"],
//             story: "A pop singer gives up her career to become an actress, but she slowly goes insane when she starts being stalked by an obsessed fan and what seems to be a ghost of her past.",
//             imageUrl: "https://example.com/perfect-blue.jpg"
//         },
//         {
//             id: "26",
//             title: "My Dress-Up Darling",
//             releaseDate: "2022",
//             duration: "TV Mini Series - 12 episodes",
//             rating: "TV-14",
//             imdbRating: 7.9,
//             metascore: null,
//             votes: "22K",
//             genre: ["Animation", "Comedy", "Romance"],
//             director: ["Keisuke Shinohara"],
//             writers: ["Shin Fukuda"],
//             actors: ["Shôya Ishige"],
//             actresses: ["Hina Suguta"],
//             story: "A quiet loner and the popular girl at school find common ground, making their cosplay dreams come true.",
//             imageUrl: "https://example.com/my-dress-up-darling.jpg"
//         },
//         {
//             id: "27",
//             title: "Berserk",
//             releaseDate: "1997–1998",
//             duration: "TV Series - 25 episodes",
//             rating: "TV-MA",
//             imdbRating: 8.7,
//             metascore: null,
//             votes: "70K",
//             genre: ["Animation", "Action", "Adventure", "Drama", "Fantasy", "Horror"],
//             director: ["Naohito Takahashi"],
//             writers: ["Kentaro Miura"],
//             actors: ["Nobutoshi Canna", "Toshiyuki Morikawa", "Kenji Utsumi"],
//             actresses: ["Yûko Miyamura"],
//             story: "Guts, a wandering mercenary, joins the Band of the Hawk after being defeated in a duel by Griffith, the group's leader and founder. Together, they dominate every battle, but something menacing lurks in the shadows.",
//             imageUrl: "https://example.com/berserk.jpg"
//         },
//         {
//             id: "28",
//             title: "Code Geass",
//             releaseDate: "2006–2008",
//             duration: "TV Series - 50 episodes",
//             rating: "TV-14",
//             imdbRating: 8.7,
//             metascore: null,
//             votes: "95K",
//             genre: ["Animation", "Action", "Drama", "Sci-Fi"],
//             director: ["Gorō Taniguchi"],
//             writers: ["Ichirō Ōkouchi"],
//             actors: ["Jun Fukuyama"],
//             actresses: ["Yukana"],
//             story: "After being given a mysterious power to control others, an outcast prince becomes the masked leader of the rebellion against an all-powerful empire.",
//             imageUrl: "https://example.com/code-geass.jpg"
//         },
//         {
//             id: "29",
//             title: "The Apothecary Diaries",
//             releaseDate: "2023–",
//             duration: "TV Series - 24 episodes",
//             rating: "TV-14",
//             imdbRating: 8.6,
//             metascore: null,
//             votes: "18K",
//             genre: ["Animation", "Drama", "Historical", "Mystery"],
//             director: ["Norihiro Naganuma"],
//             writers: ["Natsu Hyuuga"],
//             actors: ["Takeo Otsuka"],
//             actresses: ["Aoi Yûki"],
//             story: "A young maiden is kidnapped and sold into servitude at the emperor's palace, where she secretly employs her pharmacist skills with the help of the head eunuch to unravel medical mysteries in the inner court.",
//             imageUrl: "https://example.com/apothecary-diaries.jpg"
//         },
//         {
//             id: "30",
//             title: "Re: Zero - Starting Life in Another World",
//             releaseDate: "2016–",
//             duration: "TV Series - 50+ episodes",
//             rating: "TV-14",
//             imdbRating: 8.1,
//             metascore: null,
//             votes: "36K",
//             genre: ["Animation", "Adventure", "Drama", "Fantasy", "Thriller"],
//             director: ["Masaharu Watanabe"],
//             writers: ["Tappei Nagatsuki"],
//             actors: ["Yûsuke Kobayashi"],
//             actresses: ["Rie Takahashi"],
//             story: "After being suddenly transported to another world, Subaru Natsuki and his new female partner are brutally murdered. However, Subaru awakens to a familiar scene, meeting the same girl again. The day begins to mysteriously repeat itself.",
//             imageUrl: "https://example.com/re-zero.jpg"
//         },
//         {
//             id: "31",
//             title: "Cowboy Bebop",
//             releaseDate: "1998–1999",
//             duration: "TV Series - 26 episodes",
//             rating: "TV-14",
//             imdbRating: 8.9,
//             metascore: null,
//             votes: "159K",
//             genre: ["Animation", "Action", "Adventure", "Drama", "Sci-Fi"],
//             director: ["Shinichirō Watanabe"],
//             writers: ["Keiko Nobumoto"],
//             actors: ["Unshô Ishizuka", "Kôichi Yamadera"],
//             actresses: ["Megumi Hayashibara", "Aoi Tada"],
//             story: "The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners.",
//             imageUrl: "https://example.com/cowboy-bebop.jpg"
//         },
//         {
//             id: "32",
//             title: "Kill Bill: Vol. 2",
//             releaseDate: "2004",
//             duration: "2h 17m",
//             rating: "R",
//             imdbRating: 8.0,
//             metascore: 83,
//             votes: "847K",
//             genre: ["Action", "Crime", "Thriller"],
//             director: ["Quentin Tarantino"],
//             writers: ["Quentin Tarantino"],
//             actors: ["David Carradine"],
//             actresses: ["Uma Thurman"],
//             story: "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.",
//             imageUrl: "https://example.com/kill-bill-vol2.jpg"
//         },
//         {
//             id: "33",
//             title: "A Silent Voice: The Movie",
//             releaseDate: "2016",
//             duration: "2h 10m",
//             rating: "PG-13",
//             imdbRating: 8.1,
//             metascore: 78,
//             votes: "128K",
//             genre: ["Animation", "Drama"],
//             director: ["Naoko Yamada"],
//             writers: ["Yoshitoki Oima"],
//             actors: ["Miyu Irino"],
//             actresses: ["Saori Hayami"],
//             story: "A deaf girl, Shoko, is bullied by the popular Shoya. As Shoya continues to bully Shoko, the class turns its back on him. Shoko transfers and Shoya grows up as an outcast. Alone and depressed, the regretful Shoya finds Shoko to make amends.",
//             imageUrl: "https://example.com/a-silent-voice.jpg"
//         },
//         {
//             id: "34",
//             title: "Dragon Ball Z",
//             releaseDate: "1996–2003",
//             duration: "TV Series - 291 episodes",
//             rating: "TV-PG",
//             imdbRating: 8.8,
//             metascore: null,
//             votes: "167K",
//             genre: ["Animation", "Action", "Adventure", "Fantasy"],
//             director: ["Daisuke Nishio"],
//             writers: ["Akira Toriyama"],
//             actors: ["Masako Nozawa", "Ryô Horikawa"],
//             actresses: [],
//             story: "With the help of the powerful Dragonballs, a team of fighters led by the saiyan warrior Goku defend the planet earth from extraterrestrial enemies.",
//             imageUrl: "https://example.com/dragon-ball-z.jpg"
//         },
//         {
//             id: "35",
//             title: "Spy x Family",
//             releaseDate: "2022–",
//             duration: "TV Series - 25+ episodes",
//             rating: "TV-14",
//             imdbRating: 8.3,
//             metascore: null,
//             votes: "54K",
//             genre: ["Animation", "Action", "Comedy", "Family"],
//             director: ["Kazuhiro Furuhashi"],
//             writers: ["Tatsuya Endo"],
//             actors: ["Takuya Eguchi"],
//             actresses: ["Saori Hayami", "Atsumi Tanezaki"],
//             story: "A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together.",
//             imageUrl: "https://example.com/spy-x-family.jpg"
//         },
//         {
//             id: "36",
//             title: "Gintama",
//             releaseDate: "2005–2021",
//             duration: "TV Series - 367 episodes",
//             rating: "TV-14",
//             imdbRating: 8.7,
//             metascore: null,
//             votes: "19K",
//             genre: ["Animation", "Action", "Comedy", "Drama", "Sci-Fi"],
//             director: ["Shinji Takamatsu"],
//             writers: ["Hideaki Sorachi"],
//             actors: ["Tomokazu Sugita"],
//             actresses: ["Rie Kugimiya"],
//             story: "In an era where aliens have invaded and taken over feudal Tokyo, an unemployed samurai finds work however he can.",
//             imageUrl: "https://example.com/gintama.jpg"
//         },
//         {
//             id: "37",
//             title: "Steins;Gate",
//             releaseDate: "2011–2015",
//             duration: "TV Series - 24 episodes",
//             rating: "TV-14",
//             imdbRating: 8.8,
//             metascore: null,
//             votes: "86K",
//             genre: ["Animation", "Drama", "Sci-Fi", "Thriller"],
//             director: ["Hiroshi Hamasaki"],
//             writers: ["5pb.", "Nitroplus"],
//             actors: ["Mamoru Miyano"],
//             actresses: ["Asami Imai"],
//             story: "After discovering time travel, a university student and his colleagues must use their knowledge of it to stop an evil organization and their diabolical plans.",
//             imageUrl: "https://example.com/steins-gate.jpg"
//         },
//         {
//             id: "38",
//             title: "Call of the Night",
//             releaseDate: "2022–2025",
//             duration: "TV Series - 13 episodes",
//             rating: "TV-14",
//             imdbRating: 7.5,
//             metascore: null,
//             votes: "5.6K",
//             genre: ["Animation", "Comedy", "Romance", "Supernatural"],
//             director: ["Tetsuya Miyanishi"],
//             writers: ["Kotoyama"],
//             actors: ["Gen Satô"],
//             actresses: ["Sora Amamiya"],
//             story: "Ko, a human boy, falls in love with Nanakusa, a vampire girl, and wants to become a vampire too, but Nanakusa invites him to her abandoned building just to taste the sweet blood from her neck.",
//             imageUrl: "https://example.com/call-of-the-night.jpg"
//         },
//         {
//             id: "39",
//             title: "High School DxD",
//             releaseDate: "2012–2018",
//             duration: "TV Series - 48 episodes",
//             rating: "TV-MA",
//             imdbRating: 7.5,
//             metascore: null,
//             votes: "16K",
//             genre: ["Animation", "Action", "Comedy", "Ecchi", "Fantasy"],
//             director: ["Tetsuya Yanagisawa"],
//             writers: ["Ichiei Ishibumi"],
//             actors: ["Yûki Kaji"],
//             actresses: ["Yôko Hikasa"],
//             story: "After being killed on his first date, idiotic and perverted Issei Hyodo is resurrected as a demon by Rias Gremory only to be recruited into her club of high-class devils.",
//             imageUrl: "https://example.com/high-school-dxd.jpg"
//         },
//         {
//             id: "40",
//             title: "Mob Psycho 100",
//             releaseDate: "2016–2022",
//             duration: "TV Series - 37 episodes",
//             rating: "TV-14",
//             imdbRating: 8.5,
//             metascore: null,
//             votes: "59K",
//             genre: ["Animation", "Action", "Comedy", "Supernatural"],
//             director: ["Yuzuru Tachikawa"],
//             writers: ["ONE"],
//             actors: ["Takahiro Sakurai", "Akio Ôtsuka", "Miyu Irino", "Setsuo Ito"],
//             actresses: [],
//             story: "A psychic middle school boy tries to live a normal life and keep his growing powers under control, even though he constantly gets into trouble.",
//             imageUrl: "https://example.com/mob-psycho-100.jpg"
//         },
//         {
//             id: "41",
//             title: "Pokémon",
//             releaseDate: "1997–2023",
//             duration: "TV Series - 1200+ episodes",
//             rating: "TV-14",
//             imdbRating: 7.6,
//             metascore: null,
//             votes: "53K",
//             genre: ["Animation", "Action", "Adventure", "Comedy", "Family", "Fantasy"],
//             director: ["Kunihiko Yuyama"],
//             writers: ["Satoshi Tajiri"],
//             actors: ["Ikue Ôtani"],
//             actresses: ["Rica Matsumoto"],
//             story: "On his 10th birthday, Ash starts his Pokémon journey with an unexpected Pikachu. He faces tough Gym battles but finds support in Brock, Misty, and new Pokémon companions Bulbasaur, Squirtle, and Charmander.",
//             imageUrl: "https://example.com/pokemon.jpg"
//         },
//         {
//             id: "42",
//             title: "Ghost in the Shell",
//             releaseDate: "1995",
//             duration: "1h 23m",
//             rating: "TV-MA",
//             imdbRating: 7.9,
//             metascore: 76,
//             votes: "168K",
//             genre: ["Animation", "Action", "Crime", "Drama", "Sci-Fi", "Thriller"],
//             director: ["Mamoru Oshii"],
//             writers: ["Masamune Shirow"],
//             actors: ["Kôichi Yamadera"],
//             actresses: ["Atsuko Tanaka"],
//             story: "A cyborg policewoman and her partner hunt a mysterious and powerful hacker called the Puppet Master.",
//             imageUrl: "https://example.com/ghost-in-the-shell.jpg"
//         },
//         {
//             id: "43",
//             title: "Paprika",
//             releaseDate: "2006",
//             duration: "1h 30m",
//             rating: "R",
//             imdbRating: 7.7,
//             metascore: 81,
//             votes: "107K",
//             genre: ["Animation", "Drama", "Fantasy", "Mystery", "Sci-Fi", "Thriller"],
//             director: ["Satoshi Kon"],
//             writers: ["Yasutaka Tsutsui"],
//             actors: ["Akio Ôtsuka"],
//             actresses: ["Megumi Hayashibara"],
//             story: "When a machine that allows therapists to enter their patients' dreams is stolen, all hell breaks loose. Only a young female therapist, Paprika, can stop it.",
//             imageUrl: "https://example.com/paprika.jpg"
//         },
//         {
//             id: "44",
//             title: "The Eminence in Shadow",
//             releaseDate: "2022–2023",
//             duration: "TV Series - 20 episodes",
//             rating: "TV-14",
//             imdbRating: 7.8,
//             metascore: null,
//             votes: "12K",
//             genre: ["Animation", "Action", "Comedy", "Fantasy"],
//             director: ["Kazuya Nakanishi"],
//             writers: ["Daisuke Aizawa"],
//             actors: ["Elissa Cuellar", "Adam Gibbs", "Seiichiro Yamashita"],
//             actresses: ["Ai Fairouz", "Annie Wild", "Dominique Meyer", "Hisako Kanemoto", "Christina Marie Kelly", "Asami Seto", "Suzuko Mimori", "Inori Minase", "Ayaka Asai", "Raven Troup", "Ellen Evans", "Reina Kondô"],
//             story: "When Cid is isekai'd to another world, he creates an underground organization to live out a fight against a made-up cult. Little does he know the cult is real, and they're not happy his power fantasy just impeded their plans.",
//             imageUrl: "https://example.com/eminence-in-shadow.jpg"
//         },
//         {
//             id: "45",
//             title: "Haikyu!!",
//             releaseDate: "2014–2020",
//             duration: "TV Series - 85 episodes",
//             rating: "TV-14",
//             imdbRating: 8.7,
//             metascore: null,
//             votes: "48K",
//             genre: ["Animation", "Comedy", "Drama", "Sport"],
//             director: ["Susumu Mitsunaka"],
//             writers: ["Haruichi Furudate"],
//             actors: ["Yu Hayashi", "Satoshi Hino", "Ayumu Murase", "Kaito Ishikawa"],
//             actresses: [],
//             story: "Determined to be like the volleyball championship's star player nicknamed 'the small giant', Shoyo joins his school's volleyball club.",
//             imageUrl: "https://example.com/haikyu.jpg"
//         },
//         {
//             id: "46",
//             title: "Mushoku Tensei: Jobless Reincarnation",
//             releaseDate: "2021–",
//             duration: "TV Series - 24+ episodes",
//             rating: "TV-14",
//             imdbRating: 8.2,
//             metascore: null,
//             votes: "32K",
//             genre: ["Animation", "Adventure", "Drama", "Fantasy"],
//             director: ["Manabu Okamoto"],
//             writers: ["Rifujin na Magonote"],
//             actors: ["Daisuke Namikawa", "Tomokazu Sugita", "Daisuke Ono"],
//             actresses: ["Yumi Uchiyama", "Ai Kakuma", "Konomi Kohara"],
//             story: "A 34-year-old underachiever gets run over by a bus, but his story isn't over. Reincarnated as an infant, he'll embark on an epic adventure.",
//             imageUrl: "https://example.com/mushoku-tensei.jpg"
//         },
//         {
//             id: "47",
//             title: "Tokyo Ghoul",
//             releaseDate: "2014",
//             duration: "TV Mini Series - 12 episodes",
//             rating: "TV-MA",
//             imdbRating: 7.7,
//             metascore: null,
//             votes: "76K",
//             genre: ["Animation", "Action", "Drama", "Fantasy", "Horror", "Supernatural"],
//             director: ["Shuhei Morita"],
//             writers: ["Sui Ishida"],
//             actors: ["Natsuki Hanae"],
//             actresses: ["Hanae Natsuki"],
//             story: "A Tokyo college student is attacked by a ghoul, a superpowered human who feeds on human flesh. He survives, but has become part ghoul and becomes a fugitive on the run.",
//             imageUrl: "https://example.com/tokyo-ghoul.jpg"
//         },
//         {
//             id: "48",
//             title: "Attack on Titan the Movie: The Last Attack",
//             releaseDate: "2024",
//             duration: "2h 25m",
//             rating: "PG-13",
//             imdbRating: 9.1,
//             metascore: null,
//             votes: "20K",
//             genre: ["Animation", "Action", "Drama", "Fantasy"],
//             director: ["Tetsuro Araki"],
//             writers: ["Hajime Isayama"],
//             actors: ["David Matranga", "Yûki Kaji"],
//             actresses: ["Marina Inoue", "Yui Ishikawa"],
//             story: "The fate of the world hangs in the balance as Eren unleashes the ultimate power of the Titans. With a burning determination to eliminate all who threaten Eldia, he leads an unstoppable army of Colossal Titans towards Marley.",
//             imageUrl: "https://example.com/attack-on-titan-last-attack.jpg"
//         },
//         {
//             id: "49",
//             title: "Erased",
//             releaseDate: "2016",
//             duration: "TV Mini Series - 12 episodes",
//             rating: "TV-14",
//             imdbRating: 8.4,
//             metascore: null,
//             votes: "69K",
//             genre: ["Animation", "Drama", "Mystery", "Supernatural", "Thriller"],
//             director: ["Tomohiko Itô"],
//             writers: ["Kei Sanbe"],
//             actors: ["Shinnosuke Mitsushima"],
//             actresses: ["Tao Tsuchiya"],
//             story: "29-year-old Satoru Fujinuma is sent back in time 18 years to prevent the events leading to his mother's death, which began with a series of kidnappings while he was in 5th grade.",
//             imageUrl: "https://example.com/erased.jpg"
//         },
//         {
//             id: "50",
//             title: "The Wind Rises",
//             releaseDate: "2013",
//             duration: "2h 6m",
//             rating: "PG-13",
//             imdbRating: 7.8,
//             metascore: 83,
//             votes: "109K",
//             genre: ["Animation", "Biography", "Drama", "Romance", "War"],
//             director: ["Hayao Miyazaki"],
//             writers: ["Hayao Miyazaki"],
//             actors: ["Hideaki Anno"],
//             actresses: ["Miori Takimoto"],
//             story: "Jiro Horikoshi studies assiduously to fulfill his aim of becoming an aeronautical engineer. As WWII begins, fighter aircraft designed by him end up getting used by the Japanese Empire against its foes.",
//             imageUrl: "https://example.com/the-wind-rises.jpg"
//         },
//         {
//             id: "51",
//             title: "Monogatari Series: Second Season",
//             releaseDate: "2013",
//             duration: "26 episodes",
//             rating: "TV-14",
//             imdbRating: 8.6,
//             metascore: null,
//             votes: "3.5K",
//             genre: ["Drama", "Supernatural", "Romance"],
//             director: ["Fuyashi Tô"],
//             writers: ["Nisio Isin"],
//             actors: ["Kana Hanazawa", "Yôji Ueda", "Saori Hayami"],
//             actresses: ["Kana Hanazawa", "Saori Hayami"],
//             story: "One day, Tsubasa Hanekawa encounters a giant white tiger apparition at an intersection that talks to her. Her house burns down the next day, leaving her homeless.",
//             imageUrl: ""
//         },
//         {
//             id: "52",
//             title: "Code Geass",
//             releaseDate: "2006-2008",
//             duration: "54 episodes",
//             rating: "TV-14",
//             imdbRating: 8.7,
//             metascore: null,
//             votes: "95K",
//             genre: ["Drama", "Mecha", "Military"],
//             director: ["Gorô Taniguchi"],
//             writers: ["Ichirô Ôkouchi"],
//             actors: ["Jun Fukuyama", "Takahiro Sakurai", "Johnny Yong Bosch"],
//             actresses: [],
//             story: "After being given a mysterious power to control others, an outcast prince becomes the masked leader of the rebellion against an all-powerful empire.",
//             imageUrl: ""
//         },
//         {
//             id: "53",
//             title: "Puella Magi Madoka Magica",
//             releaseDate: "2011",
//             duration: "12 episodes",
//             rating: "TV-14",
//             imdbRating: 8.2,
//             metascore: null,
//             votes: "13K",
//             genre: ["Drama", "Horror", "Thriller"],
//             director: ["Akiyuki Shinbô"],
//             writers: ["Ume Aoki", "Atsuhiro Iwakami"],
//             actors: ["Aoi Yûki", "Chiwa Saitô", "Emiri Kato"],
//             actresses: ["Aoi Yûki", "Chiwa Saitô", "Emiri Kato"],
//             story: "A creature named Kyubey offers Madoka and Sayaka a wish if they agree to become 'magical girls' and fight abstract beings called 'witches'. However, a magical girl named Homura is, for uncertain reasons, determined to stop this agreement.",
//             imageUrl: ""
//         },
//         {
//             id: "54",
//             title: "Gintama",
//             releaseDate: "2005-2021",
//             duration: "375 episodes",
//             rating: "TV-14",
//             imdbRating: 8.7,
//             metascore: null,
//             votes: "19K",
//             genre: ["Action", "Comedy", "Drama"],
//             director: [],
//             writers: [],
//             actors: ["Tomokazu Sugita", "Daisuke Sakaguchi", "Rie Kugimiya"],
//             actresses: ["Rie Kugimiya"],
//             story: "In an era where aliens have invaded and taken over feudal Tokyo, an unemployed samurai finds work however he can.",
//             imageUrl: ""
//         },
//         {
//             id: "55",
//             title: "Fate/Zero",
//             releaseDate: "2011-2012",
//             duration: "31 episodes",
//             rating: "TV-MA",
//             imdbRating: 8.2,
//             metascore: null,
//             votes: "16K",
//             genre: ["Action", "Drama", "Fantasy"],
//             director: [],
//             writers: ["Kinoko Nasu", "Gen Urobuchi"],
//             actors: ["Ayako Kawasumi", "Kari Wahlgren", "Sayaka Ôhara"],
//             actresses: ["Ayako Kawasumi", "Kari Wahlgren", "Sayaka Ôhara"],
//             story: "Seven chosen mages and their summoned heroic spirits fight against each other to try and win the Holy Grail: a magical device that can grant any wish.",
//             imageUrl: ""
//         },
//         {
//             id: "56",
//             title: "A Silent Voice: The Movie",
//             releaseDate: "2016",
//             duration: "2h 10m",
//             rating: "Not Rated",
//             imdbRating: 8.1,
//             metascore: 78,
//             votes: "128K",
//             genre: ["Drama", "Family"],
//             director: ["Naoko Yamada"],
//             writers: [],
//             actors: ["Miyu Irino", "Saori Hayami", "Aoi Yûki"],
//             actresses: ["Saori Hayami", "Aoi Yûki"],
//             story: "A deaf girl, Shoko, is bullied by the popular Shoya. As Shoya continues to bully Shoko, the class turns its back on him. Shoko transfers and Shoya grows up as an outcast. Alone and depressed, the regretful Shoya finds Shoko to make amends.",
//             imageUrl: ""
//         },
//         {
//             id: "57",
//             title: "Wolf Children",
//             releaseDate: "2012",
//             duration: "1h 57m",
//             rating: "PG",
//             imdbRating: 8.1,
//             metascore: 76,
//             votes: "53K",
//             genre: ["Animation", "Drama", "Family"],
//             director: ["Mamoru Hosoda"],
//             writers: [],
//             actors: ["Aoi Miyazaki", "Takao Osawa", "Haru Kuroki"],
//             actresses: ["Aoi Miyazaki", "Haru Kuroki"],
//             story: "After her werewolf lover unexpectedly dies in an accident, a young woman must find ways to raise their werewolf son and daughter while keeping their trait hidden from society.",
//             imageUrl: ""
//         },
//         {
//             id: "58",
//             title: "March Comes in Like a Lion",
//             releaseDate: "2016-2018",
//             duration: "45 episodes",
//             rating: "TV-PG",
//             imdbRating: 8.2,
//             metascore: null,
//             votes: "3.8K",
//             genre: ["Drama", "Family"],
//             director: [],
//             writers: [],
//             actors: ["Kengo Kawanishi", "Khoi Dao", "Ai Kayano"],
//             actresses: ["Ai Kayano"],
//             story: "A 17 year old socially awkward orphaned shogi player, dealing with adult problems like financial difficulties, loneliness, and depression.",
//             imageUrl: ""
//         },
//         {
//             id: "59",
//             title: "Parasyte: The Maxim",
//             releaseDate: "2014-2015",
//             duration: "24 episodes",
//             rating: "TV-MA",
//             imdbRating: 8.2,
//             metascore: null,
//             votes: "58K",
//             genre: ["Action", "Drama", "Horror"],
//             director: [],
//             writers: [],
//             actors: ["Aya Hirano", "Nobunaga Shimazaki", "Rinka H.B.B."],
//             actresses: ["Aya Hirano", "Rinka H.B.B."],
//             story: "17-year-old Shinichi Izumi is partially infected by a Parasyte, monsters that butcher and consume humans. He must learn to co-exist with the creature if he is to survive both the life of a Parasyte and a human as part monster, part person.",
//             imageUrl: ""
//         },
//         {
//             id: "60",
//             title: "One Punch Man",
//             releaseDate: "2015",
//             duration: "39 episodes",
//             rating: "TV-PG",
//             imdbRating: 8.6,
//             metascore: null,
//             votes: "209K",
//             genre: ["Action", "Comedy", "Superhero"],
//             director: [],
//             writers: ["Yusuke Murata"],
//             actors: ["Makoto Furukawa", "Kaito Ishikawa", "Max Mittelman"],
//             actresses: [],
//             story: "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.",
//             imageUrl: ""
//         },
//         {
//             id: "61",
//             title: "Anohana: The Flower We Saw That Day",
//             releaseDate: "2011",
//             duration: "11 episodes",
//             rating: "TV-PG",
//             imdbRating: 8.1,
//             metascore: null,
//             votes: "18K",
//             genre: ["Drama", "Supernatural"],
//             director: [],
//             writers: ["Tatsuyuki Nagai", "Mari Okada", "Masayoshi Tanaka"],
//             actors: ["Miyu Irino", "Ai Kayano", "Haruka Tomatsu"],
//             actresses: ["Ai Kayano", "Haruka Tomatsu"],
//             story: "Five childhood companions reunite when the ghost of their dead friends appears, and demands they grant her final wish.",
//             imageUrl: ""
//         },
//         {
//             id: "62",
//             title: "Death Note",
//             releaseDate: "2006-2007",
//             duration: "37 episodes",
//             rating: "TV-14",
//             imdbRating: 8.9,
//             metascore: null,
//             votes: "443K",
//             genre: ["Crime", "Drama", "Fantasy"],
//             director: [],
//             writers: [],
//             actors: ["Mamoru Miyano", "Brad Swaile", "Vincent Tong"],
//             actresses: [],
//             story: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
//             imageUrl: ""
//         },
//         {
//             id: "63",
//             title: "Your Name.",
//             releaseDate: "2016",
//             duration: "1h 46m",
//             rating: "Not Rated",
//             imdbRating: 8.4,
//             metascore: 81,
//             votes: "370K",
//             genre: ["Animation", "Drama", "Family"],
//             director: ["Makoto Shinkai"],
//             writers: [],
//             actors: ["Ryûnosuke Kamiki", "Mone Kamishiraishi", "Ryo Narita"],
//             actresses: ["Mone Kamishiraishi"],
//             story: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
//             imageUrl: ""
//         },
//         {
//             id: "64",
//             title: "Perfect Blue",
//             releaseDate: "1997",
//             duration: "1h 21m",
//             rating: "Not Rated",
//             imdbRating: 8.0,
//             metascore: 67,
//             votes: "112K",
//             genre: ["Animation", "Crime", "Drama"],
//             director: ["Satoshi Kon"],
//             writers: [],
//             actors: ["Junko Iwao", "Rica Matsumoto", "Shinpachi Tsuji"],
//             actresses: ["Junko Iwao", "Rica Matsumoto"],
//             story: "A pop singer gives up her career to become an actress, but she slowly goes insane when she starts being stalked by an obsessed fan and what seems to be a ghost of her past.",
//             imageUrl: ""
//         },
//         {
//             id: "65",
//             title: "Kizumonogatari Part 3: Reiketsu",
//             releaseDate: "2017",
//             duration: "1h 23m",
//             rating: "18+",
//             imdbRating: 7.8,
//             metascore: null,
//             votes: "4K",
//             genre: ["Animation", "Action", "Drama"],
//             director: ["Yukihiro Miyamoto", "Tatsuya Oishi", "Akiyuki Shinbô"],
//             writers: [],
//             actors: ["Hiroshi Kamiya", "Takahiro Sakurai", "Maaya Sakamoto"],
//             actresses: ["Maaya Sakamoto"],
//             story: "Part 3 of Kizumonogatari (Wound Tale) trilogy, based on a light novel by Nisio Isin.",
//             imageUrl: ""
//         },
//         {
//             id: "66",
//             title: "Attack on Titan",
//             releaseDate: "2013-2023",
//             duration: "98 episodes",
//             rating: "TV-MA",
//             imdbRating: 9.1,
//             metascore: null,
//             votes: "646K",
//             genre: ["Animation", "Action", "Adventure"],
//             director: [],
//             writers: [],
//             actors: ["Jessie James Grelle", "Bryce Papenbrook", "Trina Nishimura"],
//             actresses: ["Trina Nishimura"],
//             story: "After his hometown is destroyed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
//             imageUrl: ""
//         },
//         {
//             id: "67",
//             title: "Psycho-Pass",
//             releaseDate: "2012-2019",
//             duration: "41 episodes",
//             rating: "TV-MA",
//             imdbRating: 8.1,
//             metascore: null,
//             votes: "25K",
//             genre: ["Animation", "Action", "Crime"],
//             director: [],
//             writers: ["Gen Urobuchi"],
//             actors: ["Kana Hanazawa", "Miyuki Sawashiro", "Noriko Hidaka"],
//             actresses: ["Kana Hanazawa", "Miyuki Sawashiro", "Noriko Hidaka"],
//             story: "In the near future, it's possible to measure each person's potential for violence. Inspector Akane Tsunemori, as part of a special unit, chases down these prospective criminals.",
//             imageUrl: ""
//         },
//         {
//             id: "68",
//             title: "Penguindrum",
//             releaseDate: "2011",
//             duration: "24 episodes",
//             rating: "TV-14",
//             imdbRating: 7.4,
//             metascore: null,
//             votes: "1.1K",
//             genre: ["Animation", "Drama", "Fantasy"],
//             director: ["Kunihiko Ikuhara"],
//             writers: [],
//             actors: ["Brittney Karbowski", "Monica Rial", "Adam Gibbs"],
//             actresses: ["Brittney Karbowski", "Monica Rial"],
//             story: "A terminally ill girl is revived by a magical penguin spirit. In return, her brothers are sent on a quest for the mysterious 'Penguindrum'.",
//             imageUrl: ""
//         },
//         {
//             id: "69",
//             title: "Steins;Gate",
//             releaseDate: "2011-2015",
//             duration: "26 episodes",
//             rating: "TV-14",
//             imdbRating: 8.8,
//             metascore: null,
//             votes: "86K",
//             genre: ["Animation", "Comedy", "Drama"],
//             director: [],
//             writers: [],
//             actors: ["Mamoru Miyano", "Asami Imai", "Kana Hanazawa"],
//             actresses: ["Asami Imai", "Kana Hanazawa"],
//             story: "After discovering time travel, a university student and his colleagues must use their knowledge of it to stop an evil organization and their diabolical plans.",
//             imageUrl: ""
//         },
//         {
//             id: "70",
//             title: "Mob Psycho 100",
//             releaseDate: "2016-2022",
//             duration: "37 episodes",
//             rating: "TV-14",
//             imdbRating: 8.5,
//             metascore: null,
//             votes: "59K",
//             genre: ["Animation", "Action", "Comedy"],
//             director: [],
//             writers: [],
//             actors: ["Setsuo Ito", "Takahiro Sakurai", "Miyu Irino"],
//             actresses: [],
//             story: "A psychic middle school boy tries to live a normal life and keep his growing powers under control, even though he constantly gets into trouble.",
//             imageUrl: ""
//         },
//         {
//             id: "71",
//             title: "Golden Time",
//             releaseDate: "2013-2014",
//             duration: "24 episodes",
//             rating: "TV-14",
//             imdbRating: 7.5,
//             metascore: null,
//             votes: "5.8K",
//             genre: ["Animation", "Comedy", "Drama"],
//             director: [],
//             writers: [],
//             actors: ["Yui Horie", "Makoto Furukawa", "Mike Haimoto"],
//             actresses: ["Yui Horie"],
//             story: "With freshmen law students Banri and Mitsuo, it's friendship at first sight. But trouble gets stirred up with talk of a fiancé.",
//             imageUrl: ""
//         },
//         {
//             id: "72",
//             title: "My Teen Romantic Comedy SNAFU",
//             releaseDate: "2013-2023",
//             duration: "41 episodes",
//             rating: "TV-14",
//             imdbRating: 7.9,
//             metascore: null,
//             votes: "12K",
//             genre: ["Animation", "Comedy", "Drama"],
//             director: [],
//             writers: [],
//             actors: ["Cat Thomas", "Melissa Molano", "Takuya Eguchi"],
//             actresses: ["Cat Thomas", "Melissa Molano"],
//             story: "About an antisocial high school student named Hikigaya Hachiman with a distorted view on life and no friends or girlfriend. His life change when he was forced to enter the 'Volunteer Service Club' by his teacher.",
//             imageUrl: ""
//         },
//         {
//             id: "73",
//             title: "Magi: The Labyrinth of Magic",
//             releaseDate: "2012-2014",
//             duration: "50 episodes",
//             rating: "TV-14",
//             imdbRating: 7.8,
//             metascore: null,
//             votes: "5.4K",
//             genre: ["Animation", "Action", "Adventure"],
//             director: [],
//             writers: [],
//             actors: ["Erica Mendez", "Erik Scott Kimerer", "Kaori Ishihara"],
//             actresses: ["Erica Mendez", "Kaori Ishihara"],
//             story: "Aladdin, Alibaba, and Morgiana go their separate ways after spending time together in Sindria to develop their own strengths, make new friends and prepare for what is coming.",
//             imageUrl: ""
//         },
//         {
//             id: "74",
//             title: "Grand Blue Dreaming",
//             releaseDate: "2018-2025",
//             duration: "23 episodes",
//             rating: "Not Rated",
//             imdbRating: 7.9,
//             metascore: null,
//             votes: "5.8K",
//             genre: ["Animation", "Comedy"],
//             director: [],
//             writers: ["Kenji Inoue", "Kimitake Yoshioka"],
//             actors: ["Yuma Uchida", "Ryohei Kimura", "Chika Anzai"],
//             actresses: ["Chika Anzai"],
//             story: "A college student spends his year at the seaside town of Izu, having fun on the beach with his school friends.",
//             imageUrl: ""
//         },
//         {
//             id: "75",
//             title: "The Pet Girl of Sakurasou",
//             releaseDate: "2012-2013",
//             duration: "24 episodes",
//             rating: "TV-14",
//             imdbRating: 7.6,
//             metascore: null,
//             votes: "5.9K",
//             genre: ["Animation", "Comedy", "Drama"],
//             director: [],
//             writers: ["Hajime Kamoshida"],
//             actors: ["Yoshitsugu Matsuoka", "Ai Kayano", "Mariko Nakatsu"],
//             actresses: ["Ai Kayano", "Mariko Nakatsu"],
//             story: "Sorata is a normal student living in an abnormal dorm and he wants desperately to escape. But his plans are put on hold when a new student moves in. Attentions stray and sanity frays as the housebreaking continues in Pet Girl of Sakurasou.",
//             imageUrl: ""
//         },
//         {
//             id: "76",
//             title: "Hinamatsuri",
//             releaseDate: "2018",
//             duration: "12 episodes",
//             rating: "TV-14",
//             imdbRating: 7.8,
//             metascore: null,
//             votes: "2.8K",
//             genre: ["Animation", "Comedy", "Drama"],
//             director: [],
//             writers: ["Masao Ôtake"],
//             actors: ["Yoshiki Nakajima", "Brina Palencia", "Jarrod Greene"],
//             actresses: ["Brina Palencia"],
//             story: "The comfortable life of committed bachelor and efficient yakuza Nitta is interrupted when a strange girl with psychic powers comes to live with him.",
//             imageUrl: ""
//         },
//         {
//             id: "77",
//             title: "Bakemonogatari",
//             releaseDate: "2009-2013",
//             duration: "16 episodes",
//             rating: "TV-14",
//             imdbRating: 8.0,
//             metascore: null,
//             votes: "7.5K",
//             genre: ["Animation", "Comedy", "Drama"],
//             director: [],
//             writers: [],
//             actors: ["Hiroshi Kamiya", "Eri Kitamura", "Yuka Iguchi"],
//             actresses: ["Eri Kitamura", "Yuka Iguchi"],
//             story: "Third-year high school student Koyomi Araragi is human again. Cured of his vampirism, he seeks to help other supernaturals with their problems. Koyomi becomes involved in their lives, revealing secrets in people he once knew.",
//             imageUrl: ""
//         },
//         {
//             id: "78",
//             title: "Re: Zero - Starting Life in Another World",
//             releaseDate: "2016",
//             duration: "95 episodes",
//             rating: "TV-14",
//             imdbRating: 8.1,
//             metascore: null,
//             votes: "36K",
//             genre: ["Animation", "Drama", "Fantasy"],
//             director: [],
//             writers: [],
//             actors: ["Yûsuke Kobayashi", "Sean Chiplock", "Kayli Mills"],
//             actresses: ["Kayli Mills"],
//             story: "After being suddenly transported to another world, Subaru Natsuki and his new female partner are brutally murdered. However, Subaru awakens to a familiar scene, meeting the same girl again. The day begins to mysteriously repeat itself.",
//             imageUrl: ""
//         },
//         {
//             id: "79",
//             title: "Noragami",
//             releaseDate: "2014-2015",
//             duration: "29 episodes",
//             rating: "TV-14",
//             imdbRating: 7.8,
//             metascore: null,
//             votes: "22K",
//             genre: ["Animation", "Action", "Adventure"],
//             director: [],
//             writers: [],
//             actors: ["Hiroshi Kamiya", "Maaya Uchida", "Yûki Kaji"],
//             actresses: ["Maaya Uchida"],
//             story: "A minor god seeking to gain widespread worship teams up with a human girl he saved to gain fame, recognition and at least one shrine dedicated to him.",
//             imageUrl: ""
//         },
//         {
//             id: "80",
//             title: "The Disastrous Life of Saiki K.",
//             releaseDate: "2016-2018",
//             duration: "146 episodes",
//             rating: "TV-14",
//             imdbRating: 8.3,
//             metascore: null,
//             votes: "14K",
//             genre: ["Animation", "Comedy"],
//             director: [],
//             writers: ["Shûichi Asô"],
//             actors: ["Hiroshi Kamiya", "Daisuke Ono", "Nobunaga Shimazaki", "Rikako Aikawa", "Mitsuo Iwata", "Yukari Tamura", "Satoshi Hino", "Ai Kayano", "Maaya Uchida", "Natsuki Hanae"],
//             actresses: ["Rikako Aikawa", "Yukari Tamura", "Ai Kayano", "Maaya Uchida"],
//             story: "Saiki Kusuo is a powerful psychic who hates attracting attention, yet he is surrounded by colorful characters who always find a way to remove him from his everyday life.",
//             imageUrl: ""
//         },
//         {
//             id: "81",
//             title: "Konosuba: God's Blessing on This Wonderful World!",
//             releaseDate: "2016-2025",
//             duration: "34 episodes",
//             rating: "TV-14",
//             imdbRating: 7.8,
//             metascore: null,
//             votes: "19K",
//             genre: ["Animation", "Adventure", "Comedy"],
//             director: [],
//             writers: [],
//             actors: ["Jun Fukushima", "Sora Amamiya", "Rie Takahashi"],
//             actresses: ["Sora Amamiya", "Rie Takahashi"],
//             story: "It was a happy day for Kazuma - right up to the moment he died. A goddess intervenes and offers him a second chance in a magical land.",
//             imageUrl: ""
//         },
//         {
//             id: "82",
//             title: "My Hero Academia",
//             releaseDate: "2016",
//             duration: "170 episodes",
//             rating: "TV-14",
//             imdbRating: 8.2,
//             metascore: null,
//             votes: "96K",
//             genre: ["Animation", "Action", "Adventure"],
//             director: [],
//             writers: ["Kôhei Horikoshi"],
//             actors: ["Daiki Yamashita", "Justin Briner", "Nobuhiko Okamoto"],
//             actresses: [],
//             story: "A superhero-admiring boy enrolls in a prestigious hero academy and learns what it really means to be a hero, after the strongest superhero grants him his own powers.",
//             imageUrl: ""
//         },
//         {
//             id: "83",
//             title: "Welcome to the N.H.K.",
//             releaseDate: "2006",
//             duration: "24 episodes",
//             rating: "TV-MA",
//             imdbRating: 8.2,
//             metascore: null,
//             votes: "9.3K",
//             genre: ["Animation", "Comedy", "Drama"],
//             director: [],
//             writers: [],
//             actors: ["Yutaka Koizumi", "Yui Makino", "Daisuke Sakaguchi"],
//             actresses: ["Yui Makino"],
//             story: "This surreal dramedy follows Satou Tatsuhiro as he attempts to escape the evil machinations of the NHK.",
//             imageUrl: ""
//         },
//         {
//             id: "84",
//             title: "Gurren Lagann",
//             releaseDate: "2007",
//             duration: "28 episodes",
//             rating: "TV-14",
//             imdbRating: 8.3,
//             metascore: null,
//             votes: "24K",
//             genre: ["Animation", "Action", "Adventure"],
//             director: [],
//             writers: ["Kazuki Nakashima"],
//             actors: ["Tetsuya Kakihara", "Shizuka Itô", "Yuri Lowenthal"],
//             actresses: ["Shizuka Itô"],
//             story: "Two friends, Simon and Kamina, become the symbols of rebellion against the powerful Spiral King, who forced mankind into subterranean villages.",
//             imageUrl: ""
//         },
//         {
//             id: "85",
//             title: "Erased",
//             releaseDate: "2016",
//             duration: "13 episodes",
//             rating: "TV-14",
//             imdbRating: 8.4,
//             metascore: null,
//             votes: "69K",
//             genre: ["Animation", "Drama", "Fantasy"],
//             director: [],
//             writers: [],
//             actors: ["Shinnosuke Mitsushima", "Tao Tsuchiya", "Minami Takayama"],
//             actresses: ["Tao Tsuchiya", "Minami Takayama"],
//             story: "29-year-old Satoru Fujinuma is sent back in time 18 years to prevent the events leading to his mother's death, which began with a series of kidnappings while he was in 5th grade.",
//             imageUrl: ""
//         },
//         {
//             id: "86",
//             title: "Food Wars: Shokugeki no Soma",
//             releaseDate: "2015-2020",
//             duration: "92 episodes",
//             rating: "TV-14",
//             imdbRating: 8.0,
//             metascore: null,
//             votes: "14K",
//             genre: ["Animation", "Comedy", "Drama"],
//             director: [],
//             writers: [],
//             actors: ["Kappei Yamaguchi", "Yoshitsugu Matsuoka", "Minami Takahashi"],
//             actresses: ["Minami Takahashi"],
//             story: "Soma Yukihira enrolls in an elite culinary school to become a full-time chef and surpass his father's culinary skills.",
//             imageUrl: ""
//         },
//         {
//             id: "87",
//             title: "Fate/stay night [Unlimited Blade Works]",
//             releaseDate: "2014-2015",
//             duration: "27 episodes",
//             rating: "TV-14",
//             imdbRating: 8.0,
//             metascore: null,
//             votes: "10K",
//             genre: ["Animation", "Action", "Drama"],
//             director: [],
//             writers: [],
//             actors: ["Noriaki Sugiyama", "Kana Ueda", "Bryce Papenbrook"],
//             actresses: ["Kana Ueda"],
//             story: "A group of seven magicians gets chosen to become masters of seven classes of heroic spirits, in order to fight and win the Holy Grail.",
//             imageUrl: ""
//         },
//         {
//             id: "88",
//             title: "A Place Further Than the Universe",
//             releaseDate: "2018",
//             duration: "13 episodes",
//             rating: "TV-14",
//             imdbRating: 8.1,
//             metascore: null,
//             votes: "3.2K",
//             genre: ["Animation", "Adventure", "Comedy"],
//             director: ["Atsuko Ishizuka"],
//             writers: [],
//             actors: ["Inori Minase", "Kana Hanazawa", "Yuka Iguchi", "Saori Hayami"],
//             actresses: ["Inori Minase", "Kana Hanazawa", "Yuka Iguchi", "Saori Hayami"],
//             story: "A group of high school girls join an expedition headed towards the Antarctic.",
//             imageUrl: ""
//         },
//     ];
//     tempAnimeData.forEach((item) => {
//         let newAnimeData = new AnimeData({

//             id: item.id,
//             title: item.title,
//             releaseDate: item.releaseDate,
//             duration: item.duration,
//             rating: item.rating,
//             imdbRating: item.imdbRating,
//             metascore: item.metascore,
//             votes: item.votes,
//             genre: item.genre,
//             director: item.director,
//             writers: item.writers,
//             actors: item.actors,
//             actresses: item.actresses,

//             story: item.story,
//             imageUrl: item.imageUrl

//         });
//         newAnimeData.save();

//     });
//     res.send("!Doneee");
// });

app.get("/animeData", async(req, res) => {
    try {
        const Anime = await AnimeData.find();
        res.json(Anime);
    } catch (err) {
        res.status(500).json({ error: "Error fetching movies" });
    }
});



// navbar k-drama

app.get("/addKdramaData", async(req, res) => {
    try {
        const Kdrama = await KdramaData.find();
        res.json(Kdrama);
    } catch (err) {
        res.status(500).json({ error: "Error fetching movies" });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});