function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

    totalValue.textContent = '0';


    persons.addEventListener('change', function(e) {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if(restDays.value === '') {
            totalValue.textContent = '0';
        } else {
            totalValue.textContent = total;
        }
    });

    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if(persons.value === '') {
            totalValue.textContent = '0';
        } else {
            totalValue.textContent = total;
        }
    });
    persons.addEventListener('input', function(e) {
        if(e.data.search(/[0-9]/)) {
            this.value = '';
        } 
    });
    persons.addEventListener('blur', function(e) {
        if(this.value === '') {
            totalValue.textContent = 'Заполните поле';
        } 
    });
    restDays.addEventListener('blur', function(e) {
        if(this.value === '') {
            totalValue.textContent = 'Заполните поле';
        } 
    });
    restDays.addEventListener('input', function(e) {
        if(e.data.search(/[0-9]/)) {
            this.value = '';
        } 
    });

    place.addEventListener('change', function() {
        if(restDays.value == '' || persons.value == '') {
            totalValue.textContent = '0';
        } else {
            let a = total;
            totalValue.textContent = a * this.options[this.selectedIndex.value];
        }
    });
}

module.exports = calc;