const Signal = require('signals');

class Entity {

    constructor() {
        this.id = ++Entity._id;
        this._components = {};
        this.onComponentAdded = new Signal();
        this.onComponentRemoved = new Signal();
    }

    hasComponent(componentName) {
        return this._components[Entity._compNamePre + componentName] !== undefined;
    }

    getComponent(componentName) {
        return this._components[Entity._compNamePre + componentName];
    }

    addComponent(component) {
        this._components[Entity._compNamePre + component.name] = component;
        this.onComponentAdded.dispatch(this, component.name, component);
    }

    removeComponent(componentName) {
        var removedComponent = this._components[Entity._compNamePre + componentName];
        this._components[Entity._compNamePre + componentName] = undefined;
        this.onComponentRemoved.dispatch(this, componentName, removedComponent);
    }
};

Entity._id = 0;
Entity._compNamePre = '$';

export {
    Entity
}
