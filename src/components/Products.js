import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import React from 'react'

const Cards = () => {
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <div className="card my-3">
                        <div className="card-header text-center">
                            <h4>Productos:</h4>
                        </div>
                        <div className="card-body">
                            <input type="text" placeholder="Producto" className="form-control" />
                            <button className="btn btn-success">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card my-3">
                        <div className="card-header text-center">
                            <h4>Productos:</h4>
                        </div>
                        <div className="card-body">
                            <input type="text" placeholder="Producto" className="form-control" />
                            <button className="btn btn-warning">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card my-3">
                        <div className="card-header text-center">
                            <h4>Productos:</h4>
                        </div>
                        <div className="card-body">
                            <input type="text" placeholder="Producto" className="form-control" />
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards
