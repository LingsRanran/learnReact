import React , {Component} from 'react';
import PropType from 'prop-types';

class Comment extends Component{
    static propTypes = {
        comment : PropType.object.isRuqired
    }

    constructor(){
        super();
        this.state = {
            timeString : ''
        }
    }

    componentWillMount(){
        this._updateTimeString();
    }

    _updateTimeString(){

    }

    render(){
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.userName}</span> &nbsp;: &nbsp;
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}

export default Comment;