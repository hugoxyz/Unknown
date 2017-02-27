class Component {
    constructor() {
        this.name = this.family();
    }

    reset(args) {
        if (null == args) {
            this.d = this.defaultD;
        } else {
            this.d = args;
        }
    }

    family() {
        return this.constructor.name;
    }
}

Component.defaultD = {}

export {
    Component
}
