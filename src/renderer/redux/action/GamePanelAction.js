let ActionType = {
    AdjustRect: 'AdjustRect'
};

let Action = {};
Action.adjustRect = function(v) {
    return {
        type: ActionTypes.AdjustRect,
        rect: v
    }
}

export {
    ActionType as GamePanelActionType,
    Action as GamePanelAction
}
