import React from 'react'

export default props => (
	<div className="container">
		<h1>Familia {props.sobrenome}</h1>
		{ React.Children.map(props.children,
			child => React.cloneElement(child, {...props} )			
		) }
	</div>
)