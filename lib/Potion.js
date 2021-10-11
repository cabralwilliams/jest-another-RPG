
class Potion {
    constructor(potionName) {
        this.types = ['health','strength','agility'];
        this.name = potionName || this.types[Math.floor(Math.random()*this.types.length)];
        this.value = this.getValue();
    }

    getValue() {
        if(this.name === 'health') {
            return 30 + Math.floor(Math.random()*10);
        } else {
            return 7 + Math.floor(Math.random()*5);
        }
    }
}

module.exports = Potion;