const form =() => {
    // Form

let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так'
};

let statusMessage = document.createElement('div');

statusMessage.classList.add('status');

function submitForm(form) {
    let input = form.querySelectorAll('input');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        form.appendChild(statusMessage);
        let formData = new FormData(form);

        function postData(data) {
            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                request.addEventListener('readystatechange', function() {
                    if(request.readyState < 4) {
                        resolve();
                    } else if(request.readyState === 4 && request.status === 200) {
                        resolve();
                    } else {
                        reject();
                    }
                });
                request.send(data);
            });
        }
        function clearInput() {
            for(let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }
        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        postData(json)
            .then(() => statusMessage.textContent = message.loading)
            .then(() => {
                statusMessage.textContent = message.success;
            })
            .catch(() => statusMessage.textContent = message.failure)
            .then(clearInput)
    });
    function clearInput() {
        for(let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    }
    clearInput();
    input.forEach(function(item) {
        item.addEventListener('input', function(e) {
            if(item.name !== 'email') {
                if(e.data.search(/[0-9\+]/)) {
                    this.value = '';
                }
            }
        });
    });



}
submitForm(document.querySelector('#form'));
submitForm(document.querySelector('.main-form'));

};

module.exports = form;