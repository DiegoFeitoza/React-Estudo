import React from 'react'
import ReactDom from 'react-dom'
import { combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'
import Field from './field'

const reducers = combineReducers({
	field: () => ({ value: 'opa2' })
})

ReactDom.render(
	<div className="jumbotron">
		<div className="container">
			<div className="row">
				<Provider store={createStore(reducers)} >
					<Field firstValue="Teste" />
				</Provider>
			</div>
		</div>
	</div>
, document.getElementById('app'))