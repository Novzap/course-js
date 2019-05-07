window.addEventListener('DOMContentLoaded', function() {
    let age = document.getElementById('age');
    let obj = {
        'age': age,
        showUser: function(surname, name) {
            alert("Пользователь " + surname + " " + name + ", его возраст " + this.age.value);
        }
    };
    obj.showUser('Доронин', 'Артём');
});

