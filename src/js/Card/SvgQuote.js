/*
* Represents the svg quote element of the app.
*
* @author Jim Merioles <jimwisleymerioles@gmail.com>
*/
class SvgQuote {

    /*
    * Create SvgQuote instance.
    *
    * @param {Object} el - SvgQuote's element.
    */
    constructor(el = document.getElementById('svg-quote')) {
        console.log(`${performance.now() - APP_START}: SvgQuote@constructor()`);//

        this.el = el;
    }

    /*
    * Run actions before load.
    */
    runPreLoadActions() {
        console.log(`${performance.now() - APP_START}: SvgQuote@runPreLoadActions()`);//

        this.el.style.opacity = 0;
    }

    /*
    * Get animation settings for intro.
    *
    * @return {Object} The animation settings.
    */
    introAnimationSettings() {
        console.log(`${performance.now() - APP_START}: SvgQuote@introAnimationSettings()`);//

        return {
            targets: this.el,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            translateY: [ { value: [-30, 13], easing: 'easeOutSine' } ],
            duration: 350,
            offset: '-=200'
        };
    }

    /*
    * Get animation settings for outro.
    *
    * @return {Object} The animation settings.
    */
    outroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: SvgQuote@outroAnimationSettings()`);//

        return {
            targets: this.el,
            opacity: [ {  value: 0, easing: 'easeInSine' } ],
            translateY: [ { value: [13, -30], easing: 'easeInSine' } ],
            duration: 350,
            offset: 150
        };
    }
}

export default SvgQuote;
