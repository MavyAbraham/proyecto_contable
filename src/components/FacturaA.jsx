import React from 'react'

const FacturaA = () => {
  return (
    <div className="factura-a">
        <div>
            <h1>Factura A</h1>
        </div>
        <div>
        <div>
            <h2>X Empresa</h2>
            <p>direccion</p>
            <p>correo Email</p>
            <p>Telefono</p>
            <p>cuit</p>
        </div>
        <div>
        <img src="" alt="logo empresa" />
          <p>Número de factura</p>
          <p>Fecha</p>
        </div>
        </div>
        <div>
            <h3>Cliente</h3>
            <label htmlFor="">Nombre:</label>
            <input type="text" />
            <label htmlFor="">Cuit:</label>
            <input type="text" />
            <label htmlFor="">Direccion:</label>
            <input type="text" />
            <label htmlFor="">Condicion de Pago:</label>
            <input type="text" />
            <label htmlFor="">Condicion ante IVA:</label>
            <input type="text" />
        </div>
        <div>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Unidades</th>
              <th>Precio Unitario</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí puedes iterar sobre los detalles de los productos y mostrarlos en filas de la tabla */}
            <tr>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
          </tbody>
        </table>
        </div>
        <div>
          <div>
            <p>Observaciones/Instrucciones de pago:</p>
            <p>--observaciones--</p>
          </div>
          <div>
            <p>Terminos y Instrucciones:</p>
            <p>--Terminos.........--</p>
          </div>
          <div>
            <p>Total Parcial: valor </p>
            <p>DEscuento : valor </p>
            <p>Subtotal menos descuento: valor </p>
            <p>IVA: valor</p>
            <p>Total impuestos: valor</p>
            <p>Envio: valor</p>
            <h4>TOTAL FACTURA : valor</h4>
          </div>
        </div>
      </div>
  )
}

export default FacturaA