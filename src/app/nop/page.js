import Link from "next/link";

//import clienteAxios from "../../config/axios";

const Aviso = async () => {
  /*
  const getAviso = async () => {
    try {
      const res = await clienteAxios.get(`/empresa/single/658c57daea3c61d484acf6fb`);
      //console.log(res.data)
      return res.data.single.aviso;
      
    } catch (error) {
      console.log(error);
    }
  };

  
  const avisoDeP = await getAviso();
  */

  const htmlContent = `<p><span lang="es-MX">HOCKEY EXPORTPRINT, S.A. DE C.V.</span></p>

<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">En
cumplimiento de la Ley Federal de Protección de Datos Personales en
Posesión de los Particulares, su Reglamento y los Lineamientos del
Aviso de Privacidad, se emite el presente Aviso de Privacidad.</span></p>

<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">El
responsable del tratamiento “HOCKEY EXPORTPRINT, S.A. DE C.V.”,
con domicilio en Boulevard Miguel Aleman Valdez Lote 1 Interior D2,
colonia San Mateo Otzacatipan, C.P. 50220, municipio de Toluca de
Lerdo, Estado de México, es responsable del tratamiento de sus datos
personales.</span></p>

<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Los
datos personales que recabamos de usted los utilizaremos para las
siguientes finalidades que son necesarias para el servicio que
solicita.</span></p>

<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Finalidades
Primarias:</span></p>

<ul>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">La
	creación y, en su caso, actualización de su cuenta de cliente en
	nuestra plataforma en línea;</span></p></li>

	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Procesar
	sus pedidos; </span></p></li>

	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Realizar
	cobros;</span></p></li>

	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Emitir
	facturas;</span></p></li>

	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Envío
	y entrega de productos adquiridos a través de servicios de
	paquetería y logística;</span></p></li>

	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Atención
	a clientes;</span></p></li>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Aclaraciones
	y seguimiento de compras; y</span></p></li>

	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Aclaraciones
	y devolución de compras.</span></p></li>

</ul>

<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">De
manera adicional, utilizaremos su información personal para las
siguientes finalidades que no son necesarias para el servicio
solicitado, pero que nos permiten brindarle una mejor atención:</span></p>

<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Finalidades
Secundarias</span></p>

<ul>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">El
	envío de promociones, descuentos, boletines informativos
	(Newsletter) y publicidad.</span></p></li>

	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Programas
	de lealtad y encuestas;</span></p></li>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">La
	prospección comercial y mercadotecnia.</span></p></li>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">El
	análisis de comportamiento de navegación y preferencias de consumo
	para personalizar su experiencia en nuestro sitio web.</span></p></li>

	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Realización
	de encuestas de calidad y satisfacción.</span></p></li>

</ul>

<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Negativa
al tratamiento para finalidades secundarias: en caso de que no desee
que sus datos personales sean tratados para estos fines secundarios,
usted puede presentar desde este momento un escrito vía correo
electrónico a </span><font color="#0000ff"><u><a href="mailto:contacto@starter-mx.com"><span lang="es-MX">contacto@starter-mx.com</span></a></u></font><span lang="es-MX">
manifestando lo anterior. </span></p>

<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">La
negativa para el uso de sus datos para estas finalidades no podrá
ser un motivo para que le neguemos los servicios y productos que
solicita.</span></p>

<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Para
llevar a cabo las finalidades descritas en el presente aviso de
privacidad, utilizaremos los siguientes datos personales:</span></p>


<ul>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Datos
	de Identificación: </span></p>
	  <ul>
		  <li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Nombre
		  completo, </span></p></li>
		  <li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Registro
		  Federal de Contribuyentes</span></p></li>
		  <li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Clave
		  Única de registro de Población.</span></p></li>
	  </ul>
  </li>

	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Datos
	de Contacto: </span></p>
	  <ul>
		  <li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Domicilio
		fiscal</span></p></li>
		  <li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Domicilio
		de entrega</span></p></li>
		  <li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Correo
		electrónico,</span></p></li>
		  <li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Número
		de teléfono fijo y/o celular.</span></p></li>
	  </ul>
	</li>

	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Datos
	Informáticos y de Navegación: </span></p>
	<ul>
		<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Dirección
		IP, </span>
		</p></li>
		<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Tipo
		de navegador,</span></p></li>
		<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Sistema
		operativo, </span>
		</p></li>
		<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">ID
		de dispositivo, </span>
		</p></li>
		<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">geolocalización
		aproximada, e </span>
		</p></li>
		<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Historial
		de interacción con nuestro sitio web.</span></p></li>
	</ul>
  </li>
</ul>

<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">TRANSFERENCIA
DE DATOS PERSONALES</span></p>
<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Le
informamos que sus datos personales podrán ser compartidos dentro y
fuera del país con:</span></p>

<ul>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Empresas
	de Paquetería: con la finalidad de realizar la entrega de los
	productos en el domicilio indicado.</span></p></li>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Instituciones
	Bancarias y/o Pasarelas de Pago: para el procesamiento de pagos y
	prevención de fraudes.</span></p></li>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Autoridades
	Competentes: en los casos legalmente previstos para el cumplimiento
	de disposiciones legales o mandatos judiciales.</span></p></li>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Sociedades
	del mismo Grupo Corporativo: empresas filiales o subsidiarias que
	operen bajo los mismos procesos y políticas internas.</span></p></li>
</ul>

<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">USO
DE COOKIES, </span><span lang="es-MX">WEB BEACONS</span><span lang="es-MX">
Y OTRAS TECNOLOGÍAS</span></p>

<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Le
informamos que en nuestra página de Internet utilizamos cookies, </span><span lang="es-MX">web
beacons</span><span lang="es-MX"> y otras tecnologías a través de
las cuales es posible monitorear su comportamiento como usuario de
Internet. </span>
</p>

<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Los
datos que obtenemos de estas tecnologías de rastreo incluyen: </span>
</p>

<ul>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Horario
	de navegación, </span>
	</p></li>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Tiempo
	de navegación en nuestra página web, </span>
	</p></li>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Secciones
	consultadas y </span>
	</p></li>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Páginas
	de Internet accedidas previo a la nuestra.</span></p></li>
</ul>

<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Estas
tecnologías pueden deshabilitarse en las opciones de configuración
de su navegador. Para mayor información sobre el procedimiento, le
sugerimos consultar la sección de ayuda de su navegador</span><span lang="es-MX">.</span></p>
<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">DERECHOS
ARCO (ACCESO, RECTIFICACIÓN, CANCELACIÓN Y OPOSICIÓN)</span></p>
<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Usted
tiene derecho a conocer qué datos personales tenemos de usted, para
qué los utilizamos y las condiciones del uso que les damos (Acceso).
Asimismo, es su derecho solicitar la corrección de su información
personal en caso de que esté desactualizada, sea inexacta o
incompleta (Rectificación); que la eliminemos de nuestros registros
o bases de datos cuando considere que la misma no está siendo
utilizada conforme a los principios, deberes y obligaciones previstas
en la normativa así como del presente aviso de privacidad
(Cancelación); así como oponerse al uso de sus datos personales
para fines específicos (Oposición).</span></p>
<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Para
el ejercicio de cualquiera de los derechos ARCO, usted deberá
presentar la solicitud respectiva enviando un correo electrónico a
nuestro Oficial de Privacidad en: </span><font color="#0000ff"><u><a href="mailto:contacto@starter-mx.com"><span lang="es-MX">contacto@starter-mx.com</span></a></u></font></p>
<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Su
solicitud deberá contener al menos: </span>
</p>
<ul>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Nombre
	completo</span></p></li>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Domicilio
	u otro medio para comunicarle la respuesta; </span>
	</p></li>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Documentos
	que acrediten su identidad; </span>
	</p></li>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Descripción
	clara de los datos respecto de los que busca ejercer sus derechos; y
	</span>
	</p></li>
	<li><p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Cualquier
	elemento que facilite la localización de los datos.</span></p></li>
</ul>
<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">MEDIDAS
DE SEGURIDAD</span></p>
<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Para
garantizar el correcto resguardo de sus datos personales, HOCKEY
EXPORTPRINT, S.A. DE C.V. ha implementado medidas de seguridad
administrativas, técnicas y físicas. Toda la información
transaccional y de pagos se encuentra protegida mediante protocolos
de seguridad SSL (Secure Socket Layer), garantizando que sus datos
viajen encriptados.</span></p>
<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">CAMBIOS
AL AVISO DE PRIVACIDAD</span></p>
<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">El
presente aviso de privacidad puede sufrir modificaciones, cambios o
actualizaciones derivadas de nuevos requerimientos legales; de
nuestras propias necesidades por los productos o servicios que
ofrecemos; de nuestras prácticas de privacidad; o por cambios en
nuestro modelo de negocio.</span></p>
<p align="justify" style="margin-bottom: 0.35cm"><span lang="es-MX">Nos
comprometemos a mantenerlo informado sobre los cambios que pueda
sufrir el presente aviso de privacidad a través de nuestro sitio web
www.starter.com.mx</span></p>
<p align="justify" style="margin-bottom: 0.35cm"><a name="_GoBack"></a>
<span lang="es-MX">17 de febrero de 2026.</span></p>
   `;

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
                    <li>Aviso de privacidad</li>
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

                  <div
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                  />



                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Aviso;
