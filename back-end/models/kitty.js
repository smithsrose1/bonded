import { clamp } from 'lodash';

class Kitty {
    constructor(data){
        this.petID = data.petID;
        this.name = data.name;
        this.hunger = data.hunger;
        this.energy = data.energy;
        this.thirst = data.thirst;
        this.cleanliness = data.cleanliness;
        this.happiness = data.happiness;
        this.isAlive = data.isAlive;
        this.lastUpdated = data.lastUpdated;
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
    
    applyDecay() {
        this.hunger = clamp(this.hunger - 5, 0, 100);
        this.energy = clamp(this.energy - 5, 0, 100);
        this.thirst = clamp(this.thirst - 5, 0, 100);
        this.cleanliness = clamp(this.cleanliness - 5, 0, 100);
        this.happiness = clamp(this.happiness - 5, 0, 100); 
    }
}