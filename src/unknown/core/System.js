class System {

    init() {
        this.world = null;
    }

    addedToWorld(world) {
        this.world = world;
    }

    removedFromWorld() {
        this.world = null;
    }

    /**
     * Update the entities.
     * @public
     * @param {Number} dt time interval between updates
     */
    update(dt) {
        throw new Error('Subclassed should override this method');
    }
}

export {
    System
}
