import {
    ActionTypes,
    Actions
} from '../action';

export const config = (state = {}, action = {}) => {
    const Types = ActionTypes.windowsActionTypes;
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

export const gamePanel = (state = {}, action = {}) => {
    const Types = ActionTypes.GamePanelActionTypes;
    switch (action.type) {
        case Types.AdjustRect:
            {
                return action.rect;
            }
        default:
            {
                return state;
            }
    }
}
