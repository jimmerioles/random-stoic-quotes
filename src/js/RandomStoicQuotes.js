import anime from 'animejs';
import Card from './Card.js';

class RandomStoicQuotes {

    /*
    * Create RandomStoicQuotes instance.
    *
    * @param {Object} animation - Animejs instance.
    * @param {Object} card - Card instance.
    * @param {Object} copyright - copyright element.
    */
    constructor(animation = anime, card = new Card(), copyright = document.getElementById('copyright')) {
        console.log(`${performance.now() - APP_START}: RandomStoicQuotes constructor()`);//

        this.card = card;
        this.copyright = copyright;
        this.animation = animation;
    }

    /*
    * Initialize app.
    */
    inspire() {
        console.log(`${performance.now() - APP_START}: RandomStoicQuotes inspire()`);//

        this.runPreLoadActions();
        this.registerEventListeners();
    }

    /*
    * Run actions before load.
    */
    runPreLoadActions() {
        console.log(`${performance.now() - APP_START}: RandomStoicQuotes runPreloadActions()`);//

        this.card.runPreLoadActions();
        this.copyright.style.opacity = 0;
    }

    /*
    * Register event listeners.
    */
    registerEventListeners() {
        console.log(`${performance.now() - APP_START}: RandomStoicQuotes registerEventListeners()`);//

        window.addEventListener('load', () => this.animateIntro());
        this.card.registerEventListeners();
    }

    /*
    * Run app animation intro.
    */
    animateIntro() {
        console.log(`${performance.now() - APP_START}: RandomStoicQuotes animateIntro()`);//

        this.card.animateIntro(); //TODO: make this into `this.card.intro().finished.then(this.copyrightIntro())`;
        this.animateCopyrightIntro();
    }

    /*
    * Run copyright animation intro.
    */
    animateCopyrightIntro() {
        console.log(`${performance.now() - APP_START}: RandomStoicQuotes copyrightIntro()`);//

        this.animation.timeline().add(this.copyrightIntroAnimationSettings());
    }

    /*
    * Get copyright intro animation settings.
    *
    * @return {Object}
    */
    copyrightIntroAnimationSettings() {
        console.log(`${performance.now() - APP_START}: RandomStoicQuotes copyrightIntroAnimationSettings()`);//

        return {
            targets: this.copyright,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            duration: 250,
            offset: 850
        };
    }
}

export default RandomStoicQuotes;
