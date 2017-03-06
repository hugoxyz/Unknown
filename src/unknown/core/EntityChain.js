class EntityChainNode {
    constructor(entity) {
        this._entity = entity;
        this._prev = null;
        this._next = null;
    }

    get entity() {
        return this._entity;
    }

    get prev() {
        return this._prev;
    }

    get next() {
        return this._next;
    }

}

class EntityChain {
    constructor() {
        this._head = null;
        this._tail = null;
        this._length = null;
        this._entities = {};
    }

    get head() {
        return this._head;
    }
    get tail() {
        return this._tail;
    }
    get length() {
        return this._length;
    }

    add(entity) {
        var node = new EntityChainNode(entity);

        if (this._head === null) {
            this._head = this._tail = node;
        } else {
            node._prev = this._tail;
            this._tail._next = node;
            this._tail = node;
        }

        this._length += 1;
        this._entities[entity.id] = node;
    }

    remove(entity) {
        var node = this._entities[entity.id];

        if (node === undefined) {
            return;
        }

        if (node._prev === null) {
            this._head = node._next;
        } else {
            node._prev._next = node._next;
        }
        if (node._next === null) {
            this._tail = node._prev;
        } else {
            node._next._prev = node._prev;
        }

        this._length -= 1;
        delete this._entities[entity.id];
    }

    has(entity) {
        return this._entities[entity.id] !== undefined;
    }

    get(id) {
        return this._entities[id].entity;
    }

    clear() {
        this._head = this._tail = null;
        this._length = 0;
        this._entities = {};
    }

    toArray() {
        var array, node;

        array = [];
        for (node = this._head; node; node = node._next) {
            array.push(node._entity);
        }

        return array;
    }
}

export {
    EntityChain
}
