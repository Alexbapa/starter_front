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
  padding: "0.3cm .7cm",
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

  const htmlContent = `
                 <p><b>Términos y Condiciones de Uso y Venta</b></p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm"><b>HOCKEY
EXPORTPRINT, S.A. DE C.V. </b>, en lo sucesivo, <b>“HOCKEY
EXPORTPRINT”</b>, con domicilio ubicado en Boulevard Miguel Aleman
Valdez Lote 1 Interior D2, colonia San Mateo Otzacatipan, C.P. 50220,
municipio de Toluca de Lerdo, Estado de México, hace de tu
conocimiento los términos y condiciones, que representan las
disposiciones y normas a las que todo individuo que decida
interactuar con <b>“HOCKEY EXPORTPRINT”</b>, deberá obligarse y
no será eximido de responsabilidad si incurriera en incumplimiento
de las mismas, por lo que se aplicarán a todos los pedidos que
realice el cliente con <b>HOCKEY EXPORTPRINT, S.A. DE C.V.</b>, por
medio de nuestro sitio web oficial.</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Al
aceptar la entrega de publicidad y promociones, habilitar las
notificaciones, acceder, navegar y/o utilizar el sitio web
“www.starter-mx.com” (en adelante la “Plataforma”),
constituye de manera inequívoca e inmediata, el consentimiento
tácito respecto al uso de la Plataforma, bajo la utilización de los
presentes Términos y Condiciones.</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Asimismo
al utilizar este sitio y/o realizar un pedido, aceptas quedar sujeto
a los presentes términos y condiciones y haber leído y aceptado el
Aviso de Privacidad. 
</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Solo
las personas mayores de 18 años con domicilio en México pueden
realizar pedidos. Nos reservamos el derecho de modificar los Términos
y Condiciones sin previo aviso; la versión vigente será la
publicada al momento de tu compra.</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm"><b>DEFINICIONES.</b></p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Las
siguientes palabras deberán de ser interpretadas como se describe.
Para efectos de diferenciación, los términos que en lo sucesivo se
definen, serán descritos con la primera letra en mayúscula y
únicamente cuando se utilicen con dicho formato es cuando deberán
de interpretarse como tales.</p>
<table width="100%" cellpadding="11" cellspacing="0">
	<col width="123"/>
	<col width="422"/>
	<tr valign="bottom">
		<td width="123" bgcolor="#ffffff" style="background: #ffffff; border-top: 1px solid #e2e2e2; border-bottom: 1px solid #e2e2e2; border-left: none; border-right: none; padding: 0.3cm 0.7cm;vertical-align: middle"><p align="justify">
			“<b>Términos y Condiciones ”</b></p>
		</td>
		<td width="422" bgcolor="#ffffff" style="background: #ffffff; border-top: 1px solid #e2e2e2; border-bottom: 1px solid #e2e2e2; border-left: none; border-right: none; padding: 0.3cm 0.7cm;vertical-align: middle"><p align="justify">
			Son los presentes Términos y Condiciones, junto con el Aviso de
			Privacidad, los cuales se entienden como el acuerdo total entre
			“HOCKEY EXPORTPRINT” y el cliente o usuario.</p>
		</td>
	</tr>
	<tr valign="bottom">
		<td width="123" bgcolor="#ffffff" style="background: #ffffff; border-top: 1px solid #e2e2e2; border-bottom: 1px solid #e2e2e2; border-left: none; border-right: none; padding: 0.3cm 0.7cm;vertical-align: middle"><p align="justify">
			“<b>Aviso de privacidad”</b></p>
		</td>
		<td width="422" bgcolor="#ffffff" style="background: #ffffff; border-top: 1px solid #e2e2e2; border-bottom: 1px solid #e2e2e2; border-left: none; border-right: none; padding: 0.3cm 0.7cm;vertical-align: middle"><p align="justify">
			Es el aviso de privacidad respecto de la recolección y uso de
			datos personales que son recabados por “HOCKEY EXPORTPRINT”.</p>
		</td>
	</tr>
	<tr valign="bottom">
		<td width="123" bgcolor="#ffffff" style="background: #ffffff; border-top: 1px solid #e2e2e2; border-bottom: 1px solid #e2e2e2; border-left: none; border-right: none; padding: 0.3cm 0.7cm;vertical-align: middle"><p align="justify">
			“<b>HOCKEY EXPORTPRINT”</b></p>
		</td>
		<td width="422" bgcolor="#ffffff" style="background: #ffffff; border-top: 1px solid #e2e2e2; border-bottom: 1px solid #e2e2e2; border-left: none; border-right: none; padding: 0.3cm 0.7cm;vertical-align: middle"><p align="justify">
			“HOCKEY EXPORTPRINT”, S.A. DE C.V., así como cualquier otra
			empresa filial y/o subsidiaria, controladora, titular de la
			plataforma, así como terceros que ofrezcan servicios a través o
			en conjunto con “HOCKEY EXPORTPRINT”.</p>
		</td>
	</tr>
	<tr valign="bottom">
		<td width="123" bgcolor="#ffffff" style="background: #ffffff; border-top: 1px solid #e2e2e2; border-bottom: 1px solid #e2e2e2; border-left: none; border-right: none; padding: 0.3cm 0.7cm;vertical-align: middle"><p align="justify">
			“<b>Plataforma”</b></p>
		</td>
		<td width="422" bgcolor="#ffffff" style="background: #ffffff; border-top: 1px solid #e2e2e2; border-bottom: 1px solid #e2e2e2; border-left: none; border-right: none; padding: 0.3cm 0.7cm;vertical-align: middle"><p align="justify">
			Es el dominio&nbsp;<font color="#467886"><u><a href="http://www.starter-mx.com/">www.starter-mx.com</a></u></font>
			o cualquier otro subdominio, dominio vinculado, o re-direccionado
			a la misma, que permita el acceso a la plataforma.</p>
		</td>
	</tr>
	<tr valign="bottom">
		<td width="123" bgcolor="#ffffff" style="background: #ffffff; border-top: 1px solid #e2e2e2; border-bottom: 1px solid #e2e2e2; border-left: none; border-right: none; padding: 0.3cm 0.7cm;vertical-align: middle"><p align="justify">
			“<b>Servicios”</b></p>
		</td>
		<td width="422" bgcolor="#ffffff" style="background: #ffffff; border-top: 1px solid #e2e2e2; border-bottom: 1px solid #e2e2e2; border-left: none; border-right: none; padding: 0.3cm 0.7cm;vertical-align: middle"><p align="justify">
			Significa la comercialización de Productos ofrecidos por “HOCKEY
			EXPORTPRINT”</p>
		</td>
	</tr>
	<tr valign="bottom">
		<td width="123" bgcolor="#ffffff" style="background: #ffffff; border-top: 1px solid #e2e2e2; border-bottom: 1px solid #e2e2e2; border-left: none; border-right: none; padding: 0.3cm 0.7cm;vertical-align: middle"><p align="justify">
			“<b>Terceros”</b></p>
		</td>
		<td width="422" bgcolor="#ffffff" style="background: #ffffff; border-top: 1px solid #e2e2e2; border-bottom: 1px solid #e2e2e2; border-left: none; border-right: none; padding: 0.3cm 0.7cm;vertical-align: middle"><p align="justify">
			Cualquier tercero que tenga una relación comercial directa o
			indirectamente con “HOCKEY EXPORTPRINT”, tales como
			patrocinadores, anunciantes, prestadores de servicios, socios
			comerciales, etc.</p>
		</td>
	</tr>
	<tr valign="bottom">
		<td width="123" bgcolor="#ffffff" style="background: #ffffff; border-top: 1px solid #e2e2e2; border-bottom: 1px solid #e2e2e2; border-left: none; border-right: none; padding: 0.3cm 0.7cm;vertical-align: middle"><p align="justify">
			“<b>Cliente o Usuario”</b></p>
		</td>
		<td width="422" bgcolor="#ffffff" style="background: #ffffff; border-top: 1px solid #e2e2e2; border-bottom: 1px solid #e2e2e2; border-left: none; border-right: none; padding: 0.3cm 0.7cm;vertical-align: middle"><p align="justify">
			Aquella persona moral o física (mayor de edad, que cuenta con
			capacidad de goce y ejercicio plena y suficiente) que utiliza la
			plataforma y los servicios que en la misma se ofrecen. En caso de
			personas menores de edad, estos deberán utilizar la plataforma
			con autorización de sus padres, tutores o persona que ejerza la
			patria potestad sobre ellos.</p>
		</td>
	</tr>
</table>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm"><br/>
<br/>

</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm"><b>Precios
y Costos de Envío</b></p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Los
precios mostrados incluyen el Impuesto al Valor Agregado (I.V.A.),
pero no incluyen los costos de envío.</p>
<ul>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Tarifa de Envío:</b> El costo se indicará claramente durante el
	proceso de pago.</p></li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Variaciones:</b> Los precios en línea pueden variar respecto a
	otros canales de venta y están sujetos a cambios sin previo aviso.</p></li>
</ul>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm"><b>Pedidos
y Formalización del Contrato</b></p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Al
ingresar a la Plataforma, el Cliente o Usuario podrá seleccionar
entre los Productos ofertados aquellos que le sean de mayor agrado y
en la cantidad que desee;</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">El
Usuario llenará un formulario de compra en el que se le solicitarán
datos personales con su nombre, correo, dirección, teléfono, entre
otros.</p>

<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">El
Cliente o Usuario declara que los datos que ingrese y proporcione son
reales, precisos y corresponden a la realidad y actualidad, por lo
que <b>“HOCKEY EXPORTPRINT”</b> los acepta como ciertos y no será
responsable por cualquier dato falso que ingrese el Cliente o
Usuario. Los Cliente o Usuarios garantizan y responden, en cualquier
caso, de la veracidad, exactitud, vigencia y autenticidad de los
datos personales ingresados.</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Una
vez realizado tu pedido, recibirás una confirmación al correo
electrónico proporcionado. 
</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Si
por algún motivo no podemos cumplir con el pedido (ej. falta de
stock), te informaremos a la brevedad y reembolsaremos el importe
íntegro por el mismo método de pago utilizado.</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm"><b>Envíos
y Entrega</b></p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Trabajamos
con servicios de logística y paquetería para entregar tus productos
en el domicilio indicado.</p>
<ul>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Plazos:</b> El objetivo de entrega es de 5 a 10 días hábiles
	tras la confirmación, salvo eventos de fuerza mayor.</p></li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Intentos de entrega:</b> Tras dos intentos fallidos de entrega,
	<b>HOCKEY EXPORTPRINT</b> se reserva el derecho de cobrar los costos
	adicionales generados.</p></li>
</ul>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm"><b>Cambios,
Devoluciones y Cancelaciones</b></p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">De
acuerdo con nuestras finalidades de atención al cliente, puedes
solicitar la devolución de tu pedido:</p>
<ul>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Plazo:</b> Tienes un periodo de <b>15 días naturales</b> a
	partir de la recepción para iniciar el proceso, lo que deberá de
	hacerse enviado un correo electrónico <font color="#467886"><u><a href="mailto:shipments@starter-mx.com">shipments@starter-mx.com</a></u></font>
		</p></li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Contenido: </b>El asunto del correo deberá de indicar si
	solicita un cambio, devolución o cancelación indicando brevemente
	las circunstancias y enviando las evidencias necesarias, <b>“HOCKEY
	EXPORTPRINT”</b> evaluará la información enviada, pudiendo
	solicitar información adicional, una vez revisada la solicitud se
	indicará al Cliente o Usuario si la devolución procede, o en caso
	contrario las razones de la no procedencia.</p></li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Condiciones:</b> Los artículos deben estar en su estado
	original: sin usar, sin lavar, con etiquetas intactas y en su
	empaque original.</p></li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Excepciones:</b> Por higiene, no se aceptan devoluciones en ropa
	interior, trajes de baño (partes bajas), ni accesorios de uso
	personal.</p></li>
</ul>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm"><b>6.
Métodos de Pago</b></p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Para
tu seguridad, utilizamos</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
protocolos <b>SSL (Secure Socket Layer)</b> para encriptar tu
información transaccional. Los métodos aceptados son:</p>
<ul>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Tarjetas de Crédito/Débito:</b> Visa, Mastercard y American
	Express.</p></li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Pasarelas de Pago:</b> Procesamiento a través de instituciones
	bancarias autorizadas para prevención de fraudes.</p></li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Facturación:</b> Podrás solicitar tu factura electrónica
	proporcionando tu RFC y datos fiscales.</p></li>
</ul>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm"><b>FORMA
DE PAGO.</b></p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Los
Productos y Servicios ofrecidos a través de la Plataforma, salvo que
se señale una forma diferente para casos particulares u ofertas de
determinados bienes o Servicios, sólo pueden ser pagados con los
medios que en cada caso específicamente se indican.</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Tarjeta
de crédito o débito,</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Transferencia
electrónica SPEI, donde se realiza una transferencia bancaria a
nuestra cuenta,</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Pago
en efectivo (Oxxo).</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Cada
vez que <b>“HOCKEY EXPORTPRINT” </b>reciba un pago, éste será
confirmado vía correo electrónico al Usuario para iniciar el
despacho de Productos.</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Los
descuentos, cupones, promociones, etc. utilizados por los Usuarios no
serán reintegrados en caso de devolución de los Productos, por
cualquier causa que esto ocurriera.</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm"><b>Responsabilidad</b></p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm"><b>HOCKEY
EXPORTPRINT</b> no se hace responsable de pérdidas indirectas
derivadas de fallas en la entrega por eventos fuera de nuestro
control razonable (caso fortuito o fuerza mayor). 
</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">“<b>HOCKEY
EXPORTPRINT” </b>se reserva el derecho, a su entera discreción, a
cancelar o suspender el acceso a alguno o a todos los sitios,
contenidos o servicios de la Plataforma en cualquier momento, sin
previo aviso, por iniciativa propia o a petición de terceros, a
cualquier Usuario, por cualquier motivo, incluyendo sin limitación a
aquellos Usuarios que hacen uso indebido de la Plataforma</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
<b>Colores y Tallas</b></p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Hacemos
el mejor esfuerzo por mostrar los colores reales de las prendas. Sin
embargo, el tono exacto puede variar dependiendo de la configuración
de tu monitor o dispositivo. Las tablas de tallas son guías
aproximadas y pueden variar según el material de fabricación.</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm"><b>Propiedad
Intelectual</b></p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">El
Cliente o Usuario acepta que todas las fotografías e imágenes que
se publican en la Plataforma le pertenecen y que no hay sobre ellos
derechos de exclusividad de terceros y que los envía únicamente
para la prestación de los servicios que contrate con <b>“HOCKEY
EXPORTPRINT”</b>, liberando a <b>“HOCKEY EXPORTPRINT”</b> de
cualquier responsabilidad. 
</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Todos
los derechos de propiedad intelectual, marcas y contenidos de este
sitio pertenecen a <b>HOCKEY EXPORTPRINT, S.A. DE C.V.</b> Queda
prohibida la reproducción total o parcial del contenido sin
autorización expresa.</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm"><b>Facturación
Electrónica</b></p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Para
la emisión de comprobantes fiscales (CFDI) derivados de tus compras
en nuestro sitio, deberás seguir los siguientes lineamientos:</p>
<ul>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Solicitud de Factura:</b> Podrás solicitar tu factura al momento
	de finalizar tu pedido o dentro del mes calendario en que se realizó
	la compra, para lo que deberás enviar un correo electrónico a
	<font color="#467886"><u><a href="mailto:facturacion@starter-mx.com">facturacion@starter-mx.com</a></u></font>
	con los siguientes datos.</p></li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Datos Requeridos:</b> Para procesar la factura, es indispensable
	que proporciones con exactitud los siguientes datos de
	identificación y contacto:</p>
	<ul>
		<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
		Nombre completo o Razón Social.</p></li>
		<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
		Constancia de Situación Fiscal con una antigüedad no mayor a un
		mes.</p></li>
		<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
		Registro Federal de Contribuyentes (RFC).</p></li>
		<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
		Clave Única de Registro de Población (CURP), en caso de ser
		persona física.</p></li>
		<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
		Domicilio Fiscal completo (incluyendo Código Postal).</p></li>
		<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
		Uso del CFDI (ej. Gastos en general, Adquisición de mercancías).</p></li>
		<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
		Correo electrónico para el envío de los archivos XML y PDF.</p></li>
	</ul>
  </li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Plazo de Entrega:</b> Una vez validados tus datos, la factura
	será enviada a tu correo electrónico en un plazo no mayor a 4 días
	hábiles.</p></li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Correcciones:</b> Es responsabilidad del cliente verificar que
	los datos proporcionados sean correctos. En caso de errores, deberás
	contactar a nuestro equipo de atención a clientes de manera
	inmediata para solicitar la cancelación y reexpedición, siempre
	que ocurra dentro del mismo mes de la compra, en caso de que la
	solicitud de cancelación y reexpedición sea fuera del mes
	calendario, ya no podrá realizarse ningún cambio.</p></li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Seguridad de Datos:</b> Los datos fiscales proporcionados serán
	tratados bajo las medidas de seguridad administrativas, técnicas y
	físicas de <b>HOCKEY EXPORTPRINT, S.A. DE C.V.</b>, garantizando su
	confidencialidad mediante protocolos SSL.</p></li>
</ul>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm"><b>Datos
de Contacto y Dudas</b></p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">Para
cualquier aclaración, seguimiento de compra o ejercicio de derechos
sobre tus datos, puedes contactarnos en:</p>
<ul>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Domicilio:</b> Blvd. Miguel Alemán Valdéz Lote 1 Int. D2, Col.
	San Mateo Otzacatipan, C.P. 50220, Toluca, Estado de México.</p></li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	<b>Correo Electrónico:</b> contacto@starter-mx.com.</p></li>
</ul>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">El
Cliente o Usuario, al aceptar los presentes Términos y Condiciones,
manifiesta que:</p>
<ul>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	Es mayor de edad en términos de la legislación aplicable en los
	Estados Unidos Mexicanos.</p></li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	Actúa bajo su propio nombre;</p></li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	Se dedica a actividades lícitas, por lo que manifiesta que no
	conduce, ni es parte de actividades criminales o ilegales ni tiene
	la intención de utilizar su cuenta en relación con tales
	actividades.</p></li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	No utiliza o pretende utilizar o tiene la intención de permitir que
	otra persona utilice su cuenta para cualquier fin ilegal o
	prohibido, incluyendo, sin limitación, fraude o lavado de dinero,
	bajo las leyes de México y/o cualquier otra legislación aplicable.</p></li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	Proporcionó información verdadera, exacta y completa. 
	</p></li>
	<li><p align="justify" style="line-height: 116%; margin-bottom: 0.28cm">
	Cualquier información personal proporcionada por los Cliente o
	Usuarios será tratada con el debido cuidado y seguridad de acuerdo
	con nuestro Aviso de Privacidad.</p></li>
</ul>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm; margin-left: 1.27cm">
<br/>
<br/>

</p>
<p align="right" style="line-height: 116%; margin-bottom: 0.28cm"><b>Última
actualización:</b> 17 de febrero de 2026.</p>
<p align="justify" style="line-height: 116%; margin-bottom: 0.28cm"><br/>
<br/>

</p>

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

                  <div
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                  />


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
