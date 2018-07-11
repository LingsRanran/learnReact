import React,{Component} from 'react';
import Comment from './Comment';

class CommentList extends Component{
    render(){
        const comments = [
            {userName: 'Jerry', content: 'Hello'},
            {userName: 'Tomy', content: 'World'},
            {userName: 'Lucy', content: 'Good'}
        ];

        return (
            <div>
                {comments.map((comment, i) => <Comment comment={comment} key={i} />)}
            </div>
        )
    }
}

export default CommentList;