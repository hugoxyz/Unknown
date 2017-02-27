import React from 'react';
import * as PIXI from 'pixi.js';
import { Panel } from './Panel';
import { Unknown } from '../../unknown/Unknown';

class GamePanel extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.pixiRenderer = PIXI.autoDetectRenderer(this.props.width, this.props.height);
        this.refs.pixiDiv.appendChild(this.pixiRenderer.view);

        this.pixiRenderer.view.ondragover =
        this.pixiRenderer.view.ondragleave =
        this.pixiRenderer.view.ondragend = () => false;
        this.pixiRenderer.view.ondrop = (e) => {
            e.preventDefault()
            for (let f of e.dataTransfer.files) {
                Unknown.addEntity({
                    'Transform': null,
                    'SpriteRendererInfo': {
                        'img': f.path
                    }
                })
            }
            return false;
        }

        Unknown.pixirenderer = this.pixiRenderer;

        // create the root of the scene graph
        // this.stage = new PIXI.Container();
        // this.stage.width = 1366;
        // this.stage.height = 768;
    }

    render() {
        return (
            <Panel width={this.props.width} height={this.props.height} >
                <div ref="pixiDiv" />
            </Panel>
            );
    }

}

export { GamePanel };
