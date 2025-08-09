require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Content = require("./schemas/ContentSchema.js");

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch((err) => console.error("❌ MongoDB connection failed:", err));

app.get("/", (req, res) => {
    res.send("✅ API is working and connected to MongoDB Atlas!");
});
















































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






















































// Web-series data


// [
//   {
//     "id": "1",
//     "title": "Game of Thrones",
//     "releaseDate": "2011-2019",
//     "duration": "TV Series",
//     "rating": "TV-MA",
//     "imdbRating": 9.2,
//     "metascore": null,
//     "votes": "2.5M",
//     "genre": ["Fantasy", "Drama", "Adventure"],
//     "director": [],
//     "writers": [],
//     "actors": [],
//     "actresses": [],
//     "story": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
//     "imageUrl": ""
//   },
//   {
//     "id": "2",
//     "title": "Breaking Bad",
//     "releaseDate": "2008-2013",
//     "duration": "TV Series",
//     "rating": "TV-MA",
//     "imdbRating": 9.5,
//     "metascore": null,
//     "votes": "2.4M",
//     "genre": ["Crime", "Drama", "Thriller"],
//     "director": [],
//     "writers": [],
//     "actors": ["Bryan Cranston"],
//     "actresses": [],
//     "story": "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student to secure his family's future.",
//     "imageUrl": ""
//   },
//   {
//     "id": "3",
//     "title": "Stranger Things",
//     "releaseDate": "2016-2025",
//     "duration": "TV Series",
//     "rating": "TV-14",
//     "imdbRating": 8.6,
//     "metascore": null,
//     "votes": "1.5M",
//     "genre": ["Drama", "Fantasy", "Horror"],
//     "director": [],
//     "writers": [],
//     "actors": ["David Harbour", "Caleb McLaughlin", "Finn Wolfhard", "Charlie Heaton", "Noah Schnapp", "Gaten Matarazzo"],
//     "actresses": ["Winona Ryder", "Natalia Dyer", "Millie Bobby Brown"],
//     "story": "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
//     "imageUrl": ""
//   },
//   {
//     "id": "4",
//     "title": "Friends",
//     "releaseDate": "1994-2004",
//     "duration": "TV Series",
//     "rating": "TV-14",
//     "imdbRating": 8.9,
//     "metascore": null,
//     "votes": "1.2M",
//     "genre": ["Comedy", "Romance"],
//     "director": [],
//     "writers": [],
//     "actors": ["Matt LeBlanc", "Matthew Perry", "David Schwimmer"],
//     "actresses": ["Jennifer Aniston", "Courteney Cox", "Lisa Kudrow"],
//     "story": "Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.",
//     "imageUrl": ""
//   },
//   {
//     "id": "5",
//     "title": "The Walking Dead",
//     "releaseDate": "2010-2022",
//     "duration": "TV Series",
//     "rating": "TV-MA",
//     "imdbRating": 8.1,
//     "metascore": null,
//     "votes": "1.2M",
//     "genre": ["Drama", "Horror", "Thriller"],
//     "director": [],
//     "writers": [],
//     "actors": ["Andrew Lincoln"],
//     "actresses": [],
//     "story": "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
//     "imageUrl": ""
//   },
//   {
//     "id": "6",
//     "title": "Sherlock",
//     "releaseDate": "2010-2017",
//     "duration": "TV Series",
//     "rating": "TV-14",
//     "imdbRating": 9.0,
//     "metascore": null,
//     "votes": "1.1M",
//     "genre": ["Crime", "Drama", "Mystery"],
//     "director": [],
//     "writers": [],
//     "actors": ["Martin Freeman", "Benedict Cumberbatch"],
//     "actresses": [],
//     "story": "The quirky spin on Conan Doyle's iconic sleuth pitches him as a \"high-functioning sociopath\" in modern-day London. Assisting him in his investigations: Afghanistan War vet John Watson, who's introduced to Holmes by a mutual acquaintance.",
//     "imageUrl": ""
//   },
//   {
//     "id": "7",
//     "title": "The Big Bang Theory",
//     "releaseDate": "2007-2019",
//     "duration": "TV Series",
//     "rating": "TV-PG",
//     "imdbRating": 8.1,
//     "metascore": null,
//     "votes": "915K",
//     "genre": ["Comedy"],
//     "director": [],
//     "writers": [],
//     "actors": ["Johnny Galecki", "Simon Helberg", "Jim Parsons", "Kunal Nayyar"],
//     "actresses": ["Mayim Bialik", "Kaley Cuoco", "Melissa Rauch"],
//     "story": "Aspiring film actress Penny moves into a Pasadena apartment across the hall from brilliant, but socially awkward, physicists Sheldon Cooper and Leonard Hofstadter and shows them how little they know about life outside of the lab.",
//     "imageUrl": ""
//   },
//   {
//     "id": "8",
//     "title": "Dexter",
//     "releaseDate": "2006-2013",
//     "duration": "TV Series",
//     "rating": "TV-MA",
//     "imdbRating": 8.6,
//     "metascore": null,
//     "votes": "863K",
//     "genre": ["Crime", "Drama", "Mystery"],
//     "director": [],
//     "writers": [],
//     "actors": ["Michael C. Hall"],
//     "actresses": [],
//     "story": "He's smart. He's lovable. He's Dexter Morgan, America's favorite serial killer, who spends his days solving crimes and his nights committing them.",
//     "imageUrl": ""
//   },
//   {
//     "id": "9",
//     "title": "The Boys",
//     "releaseDate": "2019-",
//     "duration": "TV Series",
//     "rating": "TV-MA",
//     "imdbRating": 8.6,
//     "metascore": null,
//     "votes": "794K",
//     "genre": ["Action", "Comedy", "Crime"],
//     "director": [],
//     "writers": [],
//     "actors": ["Laz Alonso", "Jeffrey Dean Morgan", "Karl Urban", "Antony Starr", "Jack Quaid", "Tomer Capone"],
//     "actresses": ["Erin Moriarty", "Karen Fukuhara"],
//     "story": "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
//     "imageUrl": ""
//   },
//   {
//     "id": "10",
//     "title": "The Office",
//     "releaseDate": "2005-2013",
//     "duration": "TV Series",
//     "rating": "TV-14",
//     "imdbRating": 9.0,
//     "metascore": null,
//     "votes": "787K",
//     "genre": ["Comedy"],
//     "director": [],
//     "writers": [],
//     "actors": ["Steve Carell", "Rainn Wilson", "John Krasinski", "B.J. Novak"],
//     "actresses": ["Jenna Fischer"],
//     "story": "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, tedium and romance.",
//     "imageUrl": ""
//   },
//   {
//     "id": "11",
//     "title": "How I Met Your Mother",
//     "releaseDate": "2005-2014",
//     "duration": "TV Series",
//     "rating": "TV-14",
//     "imdbRating": 8.3,
//     "metascore": null,
//     "votes": "764K",
//     "genre": ["Comedy", "Romance"],
//     "director": [],
//     "writers": [],
//     "actors": ["Neil Patrick Harris", "Jason Segel", "Josh Radnor"],
//     "actresses": ["Alyson Hannigan", "Cobie Smulders"],
//     "story": "A father recounts to his children the journey he and his four best friends took leading up to him meeting their mother.",
//     "imageUrl": ""
//   },
//   {
//     "id": "12",
//     "title": "Better Call Saul",
//     "releaseDate": "2015-2022",
//     "duration": "TV Series",
//     "rating": "TV-MA",
//     "imdbRating": 9.0,
//     "metascore": null,
//     "votes": "751K",
//     "genre": ["Crime", "Drama"],
//     "director": [],
//     "writers": [],
//     "actors": ["Bob Odenkirk"],
//     "actresses": [],
//     "story": "The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White and Jesse Pinkman.",
//     "imageUrl": ""
//   },
//   {
//     "id": "13",
//     "title": "Peaky Blinders",
//     "releaseDate": "2013-2022",
//     "duration": "TV Series",
//     "rating": "TV-MA",
//     "imdbRating": 8.7,
//     "metascore": null,
//     "votes": "725K",
//     "genre": ["Crime", "Drama"],
//     "director": [],
//     "writers": [],
//     "actors": ["Cillian Murphy"],
//     "actresses": [],
//     "story": "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
//     "imageUrl": ""
//   },
//   {
//     "id": "14",
//     "title": "True Detective",
//     "releaseDate": "2014-",
//     "duration": "TV Series",
//     "rating": "TV-MA",
//     "imdbRating": 8.9,
//     "metascore": null,
//     "votes": "714K",
//     "genre": ["Crime", "Drama", "Mystery"],
//     "director": [],
//     "writers": [],
//     "actors": ["Matthew McConaughey", "Woody Harrelson"],
//     "actresses": [],
//     "story": "Anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
//     "imageUrl": ""
//   },
//   {
//     "id": "15",
//     "title": "Squid Game",
//     "releaseDate": "2021-2025",
//     "duration": "TV Series",
//     "rating": "TV-MA",
//     "imdbRating": 8.0,
//     "metascore": null,
//     "votes": "709K",
//     "genre": ["Action", "Drama", "Mystery"],
//     "director": [],
//     "writers": [],
//     "actors": ["Lee Byung-hun", "Lee Jung-jae"],
//     "actresses": [],
//     "story": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. A tempting prize awaits, but with deadly high stakes.",
//     "imageUrl": ""
//   },
//   {
//     "id": "16",
//     "title": "Black Mirror",
//     "releaseDate": "2011-",
//     "duration": "TV Series",
//     "rating": "TV-MA",
//     "imdbRating": 8.7,
//     "metascore": null,
//     "votes": "705K",
//     "genre": ["Drama", "Sci-Fi", "Thriller"],
//     "director": [],
//     "writers": [],
//     "actors": [],
//     "actresses": [],
//     "story": "Featuring stand-alone dramas -- sharp, suspenseful, satirical tales that explore techno-paranoia -- \"Black Mirror\" is a contemporary reworking of \"The Twilight Zone\" with stories that tap into the collective unease about the modern world.",
//     "imageUrl": ""
//   },
//   {
//     "id": "17",
//     "title": "The Last of Us",
//     "releaseDate": "2023-",
//     "duration": "TV Series",
//     "rating": "TV-MA",
//     "imdbRating": 8.5,
//     "metascore": null,
//     "votes": "690K",
//     "genre": ["Action", "Adventure", "Drama"],
//     "director": [],
//     "writers": [],
//     "actors": ["Pedro Pascal"],
//     "actresses": ["Bella Ramsey"],
//     "story": "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
//     "imageUrl": ""
//   },
//   {
//     "id": "18",
//     "title": "Rick and Morty",
//     "releaseDate": "2013-",
//     "duration": "TV Series",
//     "rating": "TV-MA",
//     "imdbRating": 9.0,
//     "metascore": null,
//     "votes": "663K",
//     "genre": ["Animation", "Adventure", "Comedy"],
//     "director": [],
//     "writers": [],
//     "actors": ["Dan Harmon", "Justin Roiland"],
//     "actresses": [],
//     "story": "The fractured domestic lives of a nihilistic mad scientist and his anxious grandson are further complicated by their inter-dimensional misadventures.",
//     "imageUrl": ""
//   },
//   {
//     "id": "19",
//     "title": "Lost",
//     "releaseDate": "2004-2010",
//     "duration": "TV Series",
//     "rating": "TV-14",
//     "imdbRating": 8.3,
//     "metascore": null,
//     "votes": "650K",
//     "genre": ["Adventure", "Drama", "Fantasy"],
//     "director": [],
//     "writers": [],
//     "actors": ["Naveen Andrews", "Adewale Akinnuoye-Agbaje", "Daniel Dae Kim", "Matthew Fox", "Jorge Garcia", "Josh Holloway", "Dominic Monaghan", "Terry O'Quinn", "Harold Perrineau"],
//     "actresses": ["Emilie de Ravin", "Yunjin Kim", "Michelle Rodriguez", "Cynthia Watros", "Maggie Grace", "Evangeline Lilly"],
//     "story": "The survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island.",
//     "imageUrl": ""
//   },
//   {
//     "id": "20",
//     "title": "Prison Break",
//     "releaseDate": "2005-2017",
//     "duration": "TV Series",
//     "rating": "TV-14",
//     "imdbRating": 8.3,
//     "metascore": null,
//     "votes": "638K",
//     "genre": ["Action", "Crime", "Drama"],
//     "director": [],
//     "writers": [],
//     "actors": ["Michael Rapaport", "Muse Watson", "Stacy Keach", "Paul Adelstein", "Wentworth Miller", "Dominic Purcell", "Leon Russom", "Wade Williams", "Amaury Nolasco", "Marshall Allman"],
//     "actresses": ["Barbara Eve Harris"],
//     "story": "A structural engineer installs himself in a prison he helped design, in order to save his falsely accused brother from a death sentence by breaking themselves out from the inside.",
//     "imageUrl": ""
//   }
// ]











