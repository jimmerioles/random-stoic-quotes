/*
* Represents the quote model of the app.
. *
* @author Jim Merioles <jimwisleymerioles@gmail.com>
*/
class Quote {

    /*
    * Create Quote instance.
    *
    * @param {string} text - Text of the quote.
    * @param {string} author - Author of the quote.
    * @param {string} image - Image of the quote.
    */
    constructor(text = undefined, author = undefined, image = undefined) {
        this.text = text;
        this.author = author;
        this.image = image;
    }

    /*
    * Create Quote with given attributes.
    *
    * @param {array} attributes - Attributes of the quote.
    */
    create(attributes) {
        this.text = attributes['text'];
        this.author = attributes['author'];
        this.image = attributes['image'];

        return this;
    }
}

export default Quote;
