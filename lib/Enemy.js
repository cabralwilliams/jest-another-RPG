const Character = require('./Character');
const Potion = require('./Potion');

class Enemy extends Character {
    constructor(name,weapon) {
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();

        this.health = Math.floor(Math.random() * 10 + 85);
        this.strength = Math.floor(Math.random() * 5 + 5);
        this.agility = Math.floor(Math.random() * 5 + 5);
    }

    getDescription() {
        return `A(n) ${this.name} wielding a(n) ${this.weapon} has appeared!`;
    }
}

module.exports = Enemy;