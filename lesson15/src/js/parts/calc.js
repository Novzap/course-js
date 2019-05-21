const calc =() => {
    let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0,
    baseCoef = 1;

    totalValue.textContent = '0';


    persons.addEventListener('input', function(e) {
        if(e.data.search(/[0-9]/)) {
            this.value = '';
        } 
        personsSum = +this.value;
        
        total = (daysSum + personsSum) * 4000 * baseCoef;
        if(this.value.charAt(0) === '0') {
            this.value = '';
            total = 0;
        }
        if(restDays.value === '' || restDays.value === '0') {
            totalValue.textContent = '0';
        } else {
            totalValue.textContent = total;
        }
    });

    restDays.addEventListener('input', function(e) {

        if(e.data.search(/[0-9]/)) {
            this.value = '';
        } 
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000 * baseCoef;
        if(this.value.charAt(0) === '0') {
            this.value = '';
            total = 0;
        }
        if(persons.value === '' || persons.value === '0') {
            totalValue.textContent = '0';
        } else {
            totalValue.textContent = total;
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

    place.addEventListener('input', function() {
        if(restDays.value == '' || persons.value == '') {
            totalValue.textContent = '0';
        } else {
            baseCoef = +this.options[this.selectedIndex].value;
            totalValue.textContent = (daysSum + personsSum) * 4000 * baseCoef;
        }
    });
}

module.exports = calc;