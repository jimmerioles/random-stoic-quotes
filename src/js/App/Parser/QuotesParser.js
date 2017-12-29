import Quote from '../Quote.js'

/*
* Parses JSON API v1 compliant data.
. *
* @author Jim Merioles <jimwisleymerioles@gmail.com>
*/
class QuotesParser {

    /*
    * Create QuotesParser instance.
    *
    * @param {Object} quote - Quote model instance.
    */
    constructor(quote = new Quote()) {
        console.log(`${performance.now() - APP_START}: QuotesParser@constructor()`);//

        this.quote = quote;
    }

    /*
    * Parses json data to array of quotes model.
    *
    * @param {json|string} json - JSON data from endpoint.
    * @return {array} Array of quotes model.
    */
    toQuotesArray(json) {
        console.log(`${performance.now() - APP_START}: QuotesParser@toQuotesArray()`);//

        let quotesArray = [];
        let quotes = json.data;
        let authors = json.included.filter((each) => each.type == 'author');

        for(let quote of quotes) {
            let author = this.findAuthorOf(quote, authors);
            quotesArray.push(new Quote(quote.attributes.text, author.attributes.name, author.attributes.image));
        }

        return quotesArray;
    }

    /*
    * Find author of quote.
    *
    * @param {Object|json} quote - Quote looking for author.
    * @param {array|json} authors - List of authors.
    * @return {Object|json} The author.
    */
    findAuthorOf(quote, authors) {
        console.log(`${performance.now() - APP_START}: QuotesParser@findAuthorOf()`);//

        let author = authors.filter(each => each.id === quote.relationships.author.data.id);

        return author[0];
    }
}

export default QuotesParser;
