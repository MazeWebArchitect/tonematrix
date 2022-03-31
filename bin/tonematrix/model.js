export class Pattern {
    constructor() {
        this.data = new Uint32Array(16);
    }
    serialize() {
        let r = [];
        for (let i = 0; i < 16; i++) {
            r.push(this.data[i].toString(32));
        }
        return r.join(".");
    }
    deserialize(code) {
        try {
            code.split(".")
                .map(c => parseInt(c, 32))
                .forEach((value, index) => this.data[index] = value);
        }
        catch (e) {
        }
    }
    setStep(x, y, value) {
        if (value) {
            this.data[y] |= 1 << x;
        }
        else {
            this.data[y] &= ~(1 << x);
        }
    }
    getStep(x, y) {
        return 0 !== (this.data[y] & (1 << x));
    }
    clear() {
        this.data.fill(0);
    }
}
export class Model {
    constructor() {
        this.pattern = new Pattern();
        this.stepIndex = 0 | 0;
    }
}
//# sourceMappingURL=model.js.map