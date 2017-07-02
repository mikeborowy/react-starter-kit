import React from 'react';
import imgWorld from '../../assets/world.jpg'; 
import './helloworld.scss';
import DownloadIcon from 'react-icons/lib/fa/cloud-download'


export default class HelloWorld extends React.Component {

    render(){
        let {message} = this.props;
        return (
            <div className="hello-world">
                <DownloadIcon />
                <h1>{message}</h1>
                <img src={imgWorld} alt="World"/>
            </div>
        );
    }
}

HelloWorld.propTypes = {
    message: React.PropTypes.string
};
