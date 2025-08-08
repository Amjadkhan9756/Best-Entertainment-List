require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Content = require("./schemas/ContentSchema.js");

const app = express();
app.use(express.json());

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






























const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});