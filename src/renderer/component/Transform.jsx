import React from 'react';
import * as PIXI from 'pixi.js';
import { Panel } from './Panel';
import { Unknown } from '../../unknown/Unknown';
import styles from './Transform.css';

class Transform extends React.Component {

    constructor(props) {
        super(props);
        this.status = {
            'shouldUpdate': false,
            compInfo: this.props.compInfo
        }

    }

    componentDidMount() {
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     let bUpdate = this.status['shouldUpdate'];
    //     this.status['shouldUpdate'] = false;
    //     return bUpdate;
    // }

    onComponentInfoChange(key, idx, value) {
        let values = this.status.compInfo[key]
        values[idx] = value
        this.setState({compInfo: {key: values}});
    }

    render() {
        let items = [];
        let i = 0;
        for (let k in this.status.compInfo) {
            if (this.status.compInfo.hasOwnProperty(k)) {
                items.push(<div key={i} className={styles.LineLayout}>
                        <b>{k}</b>
                        <input className={styles.ItemLayout} type="text" onChange={(event)=>{this.onComponentInfoChange(k, 0, event.target.value);}} value={this.props.compInfo[k][0]} />
                        <input className={styles.ItemLayout} type="text" onChange={(event)=>{this.onComponentInfoChange(k, 1, event.target.value);}} value={this.props.compInfo[k][1]} />
                        <input className={styles.ItemLayout} type="text" onChange={(event)=>{this.onComponentInfoChange(k, 2, event.target.value);}} value={this.props.compInfo[k][2]} />
                    </div>)
                i++;
            }
        }
        return (
            <div style={{width:'150px'}}>
                <b>{this.props.compName}</b>
                {items}
            </div>
            );
    }

}

export { Transform };