// Anime data


// [
//   {
//     "id": "21",
//     "title": "Attack on Titan",
//     "releaseDate": "2013-2023",
//     "duration": "98 eps",
//     "rating": "TV-MA",
//     "imdbRating": 9.1,
//     "metascore": null,
//     "votes": "635K",
//     "genre": ["Animation", "Action", "Adventure"],
//     "director": [],
//     "writers": [],
//     "actors": ["Jessie James Grelle", "Bryce Papenbrook"],
//     "actresses": ["Trina Nishimura"],
//     "story": "After his hometown is destroyed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
//     "imageUrl": ""
//   },
//   {
//     "id": "22",
//     "title": "Fullmetal Alchemist: Brotherhood",
//     "releaseDate": "2009-2010",
//     "duration": "68 eps",
//     "rating": "TV-14",
//     "imdbRating": 9.1,
//     "metascore": null,
//     "votes": "227K",
//     "genre": ["Animation", "Action", "Adventure"],
//     "director": [],
//     "writers": ["Hiromu Arakawa"],
//     "actors": ["Kent Williams", "Iemasa Kayumi", "Vic Mignogna"],
//     "actresses": ["Rie Kugimiya", "Romi Park"],
//     "story": "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
//     "imageUrl": ""
//   },
//   {
//     "id": "23",
//     "title": "One Piece",
//     "releaseDate": "1999-",
//     "duration": "1156 eps",
//     "rating": "TV-14",
//     "imdbRating": 9.0,
//     "metascore": null,
//     "votes": "315K",
//     "genre": ["Animation", "Action", "Adventure"],
//     "director": [],
//     "writers": ["Eiichirô Oda"],
//     "actors": ["Hiroaki Hirata", "Kazuya Nakai", "Kappei Yamaguchi", "Tony Beck"],
//     "actresses": ["Akemi Okamura", "Mayumi Tanaka"],
//     "story": "Rubber-bodied dreamer Monkey D. Luffy gathers an eclectic pirate crew and braves the perilous Grand Line, battling tyrants and monsters to claim the legendary \"One Piece\" and become King of the Pirates.",
//     "imageUrl": ""
//   },
//   {
//     "id": "24",
//     "title": "Hunter x Hunter",
//     "releaseDate": "2011-2014",
//     "duration": "148 eps",
//     "rating": "TV-14",
//     "imdbRating": 9.0,
//     "metascore": null,
//     "votes": "171K",
//     "genre": ["Animation", "Action", "Adventure"],
//     "director": [],
//     "writers": ["Yoshihiro Togashi"],
//     "actors": ["Keiji Fujiwara", "Issei Futamata"],
//     "actresses": ["Miyuki Sawashiro", "Mariya Ise", "Megumi Han", "Cristina Valenzuela"],
//     "story": "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks out his father, who left him when he was younger.",
//     "imageUrl": ""
//   },
//   {
//     "id": "25",
//     "title": "Bleach: Thousand-Year Blood War",
//     "releaseDate": "2022-",
//     "duration": "41 eps",
//     "rating": "TV-MA",
//     "imdbRating": 9.0,
//     "metascore": null,
//     "votes": "64K",
//     "genre": ["Animation", "Action", "Adventure"],
//     "director": [],
//     "writers": ["Tite Kubo"],
//     "actors": ["Kentarô Itô", "Masakazu Morita", "Noriaki Sugiyama", "Tite Kubo", "Hiroki Yasumoto", "Johnny Yong Bosch", "Takayuki Sugô"],
//     "actresses": ["Fumiko Orikasa", "Yuki Matsuoka"],
//     "story": "The peace is suddenly broken when warning sirens blare through the Soul Society. Residents are disappearing without a trace and nobody knows who's behind it. Meanwhile, a darkness is approaching Ichigo and his friends in Karakura Town.",
//     "imageUrl": ""
//   },
//   {
//     "id": "26",
//     "title": "Death Note",
//     "releaseDate": "2006-2007",
//     "duration": "37 eps",
//     "rating": "TV-14",
//     "imdbRating": 8.9,
//     "metascore": null,
//     "votes": "437K",
//     "genre": ["Animation", "Crime", "Drama"],
//     "director": [],
//     "writers": [],
//     "actors": ["Kappei Yamaguchi", "Shidô Nakamura", "Mamoru Miyano", "Brad Swaile", "Vincent Tong"],
//     "actresses": [],
//     "story": "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
//     "imageUrl": ""
//   },
//   {
//     "id": "27",
//     "title": "Cowboy Bebop",
//     "releaseDate": "1998-1999",
//     "duration": "26 eps",
//     "rating": "TV-14",
//     "imdbRating": 8.9,
//     "metascore": null,
//     "votes": "157K",
//     "genre": ["Animation", "Action", "Drama"],
//     "director": [],
//     "writers": [],
//     "actors": ["Kôichi Yamadera", "Unshô Ishizuka"],
//     "actresses": ["Megumi Hayashibara", "Aoi Tada"],
//     "story": "The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners.",
//     "imageUrl": ""
//   },
//   {
//     "id": "28",
//     "title": "Frieren: Beyond Journey's End",
//     "releaseDate": "2023-",
//     "duration": "29 eps",
//     "rating": "TV-14",
//     "imdbRating": 8.9,
//     "metascore": null,
//     "votes": "49K",
//     "genre": ["Animation", "Adventure", "Drama"],
//     "director": [],
//     "writers": ["Tsukasa Abe", "Kanehito Yamada"],
//     "actors": [],
//     "actresses": ["Atsumi Tanezaki", "Kana Ichinose", "Mallorie Rodak"],
//     "story": "Elf mage Frieren and her fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the people around her?",
//     "imageUrl": ""
//   },
//   {
//     "id": "29",
//     "title": "Vinland Saga",
//     "releaseDate": "2019-2023",
//     "duration": "48 eps",
//     "rating": "TV-MA",
//     "imdbRating": 8.8,
//     "metascore": null,
//     "votes": "108K",
//     "genre": ["Animation", "Action", "Adventure"],
//     "director": [],
//     "writers": [],
//     "actors": ["Akio Ôtsuka", "Naoya Uchida", "Kenshô Ono", "Ken'ichirô Matsuda", "Yûto Uemura", "Aleks Le", "Shin'ya Takahashi", "Mike Haimoto"],
//     "actresses": [],
//     "story": "Following a tragedy, Thorfinn embarks on a journey with the man responsible for it to take his life in a duel as a true and honorable warrior to pay homage.",
//     "imageUrl": ""
//   },
//   {
//     "id": "30",
//     "title": "Dragon Ball Z",
//     "releaseDate": "1996-2003",
//     "duration": "277 eps",
//     "rating": "TV-PG",
//     "imdbRating": 8.8,
//     "metascore": null,
//     "votes": "166K",
//     "genre": ["Animation", "Action", "Adventure"],
//     "director": [],
//     "writers": [],
//     "actors": ["Doc Harris", "Christopher Sabat", "Scott McNeil"],
//     "actresses": [],
//     "story": "With the help of the powerful Dragonballs, a team of fighters led by the saiyan warrior Goku defend the planet earth from extraterrestrial enemies.",
//     "imageUrl": ""
//   },
//   {
//     "id": "31",
//     "title": "Steins;Gate",
//     "releaseDate": "2011-2015",
//     "duration": "26 eps",
//     "rating": "TV-14",
//     "imdbRating": 8.8,
//     "metascore": null,
//     "votes": "85K",
//     "genre": ["Animation", "Drama", "Sci-Fi"],
//     "director": [],
//     "writers": [],
//     "actors": ["Mamoru Miyano"],
//     "actresses": ["Asami Imai", "Kana Hanazawa"],
//     "story": "After discovering time travel, a university student and his colleagues must use their knowledge of it to stop an evil organization and their diabolical plans.",
//     "imageUrl": ""
//   },
//   {
//     "id": "32",
//     "title": "Fighting Spirit",
//     "releaseDate": "2000-2002",
//     "duration": "76 eps",
//     "rating": "TV-PG",
//     "imdbRating": 8.8,
//     "metascore": null,
//     "votes": "15K",
//     "genre": ["Animation", "Comedy", "Drama"],
//     "director": [],
//     "writers": [],
//     "actors": ["Rikiya Koyama", "Kôhei Kiyasu", "Steve Staley"],
//     "actresses": [],
//     "story": "Ippo, a teenage boy with a pure heart and unrelenting determination, discovers a passion for boxing after veteran fighter Takamura saves him from bullies.",
//     "imageUrl": ""
//   },
//   {
//     "id": "33",
//     "title": "One Punch Man",
//     "releaseDate": "2015-",
//     "duration": "39 eps",
//     "rating": "TV-PG",
//     "imdbRating": 8.7,
//     "metascore": null,
//     "votes": "206K",
//     "genre": ["Animation", "Action", "Comedy"],
//     "director": [],
//     "writers": ["Yusuke Murata"],
//     "actors": ["Makoto Furukawa", "Kaito Ishikawa", "Max Mittelman"],
//     "actresses": [],
//     "story": "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.",
//     "imageUrl": ""
//   },
//   {
//     "id": "34",
//     "title": "Naruto: Shippuden",
//     "releaseDate": "2007-2017",
//     "duration": "501 eps",
//     "rating": "TV-PG",
//     "imdbRating": 8.7,
//     "metascore": null,
//     "votes": "204K",
//     "genre": ["Animation", "Action", "Adventure"],
//     "director": [],
//     "writers": ["Masashi Kishimoto"],
//     "actors": ["Alexandre Crepet"],
//     "actresses": ["Junko Takeuchi", "Maile Flanagan"],
//     "story": "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
//     "imageUrl": ""
//   },
//   {
//     "id": "35",
//     "title": "Code Geass",
//     "releaseDate": "2006-2008",
//     "duration": "54 eps",
//     "rating": "TV-14",
//     "imdbRating": 8.7,
//     "metascore": null,
//     "votes": "94K",
//     "genre": ["Animation", "Drama", "Sci-Fi"],
//     "director": [],
//     "writers": ["Gorô Taniguchi", "Ichirô Ôkouchi"],
//     "actors": ["Jun Fukuyama", "Takahiro Sakurai", "Johnny Yong Bosch"],
//     "actresses": [],
//     "story": "After being given a mysterious power to control others, an outcast prince becomes the masked leader of the rebellion against an all-powerful empire.",
//     "imageUrl": ""
//   },
//   {
//     "id": "36",
//     "title": "Berserk",
//     "releaseDate": "1997-1998",
//     "duration": "25 eps",
//     "rating": "TV-MA",
//     "imdbRating": 8.7,
//     "metascore": null,
//     "votes": "69K",
//     "genre": ["Animation", "Action", "Adventure"],
//     "director": [],
//     "writers": ["Kentaro Miura"],
//     "actors": ["Nobutoshi Canna", "Toshiyuki Morikawa", "Kenji Utsumi", "Marc Diraison"],
//     "actresses": ["Yûko Miyamura", "Carrie Keranen"],
//     "story": "Guts, a wandering mercenary, joins the Band of the Hawk after being defeated in a duel by Griffith, the group's leader and founder. Together, they dominate every battle, but something menacing lurks in the shadows.",
//     "imageUrl": ""
//   },
//   {
//     "id": "37",
//     "title": "Monster",
//     "releaseDate": "2004-2005",
//     "duration": "75 eps",
//     "rating": "TV-14",
//     "imdbRating": 8.7,
//     "metascore": null,
//     "votes": "60K",
//     "genre": ["Animation", "Crime", "Drama"],
//     "director": [],
//     "writers": ["Naoki Urasawa"],
//     "actors": ["Nozomu Sasaki", "Hidenobu Kiuchi", "Liam O'Brien", "Eiji Hanawa"],
//     "actresses": [],
//     "story": "Tenma, a brilliant neurosurgeon with a promising future, risks his career to save the life of a critically wounded young boy. The boy, now a charismatic young man, reappears 9 years later in the midst of a string of unusual serial murders.",
//     "imageUrl": ""
//   },
//   {
//     "id": "38",
//     "title": "Haikyu!!",
//     "releaseDate": "2014-2020",
//     "duration": "89 eps",
//     "rating": "TV-14",
//     "imdbRating": 8.7,
//     "metascore": null,
//     "votes": "47K",
//     "genre": ["Animation", "Comedy", "Drama"],
//     "director": [],
//     "writers": ["Haruichi Furudate"],
//     "actors": ["Yu Hayashi", "Satoshi Hino", "Ayumu Murase", "Kaito Ishikawa"],
//     "actresses": [],
//     "story": "Determined to be like the volleyball championship's star player nicknamed \"the small giant\", Shoyo joins his school's volleyball club.",
//     "imageUrl": ""
//   },
//   {
//     "id": "39",
//     "title": "Gintama",
//     "releaseDate": "2005-2021",
//     "duration": "375 eps",
//     "rating": "TV-14",
//     "imdbRating": 8.7,
//     "metascore": null,
//     "votes": "19K",
//     "genre": ["Animation", "Action", "Comedy"],
//     "director": [],
//     "writers": [],
//     "actors": ["Tomokazu Sugita", "Daisuke Sakaguchi"],
//     "actresses": ["Rie Kugimiya"],
//     "story": "In an era where aliens have invaded and taken over feudal Tokyo, an unemployed samurai finds work however he can.",
//     "imageUrl": ""
//   },
//   {
//     "id": "40",
//     "title": "Demon Slayer: Kimetsu no Yaiba",
//     "releaseDate": "2019-2024",
//     "duration": "69 eps",
//     "rating": "TV-MA",
//     "imdbRating": 8.6,
//     "metascore": null,
//     "votes": "196K",
//     "genre": ["Animation", "Action", "Adventure"],
//     "director": [],
//     "writers": [],
//     "actors": ["Takahiro Sakurai", "Toshihiko Seki", "Hôchû Ôtsuka", "Hiro Shimono", "Satoshi Hino", "Yoshitsugu Matsuoka"],
//     "actresses": ["Shizuka Ishigami", "Akari Kitô"],
//     "story": "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
//     "imageUrl": ""
//   }
// ]









