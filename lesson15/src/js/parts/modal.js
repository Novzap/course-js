const modal = () => {
    let more = document.querySelector('.more'),
    btns = document.querySelectorAll('.description-btn'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

function showOrNone(display, cl, overflow) {
    overlay.style.display = display;
    this.classList.add(cl);
    document.body.style.overflow = overflow;
};

more.addEventListener('click', function() {
    showOrNone.call(more, 'block', 'more-splash', 'hidden');
});

close.addEventListener('click', function() {
    showOrNone.call(close, 'none', 'more-splash', 'visible');
});

btns.forEach((item) => {
    item.addEventListener('click', function() {
        showOrNone.call(item, 'block', 'more-splash', 'hidden');
    });
});
}

module.exports = modal;