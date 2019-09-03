import React from 'react'
import ReactDom from 'react-dom'
import {Titulo, SubTitulo} from './component'

ReactDom.render(
	<div>
		<Titulo titulo="Titulo Props" />
		<SubTitulo subtitulo="Subtiulo Props"/>
	</div>
, document.getElementById('app'))