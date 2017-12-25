/*
* Represents the quote citation element of the app.
*
* @author Jim Merioles <jimwisleymerioles@gmail.com>
*/
class QuoteCitation {
    /*
    * Create QuoteCitation instance.
    *
    * @param {Object} el - QuoteCitation's element.
    */
    constructor(el = document.getElementById('quote__citation')) {
        console.log(`${performance.now() - APP_START}: QuoteCitation@constructor()`);//

        this.el = el;
    }

    /*
    * Run actions before load.
    */
    runPreLoadActions() {
        console.log(`${performance.now() - APP_START}: QuoteCitation@runPreLoadActions()`);//

        this.el.style.opacity = 0;
    }

    /*
    * Get animation settings for intro.
    *
    * @return {Object} The animation settings.
    */
    introAnimationSettings() {
        console.log(`${performance.now() - APP_START}: QuoteCitation@introAnimationSettings()`);//

        return {
            targets: this.el,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            translateX: [ { value: [-20, 0], easing: 'easeOutSine' } ],
            duration: 300,
            offset: '-=200'
        };
    }

    /*
    * Get animation settings for outro.
    *
    * @return {Object} The animation settings.
    */
    outroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: QuoteCitation@outroAnimationSettings()`);//

        return {
            targets: this.el,
            opacity: [ {  value: 0, easing: 'easeOutSine' } ],
            translateX: [ { value: [0, 20], easing: 'easeInSine' } ],
            duration: 300,
            offset: 0
        };
    }
}

export default QuoteCitation;
