import {
    Component
} from '../core/Component';

class SpriteRendererInfo extends Component {
    constructor(img) {
        super();
        super.reset({
            'img': img
        });
    }
}

export {
    SpriteRendererInfo
}
