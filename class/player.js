const { Food } = require("./food");

class Player {
    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {
        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0; i < this.items.length; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        // Fill this in
        /*Problem: Take in item name, push item into player array */
        /*Take in name, compare with item in room.items, return correct item*/
        const currentRoom = this.currentRoom;
        const item = currentRoom.getItemByName(itemName);
        const inventory = this.items;
        inventory.push(item);
        currentRoom.items.pop();
    }

    dropItem(itemName) {
        // Fill this in
        const currentRoom = this.currentRoom;
        const item = this.getItemByName(itemName);
        const inventory = this.items;
        currentRoom.items.push(item);
        inventory.pop();
    }

    eatItem(itemName) {
        // Fill this in
        const food = this.getItemByName(itemName);
        if(food instanceof Food === true) {
            this.items.pop();
        }
    }

    getItemByName(name) {
        // Fill this in
        // Problem: Function take in an name and return the whole object item
        // Solution: Take in an name, iterate this.items and return the item with correct name
        const items = this.items;
        const targetItem = items.filter((item) => {
            return item.name === name;
        });

        return targetItem[0];
    }
}

module.exports = {
    Player,
};
