import {
    ActionType,
    Action
} from '../action';
import Immutable from 'immutable';

const initState = Immutable.fromJS({});

export const config = (state = initState, action = {}) => {
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

export const entitys = (state = initState, action = {}) => {
    const Type = ActionType.EntityActionType;
    switch (action.type) {
        case Type.EntityAdd:
            {
                return state.set(action.entity.id, action.entity);
            }
        case Type.EntitySelected:
            {
                return state.set('entitySelected', action.entityInfo);
            }
        default:
            {
                return state;
            }
    }
}

export const gamePanel = (state = initState, action = {}) => {
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
