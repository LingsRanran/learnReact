import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]

class Lesson extends Component{

    render(){
        const {lesson} = this.props;

        return (
            <div className='lesson' onClick={() => {console.log(this.props.index + ' - ' + lesson.title)}}>
                <h1>{lesson.title}</h1>
                <p>{lesson.description}</p>
            </div>
        )
    }
}

class LessonsList extends Component{
    render(){
        return (
            <div className='lessonsList'>
                {
                    this.props.lessons.map((lesson,i) => <Lesson lesson={lesson} key={i} index={i}/>)
                }
            </div>
        )
    }
}

ReactDOM.render(
    <LessonsList lessons={lessons}/>,
    document.getElementById('root')
)

registerServiceWorker();
