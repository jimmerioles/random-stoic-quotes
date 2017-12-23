import anime from 'animejs';
import Card from './Card.js';

class RandomStoicQuotes {

    /*
    * Create RandomStoicQuotes instance.
    *
    * @param {Object} animation - Animejs instance.
    * @param {Object} card - Card instance.
    * @param {string} copyright - copyright element.
    */
    constructor(animation = anime, card = new Card(), copyright = document.getElementById('copyright')) {
        this.card = card;
        this.copyright = copyright;
        this.animation = animation;
    }

    /*
    * Initialize app.
    */
    inspire() {
        this.runPreLoadActions();
        this.registerEventListeners();
    }

    /*
    * Run actions before load.
    */
    runPreLoadActions() {
        this.card.runPreLoadActions();
        this.copyright.style.opacity = 0;
    }

    /*
    * Register event listeners.
    */
    registerEventListeners() {
        this.card.registerEventListeners();
        window.addEventListener('load', this.intro());
    }

    /*
    * Run app animation intro.
    */
    intro() {
        this.card.intro();
        this.copyrightIntro();
    }

    /*
    * Run copyright animation intro.
    */
    copyrightIntro() {
        this.animation.timeline().add(this.copyrightIntroAnimationSettings());
    }

    /*
    * Get copyright intro animation settings.
    *
    * @return {Object}
    */
    copyrightIntroAnimationSettings() {
        return {
            targets: this.copyright,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            duration: 250,
            offset: 850
        };
    }
}

export default RandomStoicQuotes;
