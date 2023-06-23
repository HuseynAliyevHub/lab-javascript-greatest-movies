// Iteration 1: All directors? - Get the array of all directors.


function getAllDirectors(movies) {
  let arrayDirector = [];
  arrayDirector = movies.map(movies => movies.director);
  return arrayDirector;
}

console.log(getAllDirectors());



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    let arrayDirector = [];
    arrayDirector = movies.map(movies => movies.director);
    arrayDirector = [...new Set(arrayDirector)];
    return arrayDirector;
  }
  
  console.log(getAllDirectors());




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies() {
    result = movies.filter(value => value.director === 'Steven Spielberg'
    && value.genre.includes('Drama'));
    return result.length;
   }
   
   console.log(howManyMovies())



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  const sum = movies.map(element => element.score).reduce((a, b) => a + b, 0);
  const average = sum / movies.length;
  return Number(average.toFixed(2))
}

console.log(scoresAverage())


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  let average = 0;
  for (i = 0; i < movies.length; i++) {
  if (movies[i].genre === "Drama") {
  average += movies[i].score / movies.length;
}  
}  return average.toFixed(2)
}

console.log(dramaMoviesScore())

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  movies.sort((a, b) => a.year - b.year);
  return movies
}

console.log(orderByYear())



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  for (i = 0; i < movies.length; i++) {
    movies.sort((a, b) => a.title.localeCompare(b.title));
    return movies;
  }
}


console.log(orderAlphabetically())



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
  const convertToMinutes = (timeStr) => {
  const [ , hours, mins ] = timeStr.match(/(?:(\d)h )?(\d+)min/).map(v => parseInt(v, 10));
  return hours * 60 + mins;
}

const moviesWithNewDurations = moviesArray.map(movie => ({
  ...movie,
  duration: convertToMinutes(movie.duration)
}));

return moviesWithNewDurations;
}

console.log(turnHoursToMinutes())



// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {
  
}
