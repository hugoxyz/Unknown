import React from 'react';
import styles from './Panel.css';

class List extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    click(item) {
        if (this.props.onSelectItem) {
            this.props.onSelectItem(item);
        }
    }

    render() {
        const items = [];
        if (this.props.items) {
            let i = 0;
            this.props.items.forEach((item) => {
                items.push(<div key={i} onClick={() => {this.click(item)}} > {item.text} </div>);
                i++;
            })
        }
        return (
            <div>
                {items}
            </div>
            );
    }
}

export { List }
