import React from 'react'

const BtnPrimary = props => (
		<button type="button" className="btn btn-primary">{props.tituloButton}</button>
)

const BtnSecondary = props => (
		<button type="button" className="btn btn-secondary">{props.tituloButton}</button>
)

const BtnSuccess = props => (
		<button type="button" className="btn btn-success">{props.tituloButton}</button>
)

const BtnDanger= props => (
		<button type="button" className="btn btn-danger">{props.tituloButton}</button>
)

const BtnWarning = props => (
		<button type="button" className="btn btn-warning">{props.tituloButton}</button>
)

const BtnInfo = props => (
		<button type="button" className="btn btn-info">{props.tituloButton}</button>
)

const BtnLight = props => (
		<button type="button" className="btn btn-light">{props.tituloButton}</button>
)

const BtnDark = props => (
		<button type="button" className="btn btn-dark">{props.tituloButton}</button>
)

const BtnLink = props => (
		<button type="button" className="btn btn-link">{props.tituloButton}</button>
)

const BtnOutlinePrimary = props => (
		<button type="button" className="btn btn-outline-primary">{props.tituloButton}</button>
)

export {BtnPrimary, BtnSecondary, BtnSuccess, BtnDanger, BtnWarning, BtnInfo, BtnLight, BtnDark, BtnLink, BtnOutlinePrimary}