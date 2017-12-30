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
        this.el.parentNode.style.pointerEvents = 'none';
    }

    /*
    * Enable button.
    */
    enable() {
        this.el.parentNode.style.pointerEvents = 'auto';
    }
}

export default RandomButton;
