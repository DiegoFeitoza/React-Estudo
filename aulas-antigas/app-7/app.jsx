import React from 'react'
import ReactDom from 'react-dom'
import {BtnPrimary, BtnSecondary, BtnSuccess, BtnDanger, BtnWarning, BtnInfo, BtnLight, BtnDark, BtnLink, BtnOutlinePrimary} from './botoes'

ReactDom.render(
	<div className="container">
		<div className="row">
			<BtnPrimary tituloButton="Primary" />
			<BtnSecondary tituloButton="Secondary" />
			<BtnSuccess tituloButton="Success" />
			<BtnDanger tituloButton="Danger" />
			<BtnWarning tituloButton="Warning" />
			<BtnInfo tituloButton="Info" />
			<BtnLight tituloButton="Light" />
			<BtnDark tituloButton="Dark" />
			<BtnLink tituloButton="Link" />		
		</div>
		<div className="row">
			<BtnOutlinePrimary tituloButton="Outline Primary" />
		</div>
	</div>
, document.getElementById('app'))