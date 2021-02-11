import React from 'react'

export default class Form extends React.Component {

    pro = {
        nombre: 'Allam'
    }
    render() {
        return (
            <div>Formulario de Contacto {this.pro.nombre}</div>
        )
    }
}


