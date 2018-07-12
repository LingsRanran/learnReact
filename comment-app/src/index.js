/*
 * @Author: Ranran
 * @Date: 2018-07-13 01:28:31
 * @LastEditors: Ranran
 * @LastEditTime: 2018-07-13 01:28:31
 * @Description: 
 * @Email: ranran0036@163.com
 * @GitHub: github.com/LingsRanran
 */
import React , {Component} from 'react';
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
/* ReactDOM.render(
    <CommentApp />,
    document.getElementById('root')
) */

class Clock extends Component{
    constructor(){
        super();
        this.state = {
            date : new Date()
        }
    }

    componentWillMount(){
        this.timer = setInterval(() => {
            this.setState({
                date : new Date()
            })
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return (
            <div>
                <h1>
                    <p>现在的时间是：</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

class Index extends Component{
    constructor(){
        super();
        this.state = {
            isShowClock : true
        }
    }

    handleShowOrHide(){
        this.setState({
            isShowClock : !this.state.isShowClock
        })
    }

    render(){
        return (
            <div>
                {this.state.isShowClock ? <Clock /> : null}
                <button onClick={this.handleShowOrHide.bind(this)}>SHOW or HIDE Clock</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)

registerServiceWorker();
