import React  from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './CommentApp'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

/* class Input extends Component{
    constructor(){
        super();
        this.state = {
            userInput : 0
        }
    }

    handleInputChange(e){
        if(!e.target.value){
            e.target.value = 0;
        }

        console.log(e.target.value)

        if(this.props.inputChange){
            this.props.inputChange(e.target.value);
        }

        this.setState({
            userInput : e.target.value
        })
    }

    render(){
        return (
            <input type="number" value={this.state.userInput} onChange={this.handleInputChange.bind(this)} />
        )
    }
}

class PercentageShower extends Component{
    turnNum(num){
        num = parseFloat(num);

        num *= 100;

        return num.toFixed(2);
    }

    render(){
        return (
            <div>{this.turnNum(this.props.userInput)}%</div>
        )
    }
}

class PercentageApp extends Component{
    constructor(){
        super();
        this.state = {
            userInput : 0
        }
    }

    handleInputChangeOnApp(val){
        this.setState({
            userInput : val
        })
    }

    render(){
        return (
            <div>
                <Input inputChange={this.handleInputChangeOnApp.bind(this)} />
                <PercentageShower userInput={this.state.userInput} />
            </div>
        )
    }
}

ReactDOM.render(
    <PercentageApp />,
    document.getElementById('root')
) */
ReactDOM.render(
    <CommentApp />,
    document.getElementById('root')
)

registerServiceWorker();
