import anime from 'animejs';
import QuoteRepository from './QuoteRepository.js';

class Card {

    /*
    * Create Card instance.
    *
    * @param {Object} quoteRepository - QuoteRepository instance.
    * @param {Object} animation - Animejs instance.
    * @param {Object} el - card element.
    * @param {Object} svgQuote - SVG Quote element.
    * @param {Object} quoteText - Quote's text.
    * @param {Object} quoteCitation - Quote's citation.
    * @param {Object} btnTweet - Tweet button.
    * @param {Object} btnRandom - Random button.
    */
    constructor(
        quoteRepository = new QuoteRepository(),
        animation = anime,
        el = document.getElementById('card'),
        svgQuote = document.getElementById('svg-quote'),
        quoteText = document.getElementById('quote__text'),
        quoteCitation = document.getElementById('quote__citation'),
        btnTweet = document.getElementById('buttons__svg-tweet'),
        btnRandom = document.getElementById('buttons__svg-random')
    ) {
        console.log(`${performance.now() - APP_START}: Card constructor`);//

        this.animation = animation;
        this.quoteRepo = quoteRepository;

        this.el = el;
        this.btnTweet = btnTweet;
        this.svgQuote = svgQuote;
        this.btnRandom = btnRandom;
        this.quoteText = quoteText;
        this.quoteCitation = quoteCitation;
    }

    /*
    * Run actions before load.
    */
    runPreLoadActions() {
        console.log(`${performance.now() - APP_START}: Card runPreLoadActions()`);//

        this.hide();
    }

    /*
    * Hide card and child elements.
    */
    hide() {
        console.log(`${performance.now() - APP_START}: Card hide()`);//

        this.el.style.opacity = 0;
        this.svgQuote.style.opacity = 0;
        this.quoteText.style.opacity = 0;
        this.quoteCitation.style.opacity = 0;
        this.btnTweet.style.opacity = 0;
        this.btnRandom.style.opacity = 0;
    }

    /*
    * Register event listeners.
    */
    registerEventListeners() {
        console.log(`${performance.now() - APP_START}: Card registerEventListeners()`);//

        this.btnRandom.parentNode.addEventListener('click', (event) => this.random(event));
    }

    /*
    * Run card random animation.
    */
    random(event) {
        console.log(`${performance.now() - APP_START}: Card random()`);//

        event.preventDefault();
        this.animateOutro().finished.then(() => this.createNew());
    }

    /*
    * Run card outro animation.
    *
    * @return {Object}
    */
    animateOutro() {
        console.log(`${performance.now() - APP_START}: Card animateOutro()`);//

        return this.animation.timeline()
            .add(this.randomButtonOutroAnimationSettings())
            .add(this.tweetButtonOutroAnimationSettings())
            .add(this.quoteTextOutroAnimationSettings())
            .add(this.quoteCitationOutroAnimationSettings())
            .add(this.svgQuoteOutroAnimationSettings())
            .add(this.cardOutroAnimationSettings());
    }

    /*
    * Create new card with new quote content.
    */
    createNew() {
        console.log(`${performance.now() - APP_START}: Card createNew()`);//

        this.el.style.backgroundImage = `linear-gradient(rgba(43, 49, 52, 0.85), rgba(43, 49, 52, 0.85)), url('../dist/images/captjacksparrow-m.jpg')`;
        this.el.style.opacity = 1;
    }

