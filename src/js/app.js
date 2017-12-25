/*
* Random Stoic Quotes - consumes quotes from Random Stoic Quotes API
* <https://randomstoicquotesapi.herokuapp.com/>
*
* @author Jim Merioles <jimwisleymerioles@gmail.com>
*/
window.APP_START = performance.now();//
console.log(`${window.APP_START}: app.js start`)//

import RandomStoicQuotes from './RandomStoicQuotes.js';

let app = new RandomStoicQuotes();

app.inspire();
