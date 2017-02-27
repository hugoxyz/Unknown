import React from 'react';
import styles from './MainPage.css';

class MainPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={styles.treePanel}>
                </div>
                <div className={styles.gamePanel}>
                </div>
            </div>
            );
    }
}

export { MainPage }
