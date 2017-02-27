
import React from 'react';
import Actions from './redux/action/Action';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component{
    construct() {
        this.props.store.dispatch(Action.setWinSize(this.getWinSize()));
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

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
};

