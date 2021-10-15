
"use strict";

/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */

const pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon');
// return of fetch request is a Promise object

//TODO: console log the results of the above Promise. What is the result?

console.log(pokemonAPI);

//TODO: add a method that runs if the Promise resolves successfully

pokemonAPI.then(response => response.json().then(jsonResponseData => console.log(jsonResponseData)));

// pokemonAPI.then(response => console.log(response.json()));

//TODO: add a method that runs if the Promise fails

pokemonAPI.catch(reason => console.log(reason));

//TODO: In the callback function of the .then method, parse the response into JSON


/*********************************************
 *              CHAINING PROMISES
 ******************************************** */

// TODO: Using Promise chaining, add another .then method that returns the results property of
//  the first returned response.
//    Taking a look at this second return, what are the results? What is the shape of our data?

let chainingPokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => {return response.json()})
    .then(jsonData => {return jsonData.results})
    .then(results => results.forEach(result => console.log(result.name)));

// TODO: Finally, chain another .then method that would log all of the name properties of the
//  returned pokemon.
// BONUS: Is there a way for us to clean up our code?

const starWarsAPI = fetch("https://swapi.dev/api/films");

// Let's try working with the Star Wars API!

console.log(`starWarsAPI Promise`, starWarsAPI);

// TODO: Using Promises, make a fetch request to the Star Wars API

// TODO: Use Promise chaining to console log the json response

// TODO: chain another method that iterates through the results array and console logs the names

let chainingStarWarsAPI = fetch("https://swapi.dev/api/films")
    .then(response => {return response.json()})
    .then(jsonData => {
        console.log(jsonData);
        return jsonData.results;
    })
    .then(results => {
        results.forEach(film => console.log(`${film.title} ${film.episode_id}`))
    });

// TODO: Demonstrate Promise.all and Promise.race

// Promise.all([starWarsAPI, pokemonAPI])
//     .then(response => {
//         console.log(response);
//     });

Promise.all([pokemonAPI,starWarsAPI])
    .then((responses) =>{
        // responses contain the resolved promises  in the same order that they were passed into the all method
        // you don't have to do this
        // console.log(responses[0].json().then(parsedData => console.log(parsedData)));
        return Promise.all(
            responses.map(response => {
                return response.json();
            })
        )
    }).then((parsedResults) =>console.log(parsedResults));

Promise.race([starWarsAPI, pokemonAPI])
    .then(response => {
        console.log(response);
    });