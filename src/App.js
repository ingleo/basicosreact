import React, { Fragment } from 'react';
import './App.css';
import PrimerComponente from './components/PrimerComponente';
import SegundoComponente from './components/SegundoComponente';
import TercerComponente from './components/TercerComponente';
import Header from './components/Header';
import Footer from './components/Footer';
import ListaProductos from './components/ListaProductos';

function App() {

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo='Tienda virtual' />
      <PrimerComponente />
      <SegundoComponente />
      <TercerComponente />
      <ListaProductos />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
