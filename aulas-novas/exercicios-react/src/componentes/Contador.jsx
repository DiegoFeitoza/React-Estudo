import React, {Component} from 'react'

class Contador extends Component{
    maisUm(){
        this.props.numero++
    }
    
    render(){
        return(
            <div>
                <div>Número: {this.props.numero}</div>
                <button onClick={this.maisUm}>inc</button>
                <button>dec</button>
            </div>
        )
    }
}

export default Contador