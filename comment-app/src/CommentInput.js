import React,{Component} from 'react';
import PropType from 'prop-types'

class CommentInput extends Component{
    static propTypes = {
        onSubmit : PropType.func
    }

    constructor(){
        super();
        this.state = {
            userName : '',
            content : ''
        }
    }

    handleUsernameChange(event){
        this.setState({
            userName : event.target.value
        })
    }

    handleContentChange(event){
        this.setState({
            content : event.target.value
        })
    }

    handleSubmit(){
        if(this.props.onSubmit){
            this.props.onSubmit({
                userName : this.state.userName,
                content : this.state.content,
                createdTime : +new Date(),
            })
        }

        this.setState({
            content : ''
        })
    }

    handleUsernameBlur(event){
        this._saveUsername(event.target.value);
    }

    _saveUsername(userName){
        localStorage.setItem(
            'userName' , userName
        )
    }

    _loadUsername(){
        const userName = localStorage.getItem('userName');
        if(userName){
            this.setState({
                userName : userName
            })
        }
    }

    componentWillMount(){
        this._loadUsername();
    }

    componentDidMount(){
        this.textarea.focus();
    }

    render(){
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input 
                            value = {this.state.userName} 
                            onBlur = {this.handleUsernameBlur.bind(this)}
                            onChange = {this.handleUsernameChange.bind(this)} 
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea 
                            ref={(textarea) => {
                                this.textarea = textarea
                            }} 
                            value={this.state.content} 
                            onChange={this.handleContentChange.bind(this)} 
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput;