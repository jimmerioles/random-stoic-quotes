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
            offset: 300
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
            duration: 350,
            offset: '-=200'
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

    /*
    * Set tweet intent.
    *
    * @param {Object} quote - Quote model instance.
    */
    setIntent(quote) {
        let text = encodeURIComponent(`"${quote.text}" —${quote.author}`);
        let url = encodeURIComponent('https://jimmerioles.github.io/random-stoic-quotes');
        let hashtags = 'Stoicism,Stoic,Quotes';
        let related = encodeURIComponent('jimmerioles,Created RandomStoicQuotes and RandomStoicQuotesAPI.');

        this.el.parentNode.href = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}&related=${related}`;
    }
}

export default TweetButton;
