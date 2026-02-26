"use client";

import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import clienteAxios from "../../../config/axios";
import { useCartStore } from '../../../store/cart';
import enviatodoService from '../../../services/enviatodoService';

import Select from "react-select";

import { toast } from 'sonner';

import { CardPayment } from '@mercadopago/sdk-react';

import { initMercadoPago } from '@mercadopago/sdk-react'
initMercadoPago('APP_USR-441bd0d4-dc77-49f7-a538-7a918194e538', { locale: 'es-MX' }); //'YOUR_PUBLIC_KEY')

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CartForm = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const [datos_entrega_nombre, setDatosEntregaNombre] = useState('');
  const [datos_entrega_direccion, setDatosEntregaDireccion] = useState('');
  const [datos_entrega_codigo_postal, setDatosEntregaCodigoPostal] = useState('');
  const [datos_entrega_correo, setDatosEntregaCorreo] = useState('');
  const [datos_entrega_telefono, setDatosEntregaTelefono] = useState('');
  const [agree, setAgree] = useState(false);

  const [formaEntrega, setFormaEntrega] = useState('Envío a Domicilio');

  const [costo_envio, setCostoEnvio] = useState(0);
  const [viewMPbutton, setViewMPbutton] = useState(false);
  const [viewContinuebutton, setViewContinuebutton] = useState(true);
  const [codigo_descuento, setCodigoDescuento] = useState('');



  // Obtener todas las funciones del store al principio
  const {
    cart,
    cart_subtotal,
    cart_descuento,
    cart_iva,
    cart_total,
    remove_cart_item: deleteCartItem,
    check_discount_code: checkDiscountCode,
    clear_discount_code: clearDiscountCode,
    clear_cart: clearCart,
  } = useCartStore();



  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  // Debug logging
  useEffect(() => {
    console.log('Mounted:', mounted);
    console.log('Cart:', cart);
  }, [mounted, cart]);


  const mostrarMensaje = (mensaje) => {
    toast.error(mensaje);
  };

  const mostrarAviso = (mensaje) => {
    toast.success(mensaje);
  };

  const mostrarMPbutton = () => {
    if (datos_entrega_nombre === "") {
      mostrarMensaje("Debes escribir el nombre en datos de entrega");
    } else if (datos_entrega_direccion === "") {
      mostrarMensaje("Debes escribir la direccion en datos de entrega");
    } else if (datos_entrega_codigo_postal === "") {
      mostrarMensaje("Debes escribir el código postal en datos de entrega");
    } else if (datos_entrega_correo === "") {
      mostrarMensaje("Debes escribir el correo en datos de entrega");
    } else if (datos_entrega_telefono === "") {
      mostrarMensaje("Debes escribir el teléfono en datos de entrega");
    } else if (agree === false) {
      mostrarMensaje("Debes aceptar los terminos y condiciones");
    } else {
      setViewContinuebutton(false)
      setViewMPbutton(true)
    }
  }

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  const remove = (index) => {
    deleteCartItem(index)
  }

  const findDiscount = async () => {
    const codigo = document.getElementById("codigo_descuento").value;

    if (codigo === '') {
      mostrarMensaje("Ingresa un código");
      return;
    }

    try {
      let res = await clienteAxios.get(`/codigo/validar/` + codigo);

      if (res.data.single.length > 0) {
        checkDiscountCode(res.data.single[0].porcentaje_descuento)
        mostrarAviso("Código aplicado correctamente");
        setCodigoDescuento(codigo)
      } else {
        mostrarMensaje("Código inválido");
      }
    } catch (error) {
      console.log(error);
      mostrarMensaje("Código inválido");
    }
  }

  const onSubmit = async (formData) => {
    try {
      const pedidoData = {
        items: cart,
        subtotal: cart_subtotal,
        descuento: cart_descuento,
        iva: cart_iva,
        total: cart_total,
        nombre_cliente: datos_entrega_nombre,
        correo: datos_entrega_correo,
        direccion_entrega: datos_entrega_direccion,
        codigo_postal: datos_entrega_codigo_postal,
        costo_envio: parseFloat(costo_envio),
        telefono: datos_entrega_telefono,
        estatus_pago: "Pagado",
        estatus_envio: "Pendiente",
        vendedor: "Tienda online",
        forma_entrega: formaEntrega.value,
        forma_pago: "Mercado Pago",
        id_mercado_pago: formData.id,
        codigo_descuento: codigo_descuento
      };

      const res = await clienteAxios.post('/pedidos', pedidoData);

      const emailData = {
        to: datos_entrega_correo,
        subject: "Confirmación de pedido - Starter",
        html: `
          <h1>Confirmación de pedido</h1>
          <p>Gracias por tu compra ${datos_entrega_nombre}</p>
          <p>Tu pedido ha sido recibido y está siendo procesado.</p>
          <p><strong>ID del pedido:</strong> ${res.data.pedido.id}</p>
          <p><strong>Total:</strong> $${cart_total}</p>
          <p><strong>Forma de entrega:</strong> ${formaEntrega.value}</p>
          <p><strong>Dirección de entrega:</strong> ${datos_entrega_direccion}</p>
          <p>Te enviaremos un correo cuando tu pedido sea enviado.</p>
          <p>Gracias por comprar en Starter</p>
        `
      };

      await clienteAxios.post('/enviar-correo', emailData);

      clearCart();

      router.push('/confirmacion-pedido');

    } catch (error) {
      console.log(error);
      mostrarMensaje("Error al procesar el pago");
    }
  };

  const onReady = () => {
    // console.log('ready');
  };

  const onError = (error) => {
    // console.log(error);
  };

  const getMercadoPagoErrorMessage = (detail) => {
    const errorMessages = {
      'cc_rejected_bad_filled_other': 'Revisa los datos de tu tarjeta. Algunos campos son incorrectos.',
      'cc_rejected_bad_filled_card_number': 'Número de tarjeta inválido. Verifica los datos de tu tarjeta.',
      'cc_rejected_call_for_authorize': 'La tarjeta requiere autorización. Contacta con tu banco.',
      'cc_rejected_card_disabled': 'Tarjeta deshabilitada. Contacta con tu banco.',
      'cc_rejected_duplicated_payment': 'Ya existe un pago realizado con esa tarjeta. Intenta con otra forma de pago.',
      'cc_rejected_high_risk': 'Pago rechazado por seguridad. Intenta con otra forma de pago.',
      'cc_rejected_insufficient_amount': 'Saldo insuficiente. Intenta con otra forma de pago.',
      'cc_rejected_invalid_installments': 'Número de cuotas inválido. Intenta con otra opción.',
      'cc_rejected_max_attempts': 'Superaste el número máximo de intentos. Intenta más tarde o con otra tarjeta.',
      'cc_rejected_other_reason': 'Pago rechazado. Intenta con otra forma de pago.'
    };

    return errorMessages[detail] || `Pago rechazado (${detail}). Intenta nuevamente o con otra forma de pago.`;
  };

  const options = [
    { value: 'Envío a Domicilio', label: 'Envío a Domicilio' },
    { value: 'Recoger en Tienda', label: 'Recoger en Tienda' }
  ];

  return (
    <>
      <section className="cart_area sec_space">
        <div className="container">
          <div className="row">
            <div className="col col-lg-8">
              <div className="cart_table">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart && cart.length > 0 ? (
                        cart.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <div className="cart_product">
                                <div className="cart_product_img">
                                  <img src={`${item.imagen}?v=${item.imagen.split('').reduce((a, b) => (((a << 5) - a) + b.charCodeAt(0)) | 0, 0)}`} alt={item.nombre} />
                                </div>
                                <div className="cart_product_content">
                                  <h4>{item.nombre}</h4>
                                  <p>{item.descripcion}</p>
                                </div>
                              </div>
                            </td>
                            <td>${item.precio}</td>
                            <td>{item.cantidad}</td>
                            <td>${item.total}</td>
                            <td>
                              <button onClick={() => remove(index)} className="btn btn-danger">
                                <FontAwesomeIcon icon="fa-trash" />
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-center">
                            <h4>No hay productos en el carrito</h4>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col col-lg-4">
              <div className="cart_totals">
                <h3>Resumen del pedido</h3>
                <ul>
                  <li>
                    <span>Subtotal</span>
                    <span>${cart_subtotal}</span>
                  </li>
                  <li>
                    <span>Descuento</span>
                    <span>-${cart_descuento}</span>
                  </li>
                  <li>
                    <span>IVA</span>
                    <span>${cart_iva}</span>
                  </li>
                  <li>
                    <span>Total</span>
                    <span>${cart_total}</span>
                  </li>
                </ul>
              </div>
              <div className="cart_coupon">
                <h3>Código de descuento</h3>
                <div className="coupon_form">
                  <input type="text" id="codigo_descuento" placeholder="Código de descuento" />
                  <button onClick={findDiscount} className="btn btn_primary">Aplicar</button>
                </div>
              </div>
              <div className="cart_checkout">
                <h3>Datos de entrega</h3>
                <div className="checkout_form">
                  <div className="row">
                    <div className="col col-md-6">
                      <div className="form_group">
                        <label>Nombre</label>
                        <input type="text" value={datos_entrega_nombre} onChange={(e) => setDatosEntregaNombre(e.target.value)} />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form_group">
                        <label>Teléfono</label>
                        <input type="text" value={datos_entrega_telefono} onChange={(e) => setDatosEntregaTelefono(e.target.value)} />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form_group">
                        <label>Correo</label>
                        <input type="email" value={datos_entrega_correo} onChange={(e) => setDatosEntregaCorreo(e.target.value)} />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form_group">
                        <label>Código Postal</label>
                        <input type="text" value={datos_entrega_codigo_postal} onChange={(e) => setDatosEntregaCodigoPostal(e.target.value)} />
                      </div>
                    </div>
                    <div className="col col-md-12">
                      <div className="form_group">
                        <label>Dirección</label>
                        <input type="text" value={datos_entrega_direccion} onChange={(e) => setDatosEntregaDireccion(e.target.value)} />
                      </div>
                    </div>
                    <div className="col col-md-12">
                      <div className="form_group">
                        <label>Forma de entrega</label>
                        <Select
                          value={options.find(option => option.value === formaEntrega)}
                          onChange={setFormaEntrega}
                          options={options}
                          placeholder="Selecciona una opción"
                        />
                      </div>
                    </div>
                    <div className="col col-md-12">
                      <div className="form_group">
                        <label>Costo de envío</label>
                        <input type="number" value={costo_envio} onChange={(e) => setCostoEnvio(e.target.value)} />
                      </div>
                    </div>
                    <div className="col col-md-12">
                      <div className="form_group">
                        <div className="custom_checkbox">
                          <input type="checkbox" id="terms" checked={agree} onChange={checkboxHandler} />
                          <label htmlFor="terms">Acepto los términos y condiciones</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart_payment">
                <div className="btn_wrap pt-0 text-center" style={{ marginTop: "20px" }}>

                  {cart && cart.length > 0 && viewContinuebutton === true ?
                    (
                      <button className="btn btn_primary text-uppercase" onClick={() => mostrarMPbutton()} >Continuar</button>
                    )
                    : (<React.Fragment key="empty-continue"></React.Fragment>)
                  }

                  {cart && cart.length > 0 && viewMPbutton === true ?
                    (

                      <CardPayment
                        initialization={{ amount: cart_total }}
                        onSubmit={onSubmit}
                        onReady={onReady}
                        onError={onError}
                      />
                    )
                    : (<React.Fragment key="empty-mp"></React.Fragment>)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
