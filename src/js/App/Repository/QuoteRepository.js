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
        console.log(`${performance.now() - APP_START}: QuoteRepository@constructor()`);//

        this.parser = parser;
        this.quotesProvider = quotesProvider;
    }

    /*
    * Run actions before load.
    */
    runPreLoadActions() {
        console.log(`${performance.now() - APP_START}: QuoteRepository@runPreLoadActions()`);//

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
        console.log(`${performance.now() - APP_START}: QuoteRepository@getRandom()`);//

        let jsonQuotes = JSON.parse(sessionStorage.getItem('jsonQuotes'));
        let quotes = this.parser.toQuotesArray(jsonQuotes);

        return quotes[this.randomNumber(quotes.length - 1)];
    }

    randomNumber(max) {
        console.log(`${performance.now() - APP_START}: QuoteRepository@randomNumber()`);//

        max = Math.floor(max);
        return Math.floor(Math.random() * (max - 0 + 1)) + 0;
    }
}

export default QuoteRepository;
