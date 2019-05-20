function sum() {
    return true;
}
let num = 5;

let assert = require('chai').assert;

describe('sum', function() {
    it("Проверка на тип данных", function() {
        assert.typeOf(sum(), 'Boolean');
    });
});

describe('num', function() {
    it("Проверка на значение", function() {
        assert.equal(num, 5);
    });
});