const Character = require('./Character');
const Potion = require('./Potion');

class Player extends Character {
    constructor(name = '') {
        super(name);

        this.health = Math.floor(Math.random() * 10 + 95);
        this.strength = Math.floor(Math.random() * 5 + 7);
        this.agility = Math.floor(Math.random() * 5 + 7);
        this.inventory = [new Potion('health'), new Potion()];
    }

    getStats() {
        return {
            health: this.health,
            strength: this.strength,
            agility: this.agility,
            potions: this.inventory.length
        };
    }

    getInventory() {
        if(this.inventory.length > 0) {
            return this.inventory;
        }
        return false;
    }

    addPotion(potion = new Potion()) {
        this.inventory.push(potion);
    }

    usePotion(index) {
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
    }
}

module.exports = Player;