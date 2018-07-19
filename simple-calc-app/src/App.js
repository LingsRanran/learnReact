import React, { Component } from 'react';
import Screen from './Screen';
import ButtonList from './ButtonList';

class App extends Component {
    render(){
        return (
            <div>
                <Screen />
                <ButtonList />
            </div>
        )
    }
}

export default App;
