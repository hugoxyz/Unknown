import React from 'react';
import * as PIXI from 'pixi.js';
import { Panel } from './Panel';
import { List } from './List';
import { Transform } from './Transform';
import { Unknown } from '../../unknown/Unknown';

class PropertyPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'entityID': 0,
            'components': {
                'transform': {
                    'position': [1, 2, 3],
                    'scale': [5, 2, 3],
                    'rotate': [1, 0, 3],
                }
            }
        }
    }

    componentDidMount() {
    }

    render() {
        console.log(this.props.entitySelected)
        if (null == this.props.entitySelected) {
            return null
        }
        let comps = [];
        let i = 0;
        this.props.entitySelected.entrySeq.forEach((seq) => {
            const compName = seq[0]
            const compInfo = seq[1]
            comps.push(<Transform key={i} compInfo={compInfo} compName={compName} />);
            i++;
        })
        // for (var compName in this.props.entitySelected){
        //     if (this.state.components.hasOwnProperty(compName)) {
        //         comps.push(<Transform key={i} compInfo={this.state.components[compName]} compName={compName} />);
        //         i++;
        //     }
        // }
        return (
            <Panel width={this.props.width} height={this.props.height} >
                {comps}
            </Panel>
            );
    }

}

export { PropertyPanel };
