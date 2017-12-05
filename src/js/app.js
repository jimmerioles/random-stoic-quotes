import anime from 'animejs';

initialize();

function initialize() {
    prepareAnimatables();
    window.addEventListener('load', intro());
}

function prepareAnimatables() {
    document.getElementById('card').style.opacity = 0;
    document.getElementById('svg-quote').style.opacity = 0;
    document.getElementById('quote__text').style.opacity = 0;
    document.getElementById('quote__citation').style.opacity = 0;
    document.getElementById('buttons__svg-tweet').style.opacity = 0;
    document.getElementById('buttons__svg-random').style.opacity = 0;
    document.getElementById('copyright').style.opacity = 0;
}

function intro() {
    let cardIntro = {
        targets: '#card',
        opacity: 1,
        easing: 'easeInSine',
        duration: 500
    };
    let svgQuoteIntro = {
        targets: '#svg-quote',
        opacity: [ {  value: 1, easing: 'easeInSine' } ],
        translateY: [ { value: [-50, 13], easing: 'easeOutSine' } ],
        duration: 350,
        offset: '-=200'
    };
    let quoteTextIntro = {
        targets: '#quote__text',
        opacity: [ {  value: 1, easing: 'easeInSine' } ],
        duration: 400,
        offset: '-=100'
    };
    let quoteCitationIntro = {
        targets: '#quote__citation',
        opacity: [ {  value: 1, easing: 'easeInSine' } ],
        translateX: [ { value: [-20, 0], easing: 'easeOutSine' } ],
        duration: 300,
        offset: '-=200'
    };
    let tweetButtonIntro = {
        targets: '#buttons__svg-tweet',
        opacity: [ {  value: 1, easing: 'easeInSine' } ],
        translateY: [ { value: [50, 0], easing: 'easeOutSine' } ],//
        duration: 350,
        offset: 300
    };
    let randomButtonIntro = {
        targets: '#buttons__svg-random',
        opacity: [ {  value: 1, easing: 'easeInSine' } ],
        translateY: [ { value: [50, 0], easing: 'easeOutSine' } ],//
        duration: 350,
        offset: 400
    };
    let copyrightIntro = {
        targets: '#copyright',
        opacity: [ {  value: 1, easing: 'easeInSine' } ],
        duration: 250,
        offset: '-=200'
    };

    anime.timeline()
    .add(cardIntro)
    .add(svgQuoteIntro)
    .add(quoteTextIntro)
    .add(quoteCitationIntro)
    .add(tweetButtonIntro)
    .add(randomButtonIntro)
    .add(copyrightIntro);
}
