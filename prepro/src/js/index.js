import '../css/estilos.css'
// para que react funcione lo tengo que importar
import React from 'react'
// código de react
import  { render } from 'react-dom'
//importo el componente
import App from './components/app'
//renderizo el componente
render(<App />, document.getElementById('container'))
