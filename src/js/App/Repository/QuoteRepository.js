import QuotesParser from '../Parser/QuotesParser.js';
import QuotesProvider from '../Provider/QuotesProvider.js';

/*
* Retrieves quotes from source.
. *
* @author Jim Merioles <jimwisleymerioles@gmail.com>
*/
class QuoteRepository {
    /*
    * Create QuoteRepository instance.
    *
    * @param {Object} parser - QuotesParser instance.
    * @param {Object} quoteProvider - QuotesProvider instance.
    */
    constructor(parser = new QuotesParser(), quotesProvider = new QuotesProvider()) {
        this.parser = parser;
        this.quotesProvider = quotesProvider;
    }

    /*
    * Run actions before load.
    */
    runPreLoadActions() {
        if(!sessionStorage.getItem('jsonQuotes')) {
            this.quotesProvider.fetchQuotes().then(json => sessionStorage.setItem('jsonQuotes', JSON.stringify(json)));
        }
    }

    /*
    * Get a random quote.
    *
    * @return {Object} Quote model instance.
    */
    getRandom() {
        let jsonQuotes = JSON.parse(sessionStorage.getItem('jsonQuotes'));
        let quotes = this.parser.toQuotesArray(jsonQuotes);

        return quotes[this.randomNumber(quotes.length - 1)];
    }

    /*
    * Generate random number.
    *
    * @param {number} max - Random number limit.
    */
    randomNumber(max) {
        return Math.floor(Math.random() * (Math.floor(max) + 1));
    }
}

export default QuoteRepository;
