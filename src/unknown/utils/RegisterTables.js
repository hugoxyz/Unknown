class RegisterTables {
    constructor() {
        this.tables = {};
    }

    createTable(name) {
        return this.tables[name] = {};
    }

    table(name, create) {
        if (create && !(name in this.tables)) {
            this.createTable(name);
        }
        return this.tables[name];
    }

}

export {
    RegisterTables
}
