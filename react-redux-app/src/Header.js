import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component{
    static contextTypes = {
        store : PropTypes.object
    }

    constructor(){
        super();
        this.state = {
            themeColor : ''
        }
    }

    componentWillMount () {
        const { store } = this.context
        this._updateThemeColor()
        store.subscribe(() => this._updateThemeColor())
    }

    _updateThemeColor(){
        const {store} = this.context;
        const state = store.getState();
        this.setState({
            themeColor : state.themeColor
        })
    }

    render(){
        return (
            <h1 style={{color : this.state.themeColor}}>hello , world</h1>
        )
    }
}

export default Header;