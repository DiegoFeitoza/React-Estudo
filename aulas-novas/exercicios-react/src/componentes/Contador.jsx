import React, {Component} from 'react'

class Contador extends Component{
    state = {
        numero: this.props.numeroInicial
    }
    
    maisUm = () =>{
        this.setState({numero: this.state.numero +1})
    }

    menosUm = () => {
        this.setState({numero: this.state.numero -1})
    }

    alterarNumero = diferenca => {
        this.setState({numero: this.state.numero + diferenca})
    }
    
    render(){
        return(
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>inc</button>
                <button onClick={this.menosUm}>dec</button>
                <button onClick={() => this.alterarNumero(10)}>inc+10</button>
                <button onClick={() => this.alterarNumero(-10)}>dec-10</button>
            </div>
        )
    }
}

export default Contador

// Solução 1 para o problema do this => Criando o bind no construtor
// constructor(props) {
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

// Solução 2 para o problema do this => Função arrow no onClick
/* { <button onClick={() => this.maisUm()}>inc</button> }*/

// Solução 3 para o proble do this => transformar a função em arrow
// maisUm = () =>{
//     // this.props.numero++
//     console.log(this)
// }