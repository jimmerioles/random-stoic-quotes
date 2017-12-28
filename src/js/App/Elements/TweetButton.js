/*
* Represents the tweet button element of the app.
*
* @author Jim Merioles <jimwisleymerioles@gmail.com>
*/
class TweetButton {
    /*
    * Create TweetButton instance.
    *
    * @param {Object} el - TweetButton's element.
    */
    constructor(el = document.getElementById('buttons__svg-tweet')) {
        console.log(`${performance.now() - APP_START}: TweetButton@constructor()`);//

        this.el = el;
    }

    /*
    * Run actions before load.
    */
    runPreLoadActions() {
        console.log(`${performance.now() - APP_START}: TweetButton@runPreLoadActions()`);//

        this.el.style.opacity = 0;
    }

    /*
    * Get animation settings for intro.
    *
    * @return {Object} The animation settings.
    */
    introAnimationSettings() {
        console.log(`${performance.now() - APP_START}: TweetButton@introAnimationSettings()`);//

        return {
            targets: this.el,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            translateY: [ { value: [30, 0], easing: 'easeOutSine' } ],
            duration: 350,
            offset: 300
        };
    }

    /*
    * Get animation settings for outro.
    *
    * @return {Object} The animation settings.
    */
    outroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: TweetButton@outroAnimationSettings()`);//

        return {
            targets: this.el,
            opacity: [ {  value: 0, easing: 'easeInSine' } ],
            translateY: [ { value: [0, 30], easing: 'easeInSine' } ],
            duration: 350,
            offset: '-=200'
        };
    }

    /*
    * Disable button.
    */
    disable() {
        console.log(`${performance.now() - APP_START}: TweetButton@disable()`);//

        this.el.parentNode.style.pointerEvents = 'none';
    }

    /*
    * Enable button.
    */
    enable() {
        console.log(`${performance.now() - APP_START}: TweetButton@enable()`);//

        this.el.parentNode.style.pointerEvents = 'auto';
    }
}

export default TweetButton;
