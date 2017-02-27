import React from 'react';
import * as PIXI from 'pixi.js';
// import {List, ListItem, makeSelectable} from 'material-ui/List';
import { Panel } from './Panel';
import { List } from './List';
import { Unknown } from '../../unknown/Unknown';

class TreePanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'entities': [
            {
                'text': 'Name1',
                'id': 12
            },
            {
                'text': 'Name2',
                'id': 13
            }
            ]
        }
    }

    componentDidMount() {
        /*
            <ListItem
                value={entity.id}
                primaryText={entity.name}
            />
        */
    }

    onSelectItem(item) {
        console.log(item);
    }

    render() {
        return (
            <Panel width={this.props.width} height={this.props.height} >
                <List items={this.state.entities} onSelectItem={this.onSelectItem}>
                </List>
            </Panel>
            );
    }

}

export { TreePanel };
