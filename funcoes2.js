counter = {
    value: 0,
    add: function () {
        return ++this.value;
    }
};
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

var itens = {
    value: [],
    add: function (item) {
        this.value.push(item);
        return this.value;
    }
};
console.log(itens.add('a'));
console.log(itens.add('b'));
console.log(itens.add('c'));

//auto invocar uma função
var counter = (function () {
    var value = 0; 
    return {
        add: function () {
            return ++value;
        },
        reset: function() {
            value = 0;
        }
    };
})();

console.log(counter.value)
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());