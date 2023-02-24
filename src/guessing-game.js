class GuessingGame {
    constructor() {}
    candidate = 0;
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.candidate = Math.round((this.max - this.min) / 2 + this.min);
    }

    lower() {
        return this.max = this.candidate;
    }

    greater() {
        return this.min = this.candidate;
    }
}

module.exports = GuessingGame;
