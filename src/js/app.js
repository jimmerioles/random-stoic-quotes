start();

function start() {
    hideAnimatables();
    registerListeners();
}

function hideAnimatables() {
    document.getElementById('card').classList.add('card--hidden');
    // document.getElementById('svg-quote').classList.add('svg-quote--hidden');
    // document.getElementById('quote__text').classList.add('quote__text--hidden');
    // document.getElementById('quote__citation').classList.add('quote__citation--hidden');
    // document.getElementById('buttons__svg-tweet').classList.add('buttons__svg-tweet--hidden');
    // document.getElementById('buttons__svg-random').classList.add('buttons__svg-random--hidden');
    document.getElementById('copyright').classList.add('copyright--hidden');
}

function registerListeners() {
    window.addEventListener('load', intro);
}

function intro() {
    cardIntro();
    copyrightIntro();
}

function cardIntro() {
    let el = document.getElementById('card');
    el.classList.remove('card--hidden');
    el.classList.add('card--intro');
}

function copyrightIntro() {
    let el = document.getElementById('copyright');
    el.classList.remove('copyright--hidden');
    el.classList.add('copyright--intro');
}
