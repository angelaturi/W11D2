import React from 'react';
import pokeball from '../../.././app/assets/images/pokeball.svg'


class PokemonIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.requestAllPokemon();
    }


    render(){
        return (
            <ul>                
                {this.props.pokemon.map((poke) => (
                    <li key={poke.id}>
                        {poke.name}
                        <img src={this.props.pokemon.imageUrl}/>
                        {/* <img src={pokeball}/> */}
                    </li>
                    ))
                    };              
            </ul>
        )
    }
}

export default PokemonIndex;