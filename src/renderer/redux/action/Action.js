const ActionType = {
    Type1 = 'Type1'
}

let Actions = {}

Actions.fun = function(arg) {
    return {
        type: ActionType.Type1,
        arg
    }
}

export {
    ActionType,
    Actions
}
