// Statement 1.

let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function () {
        console.log(this.step);
    }
};

// ladder.up();  // 1
// ladder.up(); // 2
// ladder.up(); // 3

// ladder.down(); // 2

// ladder.showStep(); // 2

// --------------------------------------------------------------------------------------------
let ladder2 = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        console.log(this.step);
        return this;
    }
};

// 100k.100k.100k.100k.100k
ladder2.up().up().up().down().showStep().up().up().showStep();

// ladder2.up() = 100K
// ladder2.up().up() =  100K.up() = 100K
// ladder2.up().up().up().down() = ladder2.up().up() =  100K.up() = 100K