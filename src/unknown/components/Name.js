import {
    Component
} from '../core/Component'

class Name extends Component {
    constructor(name) {
        super();
        super.reset({
            'name': name
        });
    }
}

Name.defaultD = {
    'name': 'New'
}

export {
    Name
}
