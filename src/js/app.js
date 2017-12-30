/*
* Entry point for Random Stoic Quotes Generator app. Consumes quotes from
* Random Stoic Quotes API <https://randomstoicquotesapi.herokuapp.com>.
*
* Thank you for checking out the source! :) #ImAvailableForHire!
*
* @author Jim Merioles <jimwisleymerioles@gmail.com>
*/
import RandomStoicQuotes from './App/RandomStoicQuotes.js';

let app = new RandomStoicQuotes();

app.inspire();
