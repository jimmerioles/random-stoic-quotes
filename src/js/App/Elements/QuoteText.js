/*
* Represents the quote text element of the app.
*
* @author Jim Merioles <jimwisleymerioles@gmail.com>
*/
class QuoteText {
    /*
    * Create QuoteText instance.
    *
    * @param {Object} el - QuoteText's element.
    */
    constructor(el = document.getElementById('quote__text')) {
        this.el = el;
    }

    /*
    * Run actions before load.
    */
    runPreLoadActions() {
        this.el.style.opacity = 0;
    }

    /*
    * Get animation settings for intro.
    *
    * @return {Object} The animation settings.
    */
    introAnimationSettings() {
        return {
            targets: this.el,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            duration: 400,
            offset: '-=100'
        };
    }


    /*
    * Get animation settings for outro.
    *
    * @return {Object} The animation settings.
    */
    outroAnimationSettings() {
        return {
            targets: this.el,
            opacity: [ {  value: 0, easing: 'easeOutSine' } ],
            duration: 400,
            offset: 0
        };
    }

    /*
    * Set new quote.
    *
    * @param {string} The new quote.
    */
    setContent(text) {
        this.el.firstElementChild.innerHTML = text;
    }
}

export default QuoteText;
