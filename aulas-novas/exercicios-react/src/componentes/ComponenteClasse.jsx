import React, { Component } from 'react'

class ComponenteClasse extends Component{
    render() {

        return(
            <h1>{this.props.titulo || 'Valor default'}</h1>
        )
    }
}

export default ComponenteClasse
