import React from 'react';
import styles from './Panel.css';

class Panel extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        return (
            <div className={styles.panel} style={{width:`${this.props.width}px`, height:`${this.props.height}px`}} >
                {this.props.children}
            </div>
            );
    }
}

export { Panel }
