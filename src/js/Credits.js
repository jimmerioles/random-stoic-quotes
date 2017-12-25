import anime from 'animejs';

/*
* Represents the credits element of the app.
*
* @author Jim Merioles <jimwisleymerioles@gmail.com>
*/
class Credits {

    /*
    * Create Credits instance.
    *
    * @param {Object} el - Credits' element.
    * @param {Object} animation - Animejs instance.
    */
    constructor(el = document.getElementById('credits'), animation = anime) {
        console.log(`${performance.now() - APP_START}: Credits@constructor()`);//

        this.el = el;
        this.animation = animation;
    }

    /*
    * Run credits actions before load.
    */
    runPreLoadActions() {
        this.el.style.opacity = 0;
    }

    /*
    * Run animation for intro.
    */
    animateIntro() {
        console.log(`${performance.now() - APP_START}: Credits@creditsIntro()`);//

        this.animation.timeline().add(this.introAnimationSettings());
    }

    /*
    * Get animation settings for intro.
    *
    * @return {Object} The animations settings.
    */
    introAnimationSettings() {
        console.log(`${performance.now() - APP_START}: Credits@introAnimationSettings()`);//

        return {
            targets: this.el,
            opacity: [ {  value: 1, easing: 'easeInSine' } ],
            duration: 250,
            offset: 850
        };
    }
}

export default Credits;
