// import React from 'react'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const AppRender = () => {
    return (
        <Fragment>
        <MDBBtn color="primary">Primary</MDBBtn>
        <MDBBtn>Default</MDBBtn>
        <MDBBtn color="secondary">Secondary</MDBBtn>
        <MDBBtn color="success">Success</MDBBtn>
        <MDBBtn color="info">Info</MDBBtn>
        <MDBBtn color="warning">Warning</MDBBtn>
        <MDBBtn color="danger">Danger</MDBBtn>
        <MDBBtn color="purple">Click</MDBBtn>
      </Fragment>
    )
}

ReactDOM.render(<AppRender />, document.getElementById('root'))