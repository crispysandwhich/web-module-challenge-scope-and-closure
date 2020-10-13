// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * the count variable is inside the function and the return is inside the function in counter 1 
 * 2. Which of the two uses a closure? How can you tell?
 * count 1 uses closure because it uses a function within a function
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter 1 code code be preferable when you are trying to create a dedicade counter function, in counter 2 its best when you are you just want to use want to call the counter function eatch time.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(numberOfInnings){
    const points = 0;
    for (let i = 1; i < numberOfInnings;i++){
      points += Math.ceil(Math.random() * 2);
    }
    return points;

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numberOfInnings){

  /*Code Here*/
  return {
    "home:": inning(numberOfInnings),
    "away:": inning(numberOfInnings)
  }

}

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(getInningScore, inning, numberOfInnings) {
  const retVar = `${i}th inning: ${getInningScore(inning(numberOfInnings))}`;

  for (let i = 1; i<= numberOfInnings;i++){

    if(i === 1){
      console.log(`${i}st inning: ${getInningScore(inning(numberOfInnings))}`)
    }else if(i === 2){
      console.log(`${i}nd inning: ${getInningScore(inning(numberOfInnings))}`)
    }else if (i === 3){
      console.log(`${i}rd inning: ${getInningScore(inning(numberOfInnings))}`)
    }else if (i === numberOfinnings){
      console.log(`Final Score: ${getInningScore(inning(numberOfInnings))}`)
    }else{
      console.log(retVar)
    }
  }
}