//K-drama 



// [
//   {
//     "id": "41",
//     "title": "While You Were Sleeping",
//     "releaseDate": "2017",
//     "duration": "32 eps",
//     "rating": "Not Rated",
//     "imdbRating": 8.3,
//     "metascore": null,
//     "votes": "12K",
//     "genre": ["Drama", "Fantasy", "Romance"],
//     "director": [],
//     "writers": [],
//     "actors": ["Lee Jong-suk", "Jung Hae-in"],
//     "actresses": ["Bae Suzy"],
//     "story": "The drama is about a woman, Nam Hong Joo, who can see accidents that take place in the future through her dreams. And a prosecutor, Jung Jae Chan, who struggles to stop the woman's dreams from coming true.",
//     "imageUrl": ""
//   },
//   {
//     "id": "42",
//     "title": "Kill Me, Heal Me",
//     "releaseDate": "2015",
//     "duration": "20 eps",
//     "rating": "Not Rated",
//     "imdbRating": 8.3,
//     "metascore": null,
//     "votes": "6.8K",
//     "genre": ["Drama", "Romance", "Comedy"],
//     "director": [],
//     "writers": [],
//     "actors": ["Ji Sung", "Park Seo-joon"],
//     "actresses": ["Hwang Jeong-eum"],
//     "story": "A love story between the son from a wealthy family who has 7 personalities Cha Do Hyun and Oh Ri Jin who becomes his secret psychiatrist.",
//     "imageUrl": ""
//   },
//   {
//     "id": "43",
//     "title": "Secret Garden",
//     "releaseDate": "2010-2011",
//     "duration": "20 eps",
//     "rating": "Not Rated",
//     "imdbRating": 8.0,
//     "metascore": null,
//     "votes": "8.3K",
//     "genre": ["Drama", "Romance", "Fantasy"],
//     "director": [],
//     "writers": [],
//     "actors": ["Hyun Bin", "Yoon Sang-Hyun"],
//     "actresses": ["Ha Ji-Won"],
//     "story": "Gil Ra-im is a tough stuntwoman with a soft heart. Kim Joo-won is a nit-picky CEO with a long list of complexes. Love-struck, Joo-won barges into Ra-im's life in all the wrong ways, trying to make sense of his illogical feelings.",
//     "imageUrl": ""
//   },
//   {
//     "id": "44",
//     "title": "W",
//     "releaseDate": "2016",
//     "duration": "17 eps",
//     "rating": "Not Rated",
//     "imdbRating": 8.0,
//     "metascore": null,
//     "votes": "17K",
//     "genre": ["Drama", "Romance", "Fantasy"],
//     "director": [],
//     "writers": [],
//     "actors": ["Lee Jong-suk", "Lee Chae-kyung"],
//     "actresses": ["Han Hyo-joo"],
//     "story": "Yeon-joo discovers that W, a webtoon created by her father, is a living world and saves the protagonist, Kang Chul. A confused Kang Chul falls in love with her and follows her to the real world.",
//     "imageUrl": ""
//   },
//   {
//     "id": "45",
//     "title": "Guardian: The Lonely and Great God",
//     "releaseDate": "2016-2017",
//     "duration": "16 eps",
//     "rating": "TV-14",
//     "imdbRating": 8.6,
//     "metascore": null,
//     "votes": "34K",
//     "genre": ["Drama", "Romance", "Fantasy"],
//     "director": [],
//     "writers": [],
//     "actors": ["Gong Yoo", "Lee Dong-wook"],
//     "actresses": ["Kim Go-eun"],
//     "story": "In his quest for a bride to break his immortal curse, Dokkaebi, a 939-year-old guardian of souls, meets a grim reaper and a sprightly student with a tragic past.",
//     "imageUrl": ""
//   },
//   {
//     "id": "46",
//     "title": "Defendant",
//     "releaseDate": "2017",
//     "duration": "18 eps",
//     "rating": "Not Rated",
//     "imdbRating": 8.0,
//     "metascore": null,
//     "votes": "2.3K",
//     "genre": ["Drama", "Thriller", "Mystery"],
//     "director": [],
//     "writers": [],
//     "actors": ["Ji Sung", "Uhm Ki-joon"],
//     "actresses": ["Seo Jung-yeon"],
//     "story": "A prosecutor has lost his memory and discovers that he is convicted on death row. He is now left with no option but to find the truth behind his condition and prove his innocence.",
//     "imageUrl": ""
//   },
//   {
//     "id": "47",
//     "title": "My Love from Another Star",
//     "releaseDate": "2013-2014",
//     "duration": "22 eps",
//     "rating": "Not Rated",
//     "imdbRating": 8.2,
//     "metascore": null,
//     "votes": "18K",
//     "genre": ["Drama", "Romance", "Fantasy"],
//     "director": [],
//     "writers": [],
//     "actors": ["Kim Soo-hyun", "Park Hae-jin"],
//     "actresses": ["Jun Ji-hyun"],
//     "story": "Do Min-Joon, an alien that came to our planet 400 years ago, will be able to return to his planet in 3 months, but when he meets famous actress Chun Song-Yi, all the centuries he spent distancing himself from humans come to an end.",
//     "imageUrl": ""
//   },
//   {
//     "id": "48",
//     "title": "Ghost",
//     "releaseDate": "2012",
//     "duration": "20 eps",
//     "rating": "Not Rated",
//     "imdbRating": 7.8,
//     "metascore": null,
//     "votes": "700",
//     "genre": ["Drama", "Crime", "Thriller"],
//     "director": [],
//     "writers": [],
//     "actors": ["Kim Yun-tae", "So Ji-seob"],
//     "actresses": ["Song Ha-yoon"],
//     "story": "Kim Woo Hyun is the only son of a high-ranking police officer. He graduates police academy with honors. After being assigned to the CID, he finds himself entrenched in a cat and mouse game with a faceless enemy in the cyber world.",
//     "imageUrl": ""
//   },
//   {
//     "id": "49",
//     "title": "Descendants of the Sun",
//     "releaseDate": "2016",
//     "duration": "19 eps",
//     "rating": "TV-14",
//     "imdbRating": 8.2,
//     "metascore": null,
//     "votes": "26K",
//     "genre": ["Drama", "Romance", "Action"],
//     "director": [],
//     "writers": [],
//     "actors": ["Song Joong-ki", "Jin Goo"],
//     "actresses": ["Song Hye-kyo"],
//     "story": "This drama tells of the love story that develops between a surgeon and a special forces officer.",
//     "imageUrl": ""
//   },
//   {
//     "id": "50",
//     "title": "Fight for My Way",
//     "releaseDate": "2017",
//     "duration": "16 eps",
//     "rating": "Not Rated",
//     "imdbRating": 8.1,
//     "metascore": null,
//     "votes": "11K",
//     "genre": ["Drama", "Romance", "Comedy"],
//     "director": [],
//     "writers": [],
//     "actors": ["Park Seo-joon", "Ahn Jae-hong"],
//     "actresses": ["Kim Ji-won"],
//     "story": "Ko Dong Man, a former taekwondo champion, and Choi Ae Ra, a receptionist, struggle to follow their dreams as life throws obstacles in their path.",
//     "imageUrl": ""
//   },
//   {
//     "id": "51",
//     "title": "It's Okay, That's Love",
//     "releaseDate": "2014",
//     "duration": "16 eps",
//     "rating": "TV-14",
//     "imdbRating": 8.3,
//     "metascore": null,
//     "votes": "5K",
//     "genre": ["Drama", "Romance", "Medical"],
//     "director": [],
//     "writers": [],
//     "actors": ["Sung Dong-il", "Lee Kwang-soo", "Jin Kyung"],
//     "actresses": [],
//     "story": "A love story between a psychiatrist named Ji Hae Soo and an author who had schizophrenia named Jang Jae Yeol.",
//     "imageUrl": ""
//   },
//   {
//     "id": "52",
//     "title": "49 Days",
//     "releaseDate": "2011",
//     "duration": "20 eps",
//     "rating": "Not Rated",
//     "imdbRating": 7.9,
//     "metascore": null,
//     "votes": "1.7K",
//     "genre": ["Drama", "Fantasy", "Romance"],
//     "director": [],
//     "writers": [],
//     "actors": ["Jo Hyeon-jae"],
//     "actresses": ["Lee Yo-won", "Nam Gyu-ri"],
//     "story": "After an accident shatters her storybook life, a comatose woman gets a second chance at life when a reaper from above intervenes, at a cost.",
//     "imageUrl": ""
//   },
//   {
//     "id": "53",
//     "title": "Familiar Wife",
//     "releaseDate": "2018",
//     "duration": "16 eps",
//     "rating": "Not Rated",
//     "imdbRating": 7.7,
//     "metascore": null,
//     "votes": "1.8K",
//     "genre": ["Drama", "Romance", "Fantasy"],
//     "director": [],
//     "writers": [],
//     "actors": ["Ji Sung"],
//     "actresses": ["Han Ji-min", "Kang Han-na"],
//     "story": "A married couple suddenly finds themselves living entirely different lives after their fates magically change through an unexpected incident.",
//     "imageUrl": ""
//   },
//   {
//     "id": "54",
//     "title": "SKY Castle",
//     "releaseDate": "2018-2019",
//     "duration": "20 eps",
//     "rating": "Not Rated",
//     "imdbRating": 8.5,
//     "metascore": null,
//     "votes": "4.9K",
//     "genre": ["Drama", "Comedy", "Family"],
//     "director": [],
//     "writers": [],
//     "actors": ["Jeong Jun-ho"],
//     "actresses": ["Yum Jung-ah", "Lee Tae-ran", "Kim Seo-hyeong", "Yun Se-ah", "Oh Na-ra"],
//     "story": "A satirical drama that closely looks at the materialistic desires of upper-class parents in South Korea and how they ruthlessly secure the successes of their families at the cost of destroying others' lives.",
//     "imageUrl": ""
//   },
//   {
//     "id": "55",
//     "title": "Memories of the Alhambra",
//     "releaseDate": "2018-2019",
//     "duration": "16 eps",
//     "rating": "TV-MA",
//     "imdbRating": 7.7,
//     "metascore": null,
//     "votes": "7.9K",
//     "genre": ["Drama", "Romance", "Sci-Fi"],
//     "director": [],
//     "writers": [],
//     "actors": ["Hyun Bin", "Min Jin-woong"],
//     "actresses": ["Park Shin-hye"],
//     "story": "After suffering a setback following a friend's betrayal Yoo Jin Woo travels to Spain on a business. There, he stays at an old hostel owned by a former classical guitarist Jung Hee Joo. The two get entangled in a mysterious incident.",
//     "imageUrl": ""
//   },
//   {
//     "id": "56",
//     "title": "My Secret Terrius",
//     "releaseDate": "2018",
//     "duration": "32 eps",
//     "rating": "TV-14",
//     "imdbRating": 7.6,
//     "metascore": null,
//     "votes": "1.9K",
//     "genre": ["Drama", "Romance", "Action"],
//     "director": [],
//     "writers": [],
//     "actors": ["So Ji-seob", "Son Ho-joon"],
//     "actresses": ["Jung In-sun", "Im She-mi"],
//     "story": "Go Ae Rin suddenly loses her husband. A mysterious man, Kim Bon, lives next door. Kim Bon is a legendary NIS agent. He helps Ae Rin uncover a conspiracy, which husband became involved with.",
//     "imageUrl": ""
//   },
//   {
//     "id": "57",
//     "title": "Hotel Del Luna",
//     "releaseDate": "2019",
//     "duration": "16 eps",
//     "rating": "Not Rated",
//     "imdbRating": 8.1,
//     "metascore": null,
//     "votes": "17K",
//     "genre": ["Drama", "Fantasy", "Romance"],
//     "director": [],
//     "writers": [],
//     "actors": ["Yeo Jin-goo", "Shin Jeong-geun", "Pyo Ji-hoon"],
//     "actresses": ["IU", "Bae Hae-sun", "Kang Mi-na"],
//     "story": "When he's invited to manage a hotel for dead souls, an elite hotelier gets to know the establishment's ancient owner and her strange world.",
//     "imageUrl": ""
//   },
//   {
//     "id": "58",
//     "title": "Crash Landing on You",
//     "releaseDate": "2019-2020",
//     "duration": "19 eps",
//     "rating": "TV-14",
//     "imdbRating": 8.7,
//     "metascore": null,
//     "votes": "53K",
//     "genre": ["Drama", "Romance", "Comedy"],
//     "director": [],
//     "writers": [],
//     "actors": ["Hyun Bin"],
//     "actresses": ["Son Ye-jin", "Seo Ji-hye"],
//     "story": "The absolute top secret love story of a chaebol heiress who made an emergency landing in North Korea because of a paragliding accident and a North Korean special officer who falls in love with her and who is hiding and protecting her.",
//     "imageUrl": ""
//   },
//   {
//     "id": "59",
//     "title": "Itaewon Class",
//     "releaseDate": "2020",
//     "duration": "16 eps",
//     "rating": "TV-MA",
//     "imdbRating": 8.1,
//     "metascore": null,
//     "votes": "23K",
//     "genre": ["Drama", "Romance", "Business"],
//     "director": [],
//     "writers": ["Gwang Jin"],
//     "actors": ["Park Seo-joon", "Kim Dong-Hee", "Chris Lyon", "Ryu Kyung-soo", "Yoo Jae-myung"],
//     "actresses": ["Kim Da-mi", "Lee Joo-young"],
//     "story": "An ex-con opens a street bar in Itaewon, while also seeking revenge on the family who was responsible for his father's death.",
//     "imageUrl": ""
//   },
//   {
//     "id": "60",
//     "title": "Prison Playbook",
//     "releaseDate": "2017-2018",
//     "duration": "16 eps",
//     "rating": "Not Rated",
//     "imdbRating": 8.4,
//     "metascore": null,
//     "votes": "5.7K",
//     "genre": ["Drama", "Comedy", "Sports"],
//     "director": [],
//     "writers": [],
//     "actors": [],
//     "actresses": [],
//     "story": "Baseball pitcher Kim Je-hyeok becomes a convict overnight after being sent to prison for defending his sister from a sexual assault, days before he was due to fly to the US to join the Boston Red Sox.",
//     "imageUrl": ""
//   }
// ]





