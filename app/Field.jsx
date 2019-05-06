import React, {Component} from 'React'

class Field extends Component{
	constructor(props){
		super(props)
		this.state = {
			value: props.firstValue,
		}
		this.handleChangeInput = this.handleChangeInput.bind(this)
	}

	handleChangeInput(e){
		this.setState({
			...this.state,
			value: e.target.value
		})		
	}

	render(){
		return(
			<div>
				<label style={{marginBottom: '20px', fontSize: '25px', fontWeight: 'bold',display: 'block'}}>{this.state.value}</label>
				<input style={{background: 'transparent',outline:'none',border:'none',borderBottom:'2px solid gray',fontSize: '18px',color: 'rgba(150,150,150,0.8)',paddingLeft: '5px'}} type="text" onChange={this.handleChangeInput} value={this.state.value} />
			</div>
		)
	}
}

export default Field