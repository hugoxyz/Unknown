import {
    Component
} from '../core/Component'

class Transform extends Component {
    constructor(position, rotation, scale) {
        super();
        super.reset({
            'position': position,
            'rotation': rotation,
            'scale': scale
        });
    }
}

Transform.defaultD = {
    'position': {
        x: 0,
        y: 0,
        z: 0
    },
    'rotation': {
        x: 0,
        y: 0,
        z: 0
    },
    'scale': {
        x: 1,
        y: 1,
        z: 1
    }
}

export {
    Transform
}
