import * as React from 'react';

export default class HelloWorld extends React.Component {

    render(){
        let {message} = this.props;
        return(
            <div>{message}</div>
        );
    }

}

HelloWorld.propTypes= {
    message: React.PropTypes.string
}
