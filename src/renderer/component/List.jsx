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
            this.props.items.entrySeq().forEach((seq) => {
                const key = seq[0]
                const item = seq[1]
                if (key == 'entitySelected') {
                    return
                }
                items.push(<div key={item.get('id')} onClick={() => {this.click(item)}} > {item.get('name')} </div>);
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
