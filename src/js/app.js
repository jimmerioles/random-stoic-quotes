import anime from 'animejs';

initialize();

function initialize() {
    prepareAnimatables();
    registerListeners();
}

function prepareAnimatables() {
    hideCard();
    hideSvgQuote();
    hideQuoteText();
    hideQuoteCitation();
    hideTweetButton();
    hideRandomButton();
    hideCopyright();
}

function hideCard() {
    document.getElementById('card').style.opacity = 0;
}

function hideSvgQuote() {
    document.getElementById('svg-quote').style.opacity = 0;
}

function hideQuoteText() {
    document.getElementById('quote__text').style.opacity = 0;
}

function hideQuoteCitation() {
    document.getElementById('quote__citation').style.opacity = 0;
}

function hideTweetButton() {
    document.getElementById('buttons__svg-tweet').style.opacity = 0;
}

function hideRandomButton() {
    document.getElementById('buttons__svg-random').style.opacity = 0;
}

function hideCopyright() {
    document.getElementById('copyright').style.opacity = 0;
}

function registerListeners() {
    window.addEventListener('load', intro);
}

function intro() {
    let cardIntro = {
        targets: '#card',
        opacity: 1,
        easing: 'easeInCubic',
        duration: 500
    };
    let svgQuoteIntro = {
        targets: '#svg-quote',
        opacity: [ {  value: 1, easing: 'easeInSine' } ],
        translateY: [ { value: [-30, 13], easing: 'easeInQuart' } ],
        duration: 350,
        offset: '-=200'
    };
    let quoteTextIntro = {
        targets: '#quote__text',
        opacity: [ {  value: 1, easing: 'easeInSine' } ],
        translateX: [ { value: [-15, 0], easing: 'easeOutQuart' } ],
        duration: 350
    };
    let quoteCitationIntro = {
        targets: '#quote__citation',
        opacity: 1,
        translateX: [ { value: [-10, 0], easing: 'easeOutQuart' } ],
        easing: 'easeInSine',
        duration: 350,
        offset: '-=100'
    };
    let tweetButtonIntro = {
        targets: '#buttons__svg-tweet',
        opacity: 1,
        easing: 'easeInSine',
        duration: 300,
        offset: '-=150'
    };
    let randomButtonIntro = {
        targets: '#buttons__svg-random',
        opacity: 1,
        easing: 'easeInSine',
        duration: 300,
        offset: '-=150'
    };
    let copyrightIntro = {
        targets: '#copyright',
        opacity: 1,
        easing: 'easeInSine',
        duration: 350,
        offset: '200'
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
