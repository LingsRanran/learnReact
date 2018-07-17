import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';
import Content from './Content';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const themeReducer = (state , action) => {
    if(!state){
        return {
            themeColor : 'green'
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
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
