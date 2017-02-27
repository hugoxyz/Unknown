const ActionType = {
    gamePanel: {
        AdjustRect: 'AdjustRect'
    }
}

let Actions = {}

Actions.fun = function(arg) {
    return {
        type: ActionType.Type1,
        arg
    }
}

Actions.setWinSize = function(rect) {
    return {
        type: ActionType.SetWinRect,
        rect
    }
}

export {
    ActionType,
    Actions
}
