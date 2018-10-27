import axios from 'axios';
import Pakda from './Pakda';
import Popup from '../modal/Popup';
import API_URL from '../../Constants';
import React, { Component } from 'react';
import { LinearProgress } from 'material-ui';
import SelectType from '../forms/SelectType';

class Pokemon extends Component {

    state = {
        loading: false,
        error: false,
        pakdemonList: []
    };


    toggleLoading = () => this.setState({loading: !this.state.loading});
    toggleError = () => this.setState({error: !this.state.error});

    search = pakdemonType => {        
        if (!this.state.loading) this.toggleLoading();
        if (this.state.error) this.toggleError();
        
        axios.get(API_URL.TYPE+pakdemonType+"/")
            .then(res => {                
                this.setState({pakdemonList: res.data.pokemon});                
                this.toggleLoading();    
            })
            .catch(e => {
                console.log(e);
                this.toggleError();
            });
    };

    close = () => this.setState({loading: false});

    render() {
        const {loading, error, pakdemonList} = this.state;
        return (
            <div>
                {loading && <LinearProgress color={error ? "secondary" : "primary"}/>}
                <Popup show={loading} onClose={this.close}>
                    LOADING ....                    
                </Popup>
                
                <SelectType search={this.search} />
                {error && <div className="err-card">Could NOT catch Pakdemon :/</div>}
                <div className="grid-container">
                    {
                        pakdemonList.sort((a, b) => a.pokemon.name.localeCompare(b.pokemon.name))
                        .map((pakde, index) => <Pakda key={index} pakad={pakde.pokemon}/>)
                    }
                </div>                
            </div>
        );
    }
}

export default Pokemon;