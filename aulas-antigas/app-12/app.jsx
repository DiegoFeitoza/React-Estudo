import React from 'react'
import ReactDom from 'react-dom'
import ClassComp from './ClassComp'

ReactDom.render(
	<div className="jumbotron">
		<div className="container">
			<div className="row">
				<ClassComp nome="Diego" sobrenome="Feitoza" protocolo="2018-11165014" />
			</div>
		</div>
	</div>
, document.getElementById('app'))