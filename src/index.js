import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Home from './components/Home'
import Navbar from './components/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import Cards from './components/Products'
import Tienda, { Location, Info } from './components/Tiendas'
import Form from './components/Form'


const AppRender = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Cards />
            </div>
            <div className="container">
                <Cards />
            </div>
            <div className="container">
                <Cards />
            </div>
            <div className="container text-center my-2">
                <Tienda />
                <Location />
                <Form />
                <Info />
            </div>
        </div>
    )
}
const str = 'Hello world from React';
const element = <h1>{str}</h1>

ReactDOM.render(<AppRender />, document.getElementById('root'));