import FacturaA from "./components/FacturaA"
import CreadorFacturas from "./pages/CreadorFacturas"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import { useState } from "react"
const DatosEmpresa = {
  Nombre: "Patitas SA",
  Direccion: "calle falsa 123",
  Localidad: "SAN MIGUEL DE TUCUMAN",
  Telefono: "0381-155512332",
  Cuit: "33-38340248-3",
};
function reasignar (Nombre,Cuit,Direccion){


}
function App() {
  
  

  

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreadorFacturas datosEmpresa={DatosEmpresa}/>}/>
      <Route path="/facturacion" element={<FacturaA/>}/>
    </Routes>
    </BrowserRouter>
      {/* <FacturaA/> */}
    </>
  )
}

export default App
