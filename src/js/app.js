// initialize();

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
    animateCardIntro();
    animateCopyrightIntro();
}

function animateCardIntro() {
    let cardIntro = [
        { opacity: 0, easing: 'ease-in' },
        { opacity: 1 }
    ];

    let options = {
        duration: 500,
        fill: 'forwards'
    };

    document.getElementById('card').animate(cardIntro, options);
}

function animateCopyrightIntro() {
    let cardIntro = [
        { opacity: 0, easing: 'ease-in' },
        { opacity: 1 }
    ];

    let options = {
        duration: 500,
        fill: 'forwards'
    };

    document.getElementById('copyright').animate(cardIntro, options);
}
