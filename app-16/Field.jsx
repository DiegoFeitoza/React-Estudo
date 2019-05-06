import React, {Component} from 'React'
import { connect } from 'react-redux'

class Field extends Component{
	render(){
		return(
			<div>
				<label style={{marginBottom: '20px', fontSize: '25px', fontWeight: 'bold',display: 'block'}}>{this.props.value}</label>
				<input style={{background: 'transparent',outline:'none',border:'none',borderBottom:'2px solid gray',fontSize: '18px',color: 'rgba(150,150,150,0.8)',paddingLeft: '5px'}} type="text" value={this.props.value} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		value: state.field.value
	}
}

export default connect(mapStateToProps)(Field)