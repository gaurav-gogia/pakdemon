import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1
        };
    };
    
    static propTypes = {
        search: PropTypes.func.isRequired
    };

    onTypeChange = (e) => this.setState({type: e.target.value});
    onClick = () => this.props.search(this.state.type);

    render() {
        return (
            <div className="card container">                            
            <h2>Pakdo apna Pakdemon:</h2>
                <form>                    
                    <select onChange={this.onTypeChange}>
                        <option value={1}>Normal</option>
                        <option value={3}>Flying</option>
                        <option value={10}>Fire</option>
                        <option value={4}>Poison</option>
                    </select>                    
                </form>
                <button className="btn" onClick={this.onClick}>Search for Type</button>
            </div>
        );
    }
}

export default SelectType;