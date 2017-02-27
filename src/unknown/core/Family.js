import {
    EntityChain
} from './EntityChain';
import Signal from 'signals';

/**
 * The family is a collection of entities having all the specified components.
 * @class
 */

class Family {

    /**
     * @constructor
     * @param {Array} componentNames
     */
    constructor(componentNames) {

        this._componentNames = componentNames;

        this._entities = new EntityChain();

        this.entityAdded = new Signal();

        this.entityRemoved = new Signal();
    }

    /**
     * Get the entities of this family.
     * @public
     * @return {Array}
     */
    getEntities() {
        return this._entities.toArray();
    }

    /**
     * Add the entity into the family if match.
     * @public
     * @param {Entity} entity
     */
    addEntityIfMatch(entity) {
        if (!this._entities.has(entity) && this._matchEntity(entity)) {
            this._entities.add(entity);
            this.entityAdded.dispatch(entity);
        }
    }

    /**
     * Remove the entity into the family if match.
     * @public
     * @function
     * @param {Entity} entity
     */
    removeEntity(entity) {
        if (this._entities.has(entity)) {
            this._entities.remove(entity);
            this.entityRemoved.dispatch(entity);
        }
    }

    /**
     * Handler to be called when a component is added to an entity.
     * @public
     * @param {Entity} entity
     * @param {String} componentName
     */
    onComponentAdded(entity, componentName) {
        this.addEntityIfMatch(entity);
    }

    /**
     * Handler to be called when a component is removed from an entity.
     * @public
     * @param {Entity} entity
     * @param {String} componentName
     */
    onComponentRemoved(entity, componentName, removedComponent) {
        var names, i, len;

        // return if the entity is not in this family
        if (!this._entities.has(entity)) {
            return;
        }

        // remove the node if the removed component is required by this family
        names = this._componentNames;
        for (i = 0, len = names.length; i < len; ++i) {
            if (names[i] === componentName) {
                this._entities.remove(entity);
                this.entityRemoved.dispatch(entity, removedComponent);
            }
        }
    }

    /**
     * Check if an entity belongs to this family.
     * @private
     * @param {Entity} entity
     * @return {Boolean}
     */
    _matchEntity(entity) {
        var componentNames, i, len;

        componentNames = this._componentNames;

        for (i = 0, len = componentNames.length; i < len; ++i) {
            if (!entity.hasComponent(componentNames[i])) {
                return false;
            }
        }

        return true;
    }
}

export {
    Family
}
