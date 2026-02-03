import { clamp } from 'lodash';

class Kitty {
    constructor(name){
        this.name = name;
        this.hunger = 75;
        this.energy = 50;
        this.thirst = 80;
        this.cleanliness = 90;
        this.happiness = 80;
        isAlive = true;
    }

    feed() {
        this.hunger = clamp(this.hunger + 20, 0, 100);
        this.happiness = clamp(this.happiness + 5, 0, 100);
        this.cleanliness = clamp(this.cleanliness - 5, 0, 100);
        this.energy = clamp(this.energy + 10, 0, 100);
        this.thirst = clamp(this.thirst - 10, 0, 100);
    }

    play() {
        this.happiness = clamp(this.happiness + 15, 0, 100);
        this.energy = clamp(this.energy - 20, 0, 100);
        this.hunger = clamp(this.hunger - 10, 0, 100);
        this.thirst = clamp(this.thirst - 15, 0, 100);
        this.cleanliness = clamp(this.cleanliness - 10, 0, 100);
    }
    sleep() {
        this.energy = clamp(this.energy + 30, 0, 100);
        this.hunger = clamp(this.hunger - 15, 0, 100);
        this.thirst = clamp(this.thirst - 10, 0, 100);
        this.cleanliness = clamp(this.cleanliness - 5, 0, 100);
    }
    drink() {
        this.thirst = clamp(this.thirst + 20, 0, 100);
        this.happiness = clamp(this.happiness + 5, 0, 100);
        this.cleanliness = clamp(this.cleanliness - 5, 0, 100);
    }
    clean() {
        this.cleanliness = clamp(this.cleanliness + 25, 0, 100);
        this.happiness = clamp(this.happiness + 10, 0, 100);
    }

    isFull() {
        return this.hunger >= 100;
    }

    isSatiated() {
        return this.thirst >= 100;
    }

    isEnergetic() {
        return this.energy >= 100;
    }

    isHappy() {
        return this.happiness >= 100;
    }

    isClean() {
        return this.cleanliness >= 100;
    }

    getVitals() {
        return {
            hunger: this.hunger,
            energy: this.energy,
            thirst: this.thirst,
            cleanliness: this.cleanliness,
            happiness: this.happiness
        };
    }

    isAlive() {
        return this.hunger > 0 && this.energy > 0 && this.thirst > 0 && this.cleanliness > 0 && this.happiness > 0;
    }   
}