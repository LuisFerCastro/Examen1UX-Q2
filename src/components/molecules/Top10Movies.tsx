export interface Movie {
  id: number;
  title: string;
  image: string;
}

export const top10Movies: Movie[] = [
  { id: 1, title: "Dune", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg" },
  { id: 2, title: "Oppenheimer", image: "https://www.hollywoodreporter.com/wp-content/uploads/2022/07/Oppenheimer-Movie-Poster-Universal-Publicity-EMBED-2022-.jpg?w=1000" },
  { id: 3, title: "The Batman", image: "/images/batman.jpg" },
  { id: 4, title: "Avatar 2", image: "https://lumiere-a.akamaihd.net/v1/images/p_20cs_avatarwayofwater_mayupdate_1710_260aa445.jpeg" },
  { id: 5, title: "Barbie", image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg" },
  { id: 6, title: "John Wick 4", image: "https://m.media-amazon.com/images/I/81J1DaRKzUL._AC_UF894,1000_QL80_.jpg" },
  { id: 7, title: "The Flash", image: "https://m.media-amazon.com/images/M/MV5BYmE2NzBjNGUtNTJiMy00N2UxLWEyYzMtYzFjODFhMGZlOTgzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { id: 8, title: "Spider-Man: No Way Home", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Spider-Man_No_Way_Home_%E2%80%93_The_More_Fun_Stuff_Version_poster.jpeg/250px-Spider-Man_No_Way_Home_%E2%80%93_The_More_Fun_Stuff_Version_poster.jpeg" },
  { id: 9, title: "Guardians 3", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Guardians_of_the_Galaxy_Vol._3_poster.jpg/250px-Guardians_of_the_Galaxy_Vol._3_poster.jpg" },
  { id: 10, title: "Fast X", image: "https://play-lh.googleusercontent.com/6Z3I7X5xgf0gambPpziJhZSpR7mcGhNApp6PDChmhZosjE5TrVd31V7ZosjgbzrXU2TMoBGtV7uJw1CG1dM=w240-h480-rw" },
];
