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

module.exports = Player;