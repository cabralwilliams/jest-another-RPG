const Potion = require('./Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];

    /*
    this.getStats = function() {
        return {
            health: this.health,
            strength: this.strength,
            agility: this.agility,
            potions: this.inventory.length
        };
    };

    this.getInventory = function() {
        if(this.inventory.length > 0) {
            return this.inventory;
        }
        return false;
    };
    */
}

Player.prototype.getStats = function() {
    return {
        health: this.health,
        strength: this.strength,
        agility: this.agility,
        potions: this.inventory.length
    };
};

Player.prototype.getInventory = function() {
    if(this.inventory.length > 0) {
        return this.inventory;
    }
    return false;
};

Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};

Player.prototype.isAlive = function() {
    return this.health > 0 ? true : false;
};

Player.prototype.reduceHealth = function(attackValue = 5) {
    const newHealth = this.health - attackValue;
    if(newHealth <= 0) {
        this.health = 0;
    } else {
        this.health = newHealth;
    }
};

Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};

Player.prototype.addPotion = function(potion = new Potion()) {
    this.inventory.push(potion);
};

Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
};

module.exports = Player;