import {
    ActionType,
    Action
} from '../action';

export const config = (state = {}, action = {}) => {
    const Type = ActionType.windowsActionType;
    switch (action.type) {
        // case Types.SetConfig:
        //     {
        //         return action.config;
        //     }
        default: {
            return state;
        }
    }
}

export const entitys = (state = {}, action = {}) => {
    const Type = ActionType.EntityActionType;
    switch (action.type) {
        case Type.EntityAdd:
            {
                state
            }
        default:
            {
                return state;
            }
    }

}

export const gamePanel = (state = {}, action = {}) => {
    const Type = ActionType.GamePanelActionType;
    switch (action.type) {
        case Type.AdjustRect:
            {
                return action.rect;
            }
        default:
            {
                return state;
            }
    }
}
