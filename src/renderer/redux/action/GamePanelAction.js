let ActionTypes = {
    AdjustRect: 'AdjustRect'
};

let Actions = {};
Actions.adjustRect = function(v) {
    return {
        type: ActionTypes.AdjustRect,
        rect: v
    }
}

export {
    ActionTypes as GamePanelActionTypes,
    Actions as GamePanelActions
}
