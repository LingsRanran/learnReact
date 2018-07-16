import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';
import Content from './Content';

function createStore (reducer){
    let state = [];
    const listeners = [];
    const subscribe = (listener) => {listeners.push(listener)};
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state , action);
        listeners.forEach((listener) => listener());
    }

    dispatch({})//初始化state

    return {getState , dispatch , subscribe};
}

const themeReducer = (state , action) => {
    if(!state){
        return {
            themeColor : 'red'
        }
    }

    switch(action.type){
        case 'CHANGE_COLOR' : 
            return {...state , themeColor : action.themeColor};
        default :
            return state;
    }
}

const store = createStore(themeReducer);

class Index extends React.Component{
    static childContextTypes = {
        store : PropTypes.object
    }

    getChildContext(){
        return {store};
    }

    render(){
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);
registerServiceWorker();
