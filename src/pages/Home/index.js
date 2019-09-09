import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './home.css';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            filmes: []
        }
        this.loadMovie = this.loadMovie.bind(this);
    }

    componentDidMount(){
        this.loadMovie();
    }

    loadMovie(){
        let url = 'http://www.sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            this.setState({filmes: json});
            console.log(json);
        })
    }

    render(){
        return(
            <div className="container-box">

                <div className="lista-filmes">

                    {this.state.filmes.map((filme) => {
                        return(
                            <article key={filme.id}>
                                <strong>{filme.nome}</strong>
                                <img src={filme.foto} alt={filme.nome}></img>
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                                
                            </article>
                        );
                    })}

                </div>
            </div>
        );
    }
}

export default Home;