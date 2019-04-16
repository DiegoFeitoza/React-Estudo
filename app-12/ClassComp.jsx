import React, {Component} from 'React'

export default class ClassComp extends Component{
	render(){
		return(
			<div>
				<h2>{`Seja bem vindo: ${this.props.nome} ${this.props.sobrenome}`}</h2>
				<hr />
				<h4>{`Protocolo de acesso: ${this.props.protocolo}`}</h4>
			</div>
		)
	}
}