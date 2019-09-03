import React from 'react'
import ReactDom from 'react-dom'
import { combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './counterReducer'
import Counter from './counter'

const reducers = combineReducers({
	counter: counterReducer
})

ReactDom.render(
	<div className="jumbotron">
		<div className="container">
			<div className="row">
				<Provider store={createStore(reducers)} >
					<Counter />
				</Provider>
			</div>
		</div>
	</div>
, document.getElementById('app'))