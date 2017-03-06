import {
    Entity
} from './core/entity';

import {
    World
} from './core/world';

import {
    Renderer
} from './systems/Renderer';

import {
    Transform
} from './components/Transform';

import {
    SpriteRendererInfo
} from './components/SpriteRendererInfo';

import {
    Name
} from './components/Name';

import {
    RegisterTables
} from './utils/RegisterTables';

class Unknown {

    static init() {
        Unknown.world = new World();
        Unknown.loadSystems();
        Unknown.registerTables = new RegisterTables();
        Unknown.registerClasses();

        Unknown.resume();
    }

    static pause() {
        clearInterval(Unknown.intervalHandler);
        Unknown.intervalHandler = null;
    }

    static resume() {
        Unknown.intervalHandler =
            setInterval(function() {
                Unknown.world.update();
            }, 1000 / 60 * (60 * 1)); // 1 sec update
    }

    static finish() {
        clearInterval(Unknown.intervalHandler);
        Unknown.intervalHandler = null;
    }

    static loadSystems() {
        let s = new Renderer();
        Unknown.world.addSystem(s);
    }

    static addEntity(j) {
        let e = new Entity();
        Object.keys(j).forEach(function(key) {
            const obj = Unknown.getClass(key);
            let c = null == obj ? null : new obj();
            if (null != c) {
                c.reset(j[key]);
                e.addComponent(c);
            } else {
                console.log(`ERROR! new ${key} failed!`);
            }
        });

        Unknown.world.addEntity(e);
    }

    static getEntityInfo(id) {
        const entity = Unknown.world.getEntityById(id);
        return entity.dump();
    }

    static registerClasses() {
        let classes = Unknown.registerTables.table('classes', true);

        classes['Transform'] = Transform;
        classes['SpriteRendererInfo'] = SpriteRendererInfo;
        classes['Name'] = Name;
    }

    static getClass(name) {
        return Unknown.registerTables.table('classes')[name];
    }

}

Unknown.version = 'V0.0.1';
Unknown.classes = {};

export {
    Unknown
}
