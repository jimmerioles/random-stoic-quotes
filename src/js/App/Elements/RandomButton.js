/*
* Represents the random button element of the app.
*
* @author Jim Merioles <jimwisleymerioles@gmail.com>
*/
class RandomButton {
    /*
    * Create RandonButton instance.
    *
    * @param {Object} el - RandomButton's element.
    */
    constructor(el = document.getElementById('buttons__svg-random')) {
        console.log(`${performance.now() - APP_START}: RandomButton@constructor()`);//

        this.el = el;
    }

    /*
    * Run actions before load.
    */
    runPreLoadActions() {
        console.log(`${performance.now() - APP_START}: RandomButton@runPreLoadActions()`);//

        this.el.style.opacity = 0;
    }

    /*
    * Get animation settings for intro.
    *
    * @return {Object} The animation settings.
    */
    introAnimationSettings() {
        console.log(`${performance.now() - APP_START}: RandomButton@introAnimationSettings()`);//

        return {
            targets: this.el,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            translateY: [ { value: [30, 0], easing: 'easeOutSine' } ],
            duration: 350,
            offset: 400
        };
    }

    /*
    * Get animation settings for outro.
    *
    * @return {Object} The animation settings.
    */
    outroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: RandomButton@outroAnimationSettings()`);//

        return {
            targets: this.el,
            opacity: [ {  value: 0, easing: 'easeInSine' } ],
            translateY: [ { value: [0, 30], easing: 'easeInSine' } ],
            duration: 350
        };
    }

    /*
    * Disable button.
    */
    disable() {
        console.log(`${performance.now() - APP_START}: RandomButton@disable()`);//

        this.el.parentNode.style.pointerEvents = 'none';
    }

    /*
    * Enable button.
    */
    enable() {
        console.log(`${performance.now() - APP_START}: RandomButton@enable()`);//

        this.el.parentNode.style.pointerEvents = 'auto';
    }
}

export default RandomButton;
