import anime from 'animejs';
import Card from './Card.js';
import Credits from './Credits.js';

/*
* Represents the app .
*
* @author Jim Merioles <jimwisleymerioles@gmail.com>
*/
class RandomStoicQuotes {

    /*
    * Create RandomStoicQuotes instance.
    *
    * @param {Object} card - Card instance.
    * @param {Object} credits - Credits instance.
    * @param {Object} animation - Animejs instance.
    */
    constructor(card = new Card(), credits = new Credits(), animation = anime) {
        console.log(`${performance.now() - APP_START}: RandomStoicQuotes@constructor()`);//

        this.card = card;
        this.credits = credits;
        this.animation = animation;
    }

    /*
    * Initialize app.
    */
    inspire() {
        console.log(`${performance.now() - APP_START}: RandomStoicQuotes@inspire()`);//

        this.runPreLoadActions();
        this.registerEventListeners();
    }

    /*
    * Run actions before app onload.
    */
    runPreLoadActions() {
        console.log(`${performance.now() - APP_START}: RandomStoicQuotes@runPreloadActions()`);//

        this.card.runPreLoadActions();
        this.credits.runPreLoadActions();
    }

    /*
    * Register event listeners for app.
    */
    registerEventListeners() {
        console.log(`${performance.now() - APP_START}: RandomStoicQuotes@registerEventListeners()`);//

        window.addEventListener('load', () => this.animateIntro());
        this.card.registerEventListeners();
    }

    /*
    * Run animation for app intro.
    */
    animateIntro() {
        console.log(`${performance.now() - APP_START}: RandomStoicQuotes@animateIntro()`);//

        this.card.animateIntro(); //TODO: try to make this into `this.card.intro().finished.then(this.copyrightIntro())`;
        this.credits.animateIntro();
    }
}

export default RandomStoicQuotes;
