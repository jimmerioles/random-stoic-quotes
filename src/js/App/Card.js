import anime from 'animejs';
import SvgQuote from './Elements/SvgQuote.js';
import QuoteText from './Elements/QuoteText.js';
import TweetButton from './Elements/TweetButton.js';
import RandomButton from './Elements/RandomButton.js';
import QuoteCitation from './Elements/QuoteCitation.js';
import QuoteRepository from './Repository/QuoteRepository.js';

/*
* Represents the card model of the app
. *
* @author Jim Merioles <jimwisleymerioles@gmail.com>
*/
class Card {

    /*
    * Create Card instance.
    *
    * @param {Object} el - Card's element.
    * @param {Object} svgQuote - SvgQuote instance.
    * @param {Object} quoteText - QuoteText instance.
    * @param {Object} quoteCitation - QuoteCitation instance.
    * @param {Object} tweetBtn - TweetButton instance.
    * @param {Object} randomBtn - RandomButton instance.
    *
    * @param {Object} quoteRepository - QuoteRepository instance.
    * @param {Object} animation - Animejs instance.
    */
    constructor(
        el = document.getElementById('card'),
        svgQuote = new SvgQuote(),
        quoteText = new QuoteText(),
        quoteCitation = new QuoteCitation(),
        tweetBtn = new TweetButton(),
        randomBtn = new RandomButton(),
        quoteRepo = new QuoteRepository(),
        animation = anime
    ) {
        console.log(`${performance.now() - APP_START}: Card@constructor()`);//

        this.el = el;
        this.svgQuote = svgQuote;
        this.quoteText = quoteText;
        this.quoteCitation = quoteCitation;
        this.tweetBtn = tweetBtn;
        this.randomBtn = randomBtn;
        this.quoteRepo = quoteRepo;
        this.animation = animation;
    }

    /*
    * Run actions before load.
    */
    runPreLoadActions() {
        console.log(`${performance.now() - APP_START}: Card@runPreLoadActions()`);//

        this.el.style.opacity = 0;
        this.svgQuote.runPreLoadActions();
        this.quoteText.runPreLoadActions();
        this.quoteCitation.runPreLoadActions();
        this.tweetBtn.runPreLoadActions();
        this.randomBtn.runPreLoadActions();
        this.quoteRepo.runPreLoadActions();
    }

    /*
    * Run animation for intro.
    *
    * @return {Object} Animejs instance.
    */
    animateIntro() {
        console.log(`${performance.now() - APP_START}: Card@animateIntro()`);//

        return this.animation.timeline()
            .add(this.introAnimationSettings())
            .add(this.svgQuote.introAnimationSettings())
            .add(this.quoteText.introAnimationSettings())
            .add(this.quoteCitation.introAnimationSettings())
            .add(this.tweetBtn.introAnimationSettings())
            .add(this.randomBtn.introAnimationSettings());
    }

    /*
    * Get animation settings for intro.
    *
    * @return {Object} The animations settings.
    */
    introAnimationSettings() {
        console.log(`${performance.now() - APP_START}: Card@introAnimationSettings()`);//

        return {
            targets: this.el,
            opacity: 1,
            easing: 'easeInSine',
            duration: 500
        };
    }

    /*
    * Register event listeners.
    */
    registerEventListeners() {
        console.log(`${performance.now() - APP_START}: Card@registerEventListeners()`);//

        this.randomBtn.el.parentNode.addEventListener('click', (event) => this.random(event));
    }

    /*
    * Generate random quote.
    *
    * @param {Object} event - Event object.
    */
    random(event) {
        console.log(`${performance.now() - APP_START}: Card@random()`);//

        event.preventDefault();
        this.disableButtons();
        this.animateOutro().finished.then(() => this.showNew());
    }

    /*
    * Disable buttons.
    */
    disableButtons() {
        this.randomBtn.disable();
        this.tweetBtn.disable();
    }

    /*
    * Run card outro animation.gasul cebu lahug nivel hills
    *
    * @return {Object} Animejs instance.
    */
    animateOutro() {
        console.log(`${performance.now() - APP_START}: Card@animateOutro()`);//

        return this.animation.timeline()
            .add(this.randomBtn.outroAnimationSettings())
            .add(this.tweetBtn.outroAnimationSettings())
            .add(this.quoteText.outroAnimationSettings())
            .add(this.quoteCitation.outroAnimationSettings())
            .add(this.svgQuote.outroAnimationSettings())
            .add(this.outroAnimationSettings());
    }

    /*
    * Get animation settings for outro.
    *
    * @return {Object} The animation settings.
    */
    outroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: Card@outroAnimationSettings()`);//

        return {
            targets: this.el,
            opacity: [ { value: 0, easing: 'easeOutSine' } ],
            duration: 500,
            offset: '-=200',
        };
    }

    /*
    * Show new card with new quote content.
    */
    showNew() {
        console.log(`${performance.now() - APP_START}: Card@showNew()`);//

        this.setContent(this.quoteRepo.getRandom());
        this.animateIntro().finished.then(() => this.enableButtons());
    }

    /*
    * Enable buttons.
    */
    enableButtons() {
        this.randomBtn.enable();
        this.tweetBtn.enable();
    }

    /*
    * Set card's content with quote.
    *
    * @param {Object} quote - Quote model instance.
    */
    setContent(quote) {
        console.log(`${performance.now() - APP_START}: Card@setContent()`);//
        this.setBackgroundImage(quote.image);
        this.quoteText.setContent(quote.text);
        this.quoteCitation.setContent(quote.author);
        this.tweetBtn.setIntent(quote);
    }

    /*
    * Set card's background with image.
    *
    * @param {string} image - Image filename with extension.
    */
    setBackgroundImage(image) {
        console.log(`${performance.now() - APP_START}: Card@setBackgroundImage()`);//

        this.el.style.backgroundImage = `linear-gradient(rgba(43, 49, 52, 0.85), rgba(43, 49, 52, 0.85)), url('../dist/images/${image}')`;
    }
}

export default Card;
