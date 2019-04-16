import React, {Component} from 'React'
import {Erro} from './alerts'

export default class ClassComp extends Component{
	constructor(props){
		super(props)
		this.state = {
			nome: props.nome,
			valor: props.valorInicial
		}
	}

	exibeErro(mensagem){
		const $campoErro = document.querySelector("#campoAlerts").querySelector('.alert-danger')
		const $campoAlert = document.querySelector("#campoAlerts")

		$campoErro.innerText = $campoErro.textContent + mensagem		
		$campoAlert.style.display = 'block'
		setTimeout(function(){
			$campoAlert.style.display = 'none'
			$campoErro.innerText = 'Aviso: '
		},2000)
	}

	alteraNome(newName){
		(newName && newName != "") ? this.setState({...this.state, nome: newName}) : this.exibeErro('Input de nome vazio!')		
	}

	op(val){
		this.setState({
			...this.state,
			valor: this.state.valor + val
		})
	}

	render(){
		return(
			<div>
				<div id="campoAlerts" style={{display: 'none'}}>
					<Erro />
				</div>
				<form id="formEnvio" onSubmit={(e) => 
						e.preventDefault()						
					}>
					<label>Digite seu nome: &nbsp;</label>
					<input type="text" id="nome"/>	
					<button onClick={() => 
						this.alteraNome(document.querySelector("#nome").value)
					}>
						Alterar
					</button>
					<button onClick={() =>
						this.setState({...this.state, nome: 'Visitante'})
					}>
						Limpar
					</button>
				</form>
				<br />
				<h2>{`Seja bem vindo: ${this.state.nome} `}</h2>
				<hr />
				<br />
				<label>Valor: <span style={{fontSize: '20px',fontWeight: 'bold'}}>{this.state.valor}</span></label>
				<br />
				<button className="btn btn-success" onClick={() => this.op(+1)}>+1</button>
				<button className="btn btn-danger" onClick={() => this.op(-1)}>-1</button>
			</div>
		)
	}
}