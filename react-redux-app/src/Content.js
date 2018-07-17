import React from 'react';
import PropTypes from 'prop-types';
import ThemeSwitch from './ThemeSwitch';
import {connect} from 'react-redux'

class Content extends React.Component{
    static propTypes = {
        themeColor : PropTypes.string
    }

    render(){
        return (
            <div>
                <p style={{color : this.props.themeColor}} >To be or not to be , this is a question</p>
                <ThemeSwitch />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor : state.themeColor
    }
}

Content = connect(mapStateToProps)(Content);

export default Content;