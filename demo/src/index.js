import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class LikeButton extends Component{
    static defaultProps = {
        likedText:'取消',
        unlinkedText:'点赞'
    }

    constructor(){
        super();
        this.state = {
            isLiked:false
        }
    }

    handleClickOnBtn(){
        this.setState({
            isLiked:!this.state.isLiked
        })
    }

    render(){
        return (
            <button onClick={this.handleClickOnBtn.bind(this)}>
                {this.state.isLiked ? this.props.likedText : this.props.unlinkedText}👍
            </button>
        )
    }
}

ReactDOM.render(
    <LikeButton likedText='unlike' unlinkedText='like'/>,
    document.getElementById('root')
)

registerServiceWorker();
