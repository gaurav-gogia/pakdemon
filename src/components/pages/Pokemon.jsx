import '../../App.css';
import axios from 'axios';
import API_URL from '../../Constants';
import React, { Component } from 'react';
import { LinearProgress } from 'material-ui';
import SelectType from '../forms/SelectType';

class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            pakdemonList: []
        };
    }
    
    toggleLoading = () => this.setState({loading: !this.state.loading});
    toggleError = () => this.setState({error: !this.state.error});

    search = pakdemonType => {        
        if (!this.state.loading) this.toggleLoading();
        if (this.state.error) this.toggleError();
        
        axios.get(API_URL.TYPE+pakdemonType)
            .then(res => {                
                this.setState({pakdemonList: res.data.pokemon});                
                this.toggleLoading();    
            })
            .catch(e => {
                console.log(e);
                this.toggleError();
            });
    };

    render() {
        const {loading, error, pakdemonList} = this.state;
        return (
            <div>
                <LinearProgress color={error ? "secondary" : "primary"} style={{display: loading ? "block" : "none"}}/>
                <SelectType search={this.search}/>
                {error ? <div className="err-card">Could NOT catch Pakdemon :/</div> : undefined}
                {pakdemonList.map((pakde, index) => <div className="card pakde-card" key={index}>{pakde.pokemon.name}</div>)}                                    
            </div>
        );
    }
}

export default Pokemon;