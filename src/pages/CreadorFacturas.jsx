import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const CreadorFacturas = ({datosEmpresa}) => {
  
  const [nombre, setNombre] = useState("");
  const [cuit, setCuit] = useState("");
  const [direccion, setDireccion] = useState("");
  const [pago, setPago] = useState("");
  const [condIva, setCondIva] = useState("");
  const [fecha, setFecha] = useState("");
  const [factura, setFactura] = useState("");

  const [detalles, setDetalles] = useState([]);
  const [producto, setProducto] = useState("");
  const [unidad, setUnidad] = useState(1);
  const [precio, setPrecio] = useState(0.0);
  const [observaciones, setObservaciones] = useState("");
  const [terminos, setTerminos] = useState("");
  const [descuento, setDescuento] = useState(0.0);
  const [envio, setEnvio] = useState(0.0);
  const [id, setId] = useState(0);

  const [totalParcial, setTotalP] = useState(0.0);

  const [numFactura, setNumFactura] = useState("0001-00000001");
  useEffect(() => {
    console.log(detalles);
  }, [detalles]);
  useEffect(() => {
    console.log(factura);
  }, [factura]);

  const agregar = (e) => {
    e.preventDefault();
    setId(id + 1);
    setDetalles([...detalles, { id, producto, unidad, precio }]);
    setTotalP(totalParcial + precio * unidad);
    e.target.reset();

  };
  const deleteConsulta = (id) => {
    console.log("borro el id: " + id);
    detalles.map((detalle)=>(detalle.id==id ?  setTotalP( totalParcial-(detalle.precio*detalle.unidad)): console.log("no realiza op")

    ));
    const resultado = detalles.filter(detalle=>detalle.id !== id)
    setDetalles(resultado)
}
  return (
    <>
      <div>
        <h1>{datosEmpresa.Nombre}</h1>

        <h4>Ingrese Datos del Cliente:</h4>
        <label htmlFor="">Seleccione Tipo de Facturacion</label>
        <select value={factura} onChange={(e) => setFactura(e.target.value)}>
          <option value="">Seleccione una opción</option>
          <option value="Factura A">Factura A</option>
          <option value="Factura A con leyenda">Factura A con leyenda</option>
          <option value="Factura B">Factura B</option>
          <option value="Factura C">Factura C</option>
          <option value="Factura E">Factura E</option>
          <option value="Factura M">Factura M</option>
        </select>

        <br />

        <label htmlFor="">NOMBRE:</label>
        <input type="text" onChange={(e) => setNombre(e.target.value)} />
        <br />
        <label htmlFor="">CUIT:</label>
        <input type="text" onChange={(e) => setCuit(e.target.value)} />
        <br />
        <label htmlFor="">DIRECCION:</label>
        <input type="text" onChange={(e) => setDireccion(e.target.value)} />
        <br />
        <label htmlFor="">CONDICION DE PAGO:</label>
        <input type="text" onChange={(e) => setPago(e.target.value)} />
        <br />
        <label htmlFor="">CONDICION ANTE IVA:</label>
        <input type="text" onChange={(e) => setCondIva(e.target.value)} />
        <br />
        <br />
        <label htmlFor="">Fecha:</label>
        <input
          type="date"
          name=""
          id=""
          onChange={(e) => setFecha(e.target.value)}
        />
        <label htmlFor="">Envio:</label>
        <input
          type="number"
          value={envio}
          step="0.01"
          onChange={(e) => setEnvio(e.target.value)}
        />
      </div>

      <div>
        <br />
        <h4>Ingrese Productos</h4>

        <form onSubmit={agregar}>
          <label htmlFor="">Producto:</label>
          <input type="text" onChange={(e) => setProducto(e.target.value)} />
          <br />
          <label htmlFor="">Unidades:</label>
          <input
            type="number"
            value={unidad}
            onChange={(e) => setUnidad(e.target.value)}
          />
          <br />
          <label htmlFor="">Precio Unitario:</label>
          <input
            type="number"
            value={precio}
            step="0.01"
            onChange={(e) => setPrecio(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Agregar</button>
        </form>
      </div>

      <div>
        <br />
        <table>
          <thead>
            <th>Producto-</th>
            <th>Unidades-</th>
            <th>Precio Unitario-</th>
            <th>Precio</th>
            <th></th>
          </thead>
          <tbody>
            {detalles.map((detalle) => (
              <tr key={detalle.id}>
                <td>{detalle.producto}</td>
                <td>{detalle.unidad}</td>
                <td>{detalle.precio}</td>
                <td>{detalle.precio * detalle.unidad}</td>
                <td>
                  <button
                    
                    onClick={() => deleteConsulta(detalle.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <label htmlFor="">Descuento:</label>
      <input
        type="number"
        value={descuento}
        step="0.01"
        onChange={(e) => setDescuento(e.target.value)}
      />
      <br />
      <label htmlFor="">observaciones/instrucciones de pago:</label>
      <input type="text" onChange={(e) => setObservaciones(e.target.value)} />
      <label htmlFor="">Terminos y Instrucciones:</label>
      <input type="text" onChange={(e) => setTerminos(e.target.value)} />
      <br />
      <p>Total Parcial {totalParcial}</p>
      <p>Descuento : {descuento}</p>
      <p>SubTotal menos descuento: {totalParcial - descuento}</p>
      <p>IVA: {(totalParcial - descuento) * 0.21}</p>
      <p>Total con Impuestos:{(totalParcial - descuento) * 1.21} </p>
      <p>Envio: {envio}</p>
      <br />
      <h3>
        Total Factura {(totalParcial - descuento) * 1.21 + parseFloat(envio)}
      </h3>
      <button>
        <Link to="/facturacion">Ir a Facturar </Link>
      </button>
      <br /><br /><br />
    </>
  );
};

export default CreadorFacturas;
