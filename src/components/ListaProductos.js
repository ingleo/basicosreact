import React, { Component, Fragment } from 'react';
import Producto from './Producto';

class ListaProductos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productos: [],
            totalCarrito: 135,
            cliente: 'Juan Gomez'
        }
    }

    /*
    state = {
        productos : [
            { id: 1, name: 'Camisa ReactJs', precio: 30 },
            { id: 2, name: 'Camisa VuetJs', precio: 35 },
            { id: 3, name: 'Camisa Angular', precio: 30 },
            { id: 4, name: 'Camisa Node.js', precio: 40 },
        ]
    }
    */

    componentDidMount() {
        console.log(1);

        this.setState({
            productos: [
                { id: 1, name: 'Camisa ReactJs', precio: 30 },
                { id: 2, name: 'Camisa VuetJs', precio: 35 },
                { id: 3, name: 'Camisa Angular', precio: 30 },
                { id: 4, name: 'Camisa Node.js', precio: 40 },
            ]
        })
    }

    componentWillMount() {
        console.log(2);
    }

    componentWillUpdate() {
        console.log(3);
    }

    componentWillUnmount() {
        console.log(4);
    }

    render() {
        console.log(5);

        const { productos } = this.state;

        return (
            <Fragment>
                <h1>Lista de Productos</h1>
                {productos.map(producto => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </Fragment>
        );
    }
};

export default ListaProductos;
