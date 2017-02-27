import * as PIXI from 'pixi.js';
import {
    System
} from '../core/system';
import {
    Unknown
} from '../Unknown';

const Container = PIXI.Container;
const Sprite = PIXI.Sprite;
const resources = PIXI.loader.resources;
const scene = new Container();

class Renderer extends System {

    constructor() {
        super();
    }

    update(dt) {
        if (undefined == Unknown.pixirenderer) {
            return;
        }
        let renderTable = Unknown.registerTables.table('renderer', true);
        let width = Unknown.pixirenderer.width;
        let height = Unknown.pixirenderer.height;
        const entities = this.world.getEntities('SpriteRendererInfo');
        for (var i = 0; i < entities.length; i++) {
            const spriteInfo = entities[i].getComponent('SpriteRendererInfo');
            const entityId = entities[i].id;
            let sprite = null;
            if (!(entityId in renderTable)) {
                sprite = new Sprite.fromImage(spriteInfo.d.img);
                sprite.anchor.x = 0.5;
                sprite.anchor.y = 0.5;

                renderTable[entityId] = sprite;
                scene.addChild(sprite);
            } else {
                sprite = renderTable[entityId]
            }
            sprite.x = 0 + width / 2;
            sprite.y = 0 + height / 2;
        }

        Unknown.pixirenderer.render(scene);
    }

}

export {
    Renderer
}
