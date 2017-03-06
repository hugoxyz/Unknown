import React from 'react';
import { TreePanel } from './TreePanel';
import { GamePanel } from './GamePanel';
import { PropertyPanel } from './PropertyPanel';
import styles from './Win.css';

class Win extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            winSize: this.getWinSize()
        };
    }

    getWinSize() {
        let e = window,
            a = 'inner';

        if (!('innerWidth' in window )){
            a = 'client';
            e = document.documentElement || document.body;
        }

        return { w : e[ a+'Width' ] , h : e[ a+'Height' ] };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        return (
            <div className={styles.win}>
                <TreePanel width="150" height={this.state.winSize.h} entitys={this.props.entitys}
                    entitySelectedAct={this.props.entitySelectedAct} />
                <GamePanel width={this.state.winSize.w-300} height={this.state.winSize.h} />
                <PropertyPanel width="150" height={this.state.winSize.h} entitySelected={this.props.entitySelected}/>
            </div>
            );
    }
}

export { Win }
