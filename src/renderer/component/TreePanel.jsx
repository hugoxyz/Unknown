import React from 'react';
import * as PIXI from 'pixi.js';
import Immutable from 'immutable';
// import {List, ListItem, makeSelectable} from 'material-ui/List';
import { Panel } from './Panel';
import { List } from './List';
import { Unknown } from '../../unknown/Unknown';

class TreePanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'entitys': [
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
        this.onSelectItem = this.onSelectItem.bind(this);
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
        this.props.entitySelectedAct(
            Immutable.fromJS(Unknown.getEntityInfo(item.get('id'))));
    }

    render() {
        return (
            <Panel width={this.props.width} height={this.props.height} >
                <List items={this.props.entitys} onSelectItem={this.onSelectItem}>
                </List>
            </Panel>
            );
    }

}

export { TreePanel };
