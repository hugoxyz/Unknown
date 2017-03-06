let ActionType = {
    EntityAdd: 'EntityAdd',
    EntityRemove: 'EntityRemove'
};

let Action = {};

/*
 * v: {name:'name', id:1}
 */
Action.entityAdd = function(v) {
    return {
        type: ActionType.EntityAdd,
        entity: v
    }
}

/*
 * v: {name:'name', id:1}
 */
Action.entityRemove = function(v) {
    return {
        type: ActionType.EntityRemove,
        entity: v
    }
}

export {
    ActionType as EntityActionType,
    Action as EntityAction
}