    /*
    * Get random button outro animation settings.
    *
    * @return {Object}
    */
    randomButtonOutroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: Card randomButtonOutroAnimationSettings()`);//

        return {
            targets: this.btnRandom,
            opacity: [ {  value: 0, easing: 'easeInSine' } ],
            translateY: [ { value: [0, 30], easing: 'easeInSine' } ],
            duration: 350
        };
    }

    /*
    * Get tweet button outro animation settings.
    *
    * @return {Object}
    */
    tweetButtonOutroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: Card tweetButtonOutroAnimationSettings()`);//

        return {
            targets: this.btnTweet,
            opacity: [ {  value: 0, easing: 'easeInSine' } ],
            translateY: [ { value: [0, 30], easing: 'easeInSine' } ],
            duration: 350,
            offset: '-=200'
        };
    }

    /*
    * Get quote text outro animation settings.
    *
    * @return {Object}
    */
    quoteTextOutroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: Card quoteTextOutroAnimationSettings()`);//

        return {
            targets: this.quoteText,
            opacity: [ {  value: 0, easing: 'easeOutSine' } ],
            duration: 400,
            offset: 0
        };
    }

    /*
    * Get quote citation outro animation settings.
    *
    * @return {Object}
    */
    quoteCitationOutroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: Card quoteCitationOutroAnimationSettings()`);//

        return {
            targets: this.quoteCitation,
            opacity: [ {  value: 0, easing: 'easeOutSine' } ],
            translateX: [ { value: [0, 20], easing: 'easeInSine' } ],
            duration: 300,
            offset: 0
        };
    }

    /*
    * Get svg quote outro animation settings.
    *
    * @return {Object}
    */
    svgQuoteOutroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: Card svgQuoteOutroAnimationSettings()`);//

        return {
            targets: this.svgQuote,
            opacity: [ {  value: 0, easing: 'easeInSine' } ],
            translateY: [ { value: [13, -30], easing: 'easeInSine' } ],
            duration: 350,
            offset: 150
        };
    }

    /*
    * Get card outro animation settings.
    *
    * @return {Object}
    */
    cardOutroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: Card cardOutroAnimationSettings()`);//

        return {
            targets: this.el,
            opacity: [ {  value: 0, easing: 'easeOutSine' } ],
            duration: 500,
            offset: '-=200',
        };
    }

    /*
    * Run card animation intro.
    */
    animateIntro() {
        console.log(`${performance.now() - APP_START}: Card animateIntro()`);//

        this.animation.timeline()
            .add(this.cardIntroAnimationSettings())
            .add(this.svgQuoteIntroAnimationSettings())
            .add(this.quoteTextIntroAnimationSettings())
            .add(this.quoteCitationIntroAnimationSettings())
            .add(this.tweetButtonIntroAnimationSettings())
            .add(this.randomButtonIntroAnimationSettings());
    }

    /*
    * Get card intro animation settings.
    *
    * @return {Object}
    */
    cardIntroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: Card cardIntroAnimationSettings()`);//

        return {
            targets: this.el,
            opacity: 1,
            easing: 'easeInSine',
            duration: 500
        };
    }

    /*
    * Get svg quote intro animation settings.
    *
    * @return {Object}
    */
    svgQuoteIntroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: Card svgQuoteIntroAnimationSettings()`);//

        return {
            targets: this.svgQuote,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            translateY: [ { value: [-30, 13], easing: 'easeOutSine' } ],
            duration: 350,
            offset: '-=200'
        };
    }

    /*
    * Get quote text intro animation settings.
    *
    * @return {Object}
    */
    quoteTextIntroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: Card quoteTextIntroAnimationSettings()`);//

        return {
            targets: this.quoteText,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            duration: 400,
            offset: '-=100'
        };
    }

    /*
    * Get citation intro animation settings.
    *
    * @return {Object}
    */
    quoteCitationIntroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: Card quoteCitationIntroAnimationSettings()`);//

        return {
            targets: this.quoteCitation,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            translateX: [ { value: [-20, 0], easing: 'easeOutSine' } ],
            duration: 300,
            offset: '-=200'
        };
    }

    /*
    * Get tweet button intro animation settings.
    *
    * @return {Object}
    */
    tweetButtonIntroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: Card tweetButtonIntroAnimationSettings()`);//

        return {
            targets: this.btnTweet,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            translateY: [ { value: [30, 0], easing: 'easeOutSine' } ],
            duration: 350,
            offset: 300
        };
    }

    /*
    * Get random button intro animation settings.
    *
    * @return {Object}
    */
    randomButtonIntroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: Card randomButtonIntroAnimationSettings()`);//

        return {
            targets: this.btnRandom,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            translateY: [ { value: [30, 0], easing: 'easeOutSine' } ],
            duration: 350,
            offset: 400
        };
    }
}

export default Card;
