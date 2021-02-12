// import React from 'react'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import NavbarPage from './components/Navbar';
import Productos from './components/Products';
import EcommercePage from './components/Ecommerce';

const AppRender = () => {
    return (
        <Fragment>

            <NavbarPage />
            <div className="container">
                <MDBBtn color="primary">Primary</MDBBtn>
                <MDBBtn>Default</MDBBtn>
                <MDBBtn color="secondary">Secondary</MDBBtn>
                <MDBBtn color="success">Success</MDBBtn>
                <MDBBtn color="info">Info</MDBBtn>
                <MDBBtn color="warning">Warning</MDBBtn>
                <MDBBtn color="danger">Danger</MDBBtn>
                <MDBBtn color="purple">Click</MDBBtn>
            </div>

            <div className="container">
                <Productos />
            </div>
            <div className="container">
                <EcommercePage />
            </div>
        </Fragment>
    )
}

ReactDOM.render(<AppRender />, document.getElementById('root'))