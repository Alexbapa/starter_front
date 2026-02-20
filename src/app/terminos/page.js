import Link from "next/link";

//import clienteAxios from "../../config/axios";

const paragraphStyle = {
  lineHeight: "116%",
  marginBottom: "0.28cm",
  textAlign: "justify"
};

const tableCellStyle = {
  background: "#ffffff",
  borderTop: "1px solid #e2e2e2",
  borderBottom: "1px solid #e2e2e2",
  padding: "0.3cm 0cm",
  verticalAlign: "bottom"
};

const Terminos = async () => {
  /*
  const getTerminos = async () => {
    try {
      const res = await clienteAxios.get(
        `/empresa/single/658c57daea3c61d484acf6fb`
      );
      //console.log(res.data)
      return res.data.single.terminos;
    } catch (error) {
      console.log(error);
    }
  };

  const terminos = await getTerminos();
  */

  return (
    <>
      <main>
        <section className="breadcrumb_section">
          <div className="container">
            <div className="row">
              <div className="col col-lg-6">
                <div className="breadcrumb_content">
                  <ul className="breadcrumb_nav ul_li_center">
                    <li>
                      <Link className="home_btn" href="/">
                        Inicio
                      </Link>
                    </li>
                    <li>Términos y Condiciones</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq_section sec_space_small">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div style={{ padding: "30px 0px" }}>


                  <div>
                    <p><b>Términos y Condiciones de Uso y Venta</b></p>

                    <p style={paragraphStyle}>
                      <b>HOCKEY EXPORTPRINT, S.A. DE C.V.</b>, en lo sucesivo,
                      <b> “HOCKEY EXPORTPRINT”</b>, con domicilio ubicado en Boulevard Miguel
                      Alemán Valdez Lote 1 Interior D2, colonia San Mateo Otzacatipan,
                      C.P. 50220, municipio de Toluca de Lerdo, Estado de México...
                    </p>

                    <p style={paragraphStyle}>
                      Al aceptar la entrega de publicidad y promociones, habilitar las
                      notificaciones, acceder, navegar y/o utilizar el sitio web
                      <b> www.starter-mx.com</b> (en adelante la “Plataforma”),
                      constituye de manera inequívoca e inmediata, el consentimiento tácito
                      respecto al uso de la Plataforma.
                    </p>

                    <p style={paragraphStyle}>
                      Asimismo al utilizar este sitio y/o realizar un pedido, aceptas quedar
                      sujeto a los presentes términos y condiciones y haber leído y aceptado
                      el Aviso de Privacidad.
                    </p>

                    <p style={paragraphStyle}>
                      <b>DEFINICIONES.</b>
                    </p>

                    <p style={paragraphStyle}>
                      Las siguientes palabras deberán de ser interpretadas como se describe...
                    </p>

                    <table width="100%" cellPadding="11" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td style={tableCellStyle}>
                            <p style={{ textAlign: "justify" }}>
                              “<b>Términos y Condiciones</b>”
                            </p>
                          </td>
                          <td style={tableCellStyle}>
                            <p style={{ textAlign: "justify" }}>
                              Son los presentes Términos y Condiciones, junto con el Aviso
                              de Privacidad...
                            </p>
                          </td>
                        </tr>

                        <tr>
                          <td style={tableCellStyle}>
                            <p>“<b>Aviso de privacidad</b>”</p>
                          </td>
                          <td style={tableCellStyle}>
                            <p>
                              Es el aviso de privacidad respecto de la recolección y uso de
                              datos personales que son recabados por “HOCKEY EXPORTPRINT”.
                            </p>
                          </td>
                        </tr>

                        <tr>
                          <td style={tableCellStyle}>
                            <p>“<b>Plataforma</b>”</p>
                          </td>
                          <td style={tableCellStyle}>
                            <p>
                              Es el dominio{" "}
                              <a
                                href="http://www.starter-mx.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#467886", textDecoration: "underline" }}
                              >
                                www.starter-mx.com
                              </a>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <p style={paragraphStyle}><b>Precios y Costos de Envío</b></p>

                    <p style={paragraphStyle}>
                      Los precios mostrados incluyen el Impuesto al Valor Agregado (I.V.A.),
                      pero no incluyen los costos de envío.
                    </p>

                    <ul style={{ marginBottom: "0.28cm" }}>
                      <li>
                        <b>Tarifa de Envío:</b> El costo se indicará claramente durante el
                        proceso de pago.
                      </li>
                      <li>
                        <b>Variaciones:</b> Los precios en línea pueden variar respecto a
                        otros canales de venta y están sujetos a cambios sin previo aviso.
                      </li>
                    </ul>

                    <p style={paragraphStyle}><b>Métodos de Pago</b></p>

                    <ul>
                      <li><b>Tarjetas:</b> Visa, Mastercard y American Express.</li>
                      <li><b>SPEI:</b> Transferencia electrónica bancaria.</li>
                      <li><b>Pago en efectivo:</b> Oxxo.</li>
                    </ul>

                    <p style={{ textAlign: "right", marginTop: "2rem" }}>
                      <b>Última actualización:</b> 17 de febrero de 2026.
                    </p>
                  </div>




                </div>
              </div>
            </div>
          </div>
        </section>
      </main >
    </>
  );
};

export default Terminos;
