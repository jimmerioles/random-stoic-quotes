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
        console.log(`${performance.now() - APP_START}: QuoteText@constructor()`);//

        this.el = el;
    }

    /*
    * Run actions before load.
    */
    runPreLoadActions() {
        console.log(`${performance.now() - APP_START}: QuoteText@runPreLoadActions()`);//

        this.el.style.opacity = 0;
    }

    /*
    * Get animation settings for intro.
    *
    * @return {Object} The animation settings.
    */
    introAnimationSettings() {
        console.log(`${performance.now() - APP_START}: QuoteText@introAnimationSettings()`);//

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
        console.log(`${performance.now() - APP_START}: QuoteText@outroAnimationSettings()`);//

        return {
            targets: this.el,
            opacity: [ {  value: 0, easing: 'easeOutSine' } ],
            duration: 400,
            offset: 0
        };
    }
}

export default QuoteText;
