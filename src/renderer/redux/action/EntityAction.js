let ActionType = {
    EntityAdd: 'EntityAdd',
    EntityRemove: 'EntityRemove',
    EntitySelected: 'EntitySelected'
};

let Action = {};

/*
 * v: {name:'name', id:1}
 */
Action.entityAddAct = function(v) {
    return {
        type: ActionType.EntityAdd,
        entity: v
    }
}

/*
 * v: {name:'name', id:1}
 */
Action.entityRemoveAct = function(v) {
    return {
        type: ActionType.EntityRemove,
        entity: v
    }
}

/*
 * v: id
 */
Action.entitySelectedAct = function(v) {
    return {
        type: ActionType.EntitySelected,
        entityId: v
    }
}

export {
    ActionType as EntityActionType,
    Action as EntityAction
}
