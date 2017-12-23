import anime from 'animejs';
import QuoteRepository from './QuoteRepository.js';

class Card {
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
        this.animation = animation;
        this.quoteRepo = quoteRepository;

        this.el = el;
        this.btnTweet = btnTweet;
        this.svgQuote = svgQuote;
        this.btnRandom = btnRandom;
        this.quoteText = quoteText;
        this.quoteCitation = quoteCitation;
    }

    runPreLoadActions() {
        this.hide();
    }

    hide() {
        this.el.style.opacity = 0;
        this.svgQuote.style.opacity = 0;
        this.quoteText.style.opacity = 0;
        this.quoteCitation.style.opacity = 0;
        this.btnTweet.style.opacity = 0;
        this.btnRandom.style.opacity = 0;
    }

    registerEventListeners() {
        //onclick randomBtn
    }

    intro() {
        this.animation.timeline()
            .add(this.cardIntroAnimationSettings())
            .add(this.svgQuoteIntroAnimationSettings())
            .add(this.quoteTextIntroAnimationSettings())
            .add(this.quoteCitationIntroAnimationSettings())
            .add(this.tweetButtonIntroAnimationSettings())
            .add(this.randomButtonIntroAnimationSettings());
    }

    cardIntroAnimationSettings() {
        return {
            targets: this.el,
            opacity: 1,
            easing: 'easeInSine',
            duration: 500
        };
    }

    svgQuoteIntroAnimationSettings() {
        return {
            targets: this.svgQuote,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            translateY: [ { value: [-30, 13], easing: 'easeOutSine' } ],
            duration: 350,
            offset: '-=200'
        };
    }

    quoteTextIntroAnimationSettings() {
        return {
            targets: this.quoteText,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            duration: 400,
            offset: '-=100'
        };
    }

    quoteCitationIntroAnimationSettings() {
        return {
            targets: this.quoteCitation,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            translateX: [ { value: [-20, 0], easing: 'easeOutSine' } ],
            duration: 300,
            offset: '-=200'
        };
    }

    tweetButtonIntroAnimationSettings() {
        return {
            targets: this.btnTweet,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            translateY: [ { value: [30, 0], easing: 'easeOutSine' } ],
            duration: 350,
            offset: 300
        };
    }

    randomButtonIntroAnimationSettings() {
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
