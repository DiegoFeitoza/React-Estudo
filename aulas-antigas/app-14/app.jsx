import React from 'react'
import ReactDom from 'react-dom'
import Field from './field'

ReactDom.render(
	<div className="jumbotron">
		<div className="container">
			<div className="row">
				<Field firstValue="Teste" />
			</div>
		</div>
	</div>
, document.getElementById('app'))