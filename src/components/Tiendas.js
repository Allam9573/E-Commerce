import React from 'react'

const Tienda = () => {
    const pro = {
        nombre: 'Tienda 1',
        direccion: ''
    }
    return (
        <div>
            <h1>Nuestras Sucursales {pro.nombre}</h1>
        </div>
    )
}

export default Tienda

export function Location() {
    return (
        <div>Location</div>
    )

}
export function Info() {
    return (
        <div>Informacion de la tienda</div>
    )
}
