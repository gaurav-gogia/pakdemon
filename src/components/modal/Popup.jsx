import PropTypes from 'prop-types';
import React, { Component } from 'react';

const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50,
    zIndex: 100
};

const modalStyle = {
    color: '#000',
    backgroundColor: '#fff',
    radius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 30,
    position: 'relative'
};

const footerStyle = {
    position: 'absolute',
    bottom: 20
};

class Popup extends Component {
    componentWillMount() {
        document.addEventListener("keyup", this.onKeyUp)
    }
    
    componentDidMount() {
        document.addEventListener("keyup", this.onKeyUp)
    }
        
    onKeyUp = (e) => {
        if (e.which === 27) this.onClose(e);
    }

    onClose = (e) => {
        this.props.onClose() && this.props.onClose(e);
    }

    static propTypes = {
       onClose: PropTypes.func.isRequired  
    };        

    render() {        
        if (!this.props.show) return null;
        return (
            <div style={backdropStyle}>
                <div style={modalStyle}>
                    {this.props.children}
                    <div style={footerStyle}>
                        <button onClick={this.onClose}>Close</button>
                    </div>    
                </div>                
            </div>            
        );
    }
}

export default Popup;