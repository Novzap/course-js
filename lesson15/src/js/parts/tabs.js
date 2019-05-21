const tabs = () => {
    let info = document.querySelector('.info-header'),
    tab = document.querySelectorAll('.info-header-tab'),
    tabContent = document.querySelectorAll('.info-tabcontent');

let hideTabContent = (a) => {
    for(let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
};

hideTabContent(1);

let showTabContent = (b) => {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
};

info.addEventListener('click', function(e) {
    let target = e.target;
    if (target && target.matches('div.info-header-tab')) {
        for(let i = 0; i < tab.length; i++) {
            if(target == tab[i]) {
                hideTabContent(0);
                showTabContent(i);
            }
        }
    }
});
}

module.exports = tabs;