//Top mixed ER




// [
//   {
//     "id": "61",
//     "title": "Dark",
//     "releaseDate": "2017-2020",
//     "duration": "26 eps",
//     "rating": "TV-MA",
//     "imdbRating": 8.7,
//     "metascore": null,
//     "votes": "502K",
//     "genre": ["Drama", "Mystery", "Sci-Fi"],
//     "director": ["Baran bo Odar"],
//     "writers": ["Baran bo Odar", "Jantje Friese"],
//     "actors": ["Louis Hofmann"],
//     "actresses": ["Karoline Eichhorn", "Lisa Vicari"],
//     "story": "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
//     "imageUrl": ""
//   },
//   {
//     "id": "62",
//     "title": "Mr. Robot",
//     "releaseDate": "2015-2019",
//     "duration": "45 eps",
//     "rating": "TV-MA",
//     "imdbRating": 8.5,
//     "metascore": null,
//     "votes": "350K",
//     "genre": ["Drama", "Crime", "Thriller"],
//     "director": [],
//     "writers": ["Sam Esmail"],
//     "actors": ["Rami Malek", "Christian Slater"],
//     "actresses": ["Carly Chaikin", "Portia Doubleday"],
//     "story": "Elliot, a young programmer who works as a cyber-security engineer by day and a vigilante hacker by night, finds himself at a crossroads when the mysterious leader of an underground hacker group recruits him to destroy the firm he is paid to protect.",
//     "imageUrl": ""
//   },
//   {
//     "id": "63",
//     "title": "Game of Thrones",
//     "releaseDate": "2011-2019",
//     "duration": "73 eps",
//     "rating": "TV-MA",
//     "imdbRating": 9.2,
//     "metascore": null,
//     "votes": "2.5M",
//     "genre": ["Action", "Adventure", "Drama"],
//     "director": [],
//     "writers": ["David Benioff", "D.B. Weiss"],
//     "actors": ["Peter Dinklage", "Kit Harington", "Nikolaj Coster-Waldau"],
//     "actresses": ["Emilia Clarke", "Lena Headey", "Sophie Turner"],
//     "story": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
//     "imageUrl": ""
//   },
//   {
//     "id": "64",
//     "title": "One Piece",
//     "releaseDate": "1999-",
//     "duration": "1100+ eps",
//     "rating": "TV-14",
//     "imdbRating": 9.0,
//     "metascore": null,
//     "votes": "315K",
//     "genre": ["Animation", "Action", "Adventure"],
//     "director": [],
//     "writers": ["Eiichiro Oda"],
//     "actors": ["Mayumi Tanaka", "Akemi Okamura", "Kazuya Nakai"],
//     "actresses": [],
//     "story": "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named 'One Piece'.",
//     "imageUrl": ""
//   },
//   {
//     "id": "65",
//     "title": "Vinland Saga",
//     "releaseDate": "2019-2023",
//     "duration": "48 eps",
//     "rating": "TV-MA",
//     "imdbRating": 8.8,
//     "metascore": null,
//     "votes": "108K",
//     "genre": ["Animation", "Action", "Adventure"],
//     "director": [],
//     "writers": ["Makoto Yukimura"],
//     "actors": ["Yuto Uemura", "Shin-ya Takahashi"],
//     "actresses": [],
//     "story": "Following a tragedy, Thorfinn embarks on a journey with the man responsible for it to take his life in a duel as a true and honorable warrior to pay homage.",
//     "imageUrl": ""
//   },
//   {
//     "id": "66",
//     "title": "Attack on Titan",
//     "releaseDate": "2013-2023",
//     "duration": "98 eps",
//     "rating": "TV-MA",
//     "imdbRating": 9.1,
//     "metascore": null,
//     "votes": "635K",
//     "genre": ["Animation", "Action", "Adventure"],
//     "director": [],
//     "writers": ["Hajime Isayama"],
//     "actors": ["Bryce Papenbrook", "Trina Nishimura"],
//     "actresses": ["Jessica Calvello"],
//     "story": "After his hometown is destroyed and mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
//     "imageUrl": ""
//   },
//   {
//     "id": "67",
//     "title": "Avatar: The Last Airbender",
//     "releaseDate": "2005-2008",
//     "duration": "61 eps",
//     "rating": "TV-Y7",
//     "imdbRating": 9.3,
//     "metascore": null,
//     "votes": "394K",
//     "genre": ["Animation", "Action", "Adventure"],
//     "director": ["Michael Dante DiMartino", "Bryan Konietzko"],
//     "writers": ["Michael Dante DiMartino", "Bryan Konietzko"],
//     "actors": ["Zach Tyler", "Mae Whitman", "Jack De Sena"],
//     "actresses": ["Mae Whitman"],
//     "story": "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
//     "imageUrl": ""
//   },
//   {
//     "id": "68",
//     "title": "Avengers: Endgame",
//     "releaseDate": "2019",
//     "duration": "181 min",
//     "rating": "PG-13",
//     "imdbRating": 8.4,
//     "metascore": 78,
//     "votes": "1.2M",
//     "genre": ["Action", "Adventure", "Drama"],
//     "director": ["Anthony Russo", "Joe Russo"],
//     "writers": ["Christopher Markus", "Stephen McFeely"],
//     "actors": ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
//     "actresses": ["Scarlett Johansson", "Brie Larson"],
//     "story": "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
//     "imageUrl": ""
//   },
//   {
//     "id": "69",
//     "title": "Spider-Man: No Way Home",
//     "releaseDate": "2021",
//     "duration": "148 min",
//     "rating": "PG-13",
//     "imdbRating": 8.2,
//     "metascore": 71,
//     "votes": "853K",
//     "genre": ["Action", "Adventure", "Fantasy"],
//     "director": ["Jon Watts"],
//     "writers": ["Chris McKenna", "Erik Sommers"],
//     "actors": ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
//     "actresses": ["Zendaya", "Marisa Tomei"],
//     "story": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
//     "imageUrl": ""
//   },
//   {
//     "id": "70",
//     "title": "Vincenzo",
//     "releaseDate": "2021",
//     "duration": "20 eps",
//     "rating": "TV-MA",
//     "imdbRating": 8.4,
//     "metascore": null,
//     "votes": "28K",
//     "genre": ["Action", "Comedy", "Crime"],
//     "director": [],
//     "writers": ["Park Jae-bum"],
//     "actors": ["Song Joong-ki", "Ok Taec-yeon"],
//     "actresses": ["Jeon Yeo-been"],
//     "story": "During a visit to his motherland, a Korean-Italian mafia lawyer gives a conglomerate a taste of its own medicine with a side of justice.",
//     "imageUrl": ""
//   },
//   {
//     "id": "71",
//     "title": "All of Us Are Dead",
//     "releaseDate": "2022",
//     "duration": "12 eps",
//     "rating": "TV-MA",
//     "imdbRating": 7.5,
//     "metascore": null,
//     "votes": "89K",
//     "genre": ["Action", "Drama", "Horror"],
//     "director": [],
//     "writers": ["Chun Sung-il", "Joo Dong-geun"],
//     "actors": ["Park Ji-hoo", "Yoon Chan-young", "Cho Yi-hyun"],
//     "actresses": ["Park Ji-hoo", "Cho Yi-hyun"],
//     "story": "A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out — or turn into one of the rabid infected.",
//     "imageUrl": ""
//   },
//   {
//     "id": "72",
//     "title": "Squid Game",
//     "releaseDate": "2021-2025",
//     "duration": "17 eps",
//     "rating": "TV-MA",
//     "imdbRating": 8.0,
//     "metascore": null,
//     "votes": "709K",
//     "genre": ["Action", "Drama", "Mystery"],
//     "director": [],
//     "writers": ["Hwang Dong-hyuk"],
//     "actors": ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-joon"],
//     "actresses": ["Jung Ho-yeon", "Kim Joo-ryung"],
//     "story": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
//     "imageUrl": ""
//   }
// ]














const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});