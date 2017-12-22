import anime from 'animejs';
import Card from './Card.js';
import QuoteRepository from './QuoteRepository.js';

class App {

    constructor() {
        this.animation = anime;
        this.card = new Card(new QuoteRepository()); // Todo: finalize this!
        this.copyright = document.getElementById('copyright');
    }

    inspire() {
        this.runPreloadActions();
        this.registerIntroEvent();
    }

    runPreloadActions() {
        this.hideCard();
        this.hideCopyright();
    }

    hideCard() {
        this.card.hide();
    }

    hideCopyright() {
        this.copyright.style.opacity = 0;
    }

    registerIntroEvent() {
        window.addEventListener('load', this.intro());
    }

    intro() {
        this.cardIntro();
        this.copyrightIntro();
    }

    cardIntro() {
        this.card.intro();
    }

    copyrightIntro() {
        this.animation.timeline()
            .add(this.copyrightIntroAnimationSettings());
    }

    copyrightIntroAnimationSettings() {
        return {
            targets: this.copyright,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            duration: 250,
            offset: 850
        };
    }
}

export default App;
