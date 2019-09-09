import React, { Component } from 'react';

import './filme.css';

class Filme extends Component{
    constructor(props){
        super(props);

        this.state = {
            filme: []
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        let url = `http://www.sujeitoprogramador.com/r-api/?api=filmes/${id}`;

        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            this.setState({filme:json});
            console.log(json);
        })
    }

    render(){
        return(
            <div className='filme-info'>
               
                <h2 className='title'>{this.state.filme.nome}</h2>
                <img
                className='img'
                src={this.state.filme.foto} alt={this.state.filme.nome}>                  
                </img>

                {this.state.filme.length !== 0 && <h3 className='sinopse'>Sinopse</h3>} 
                {this.state.filme.sinopse}
                
            </div>
        );
    }
}

export default Filme;