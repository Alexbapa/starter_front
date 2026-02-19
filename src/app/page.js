import clienteAxios from "../config/axios";

import Link from 'next/link'

import {BtnCategoria} from "../components/btnCategoria"

import {ProductPreviewCard} from "../components/productPreviewCard"

import {CategoryItemMain} from "../components/CategoryItemMain"

import {CategoryItemSmall} from "../components/CategoryItemSmall"

const getCategories = async () => {
  try {
    const res = await clienteAxios.get(`/categoria/obtener`);
    //console.log(res.data.categorias)
    return res.data.categorias;
  } catch (error) {
    console.log(error);
  }
};

const getCategoriesSix = async () => {
  try {
    const res = await clienteAxios.get(`/categoria/obtenerSeis`);
    //console.log(res.data.categorias)
    return res.data.categorias;
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async () => {
  try {
    const res = await clienteAxios.get(`/producto/obtener`);
    //console.log(res.data.productos)
    return res.data.productos;
  } catch (error) {
    console.log(error);
  }
};

const Page = async () => {

  const categories = await getCategories();
  const categoriesSix = await getCategoriesSix();
  const products = await getProducts();

  return (
    <div className=".body">
      <main>
        {/*
        <SideMenu></SideMenu>
        */}

        <section className="slider_section main_slider_1">
          <div
            className="main_slider"
           data-slick='{
    "arrows": true, 
    "dots": true, 
    "autoplay": true, 
    "autoplaySpeed": 5000,
    "infinite": true
  }'
          >
            <div className="slider_item">
              <div className="container width_desktop">
                <div className="row justify-content-end">
                  <div className="col-8 col-lg-5 col-md-6 col-sm-8">
                    <div className="slider_content text-white text-center">
                      {/*
                  <h3 className="small_title" data-animation="fadeInUp2" data-delay=".2s">Para cualquier industria</h3>
                  */}
                      <h1
                        className="big_title text-pink fadeInCustom"
                        style={{lineHeight:".75"}}
                      >
                        <span style={{ paddingBottom: "15px", display: "inline-block" }}>DOMINA</span>
                        <br></br>
                        <span className="text-brown">las calles</span>
                      </h1>
                      {/*
                  <p className="text-brown" data-animation="fadeInUp2" data-delay=".6s">
                    Para cualquier industria y en cualquier cantidad.
                  </p>
                  */}


                    <BtnCategoria categories={categories}/>
                 



                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="category_section sec_space_large" style={{background:"#080808",}} >
          <div className="container width_desktop">
            
            <div className="row align-items-center">
              <div className="col ">
                <div className="section_title" style={{paddingBottom:"0px",}}>
                  <h2 className="title_text text-pink-light fontPlantagenet" style={{color:"#fff",}} >
                  Lo más nuevo
                  </h2>
                </div>
              </div>
            </div>  

          <div className="row">
             {categories &&
               categories.slice(0, 3).map((item1, index) => (
               <CategoryItemMain key={index} item1={item1} />
              ))}
          </div>


          </div>
        </div>

        <section className="fullwidth_deals_1" style={{backgroundAttachment:"fixed", backgroundPositionX:"30%"}}>
          <div className="container width_desktop main_slider_1">
            <div className="row justify-content-end">
              <div className="col col-md-6 col-sm-8">
                 <div className="slider_content text-white text-center">
                      {/*
                  <h3 className="small_title" data-animation="fadeInUp2" data-delay=".2s">Para cualquier industria</h3>
                  */}
                      <h1
                        className="big_title text-pink fadeInCustom"
                        style={{lineHeight:".75"}}
                      >  
                        <span
  style={{
   paddingBottom: "15px", display: "inline-block"
  }}
>REGRESAMOS</span>{" "}
                        <br></br>
                        <span className="text-brown" style={{
    
    
  }}>A CASA</span>
                      </h1>
                    </div>
              </div>  
            </div>
          </div>
        </section>

        <section className="product_section sec_space_large" style={{paddingBottom:"0px", background:"#000"}}>
          <div className="container width_desktop">
            <div className="row align-items-center">
              <div className="col ">
                <div className="section_title">
                  <h2 className="title_text text-pink-light fontPlantagenet" style={{
    color: "#ffff",
  }} >
                    El StreetWare de México
                  </h2>
                  <p className="mb-0">Elige tu estilo</p>
                </div>
              </div>

              {/*Controles*/}
              <div className="col ">
                <ul className="product_tabnav_4 nav ul_li_right" role="tablist">
                  {/*Active*/}
                  <li>
                    <button
                      className="active fontPlantagenet"
                      data-bs-toggle="tab"
                      data-bs-target={`#${
                        categoriesSix &&
                        categoriesSix[0]["nombre"].split(" ").join("_")
                      }_tab`}
                      type="button"
                      role="tab"
                      aria-controls={`#${
                        categoriesSix &&
                        categoriesSix[0]["nombre"].split(" ").join("_")
                      }_tab`}
                      aria-selected="true"
                    >
                      {categoriesSix && categoriesSix[0]["nombre"]}
                    </button>
                  </li>

                  {/*los demas*/}
                  {categoriesSix &&
                    categoriesSix
                      .filter(
                        (element) =>
                          element.nombre !== categoriesSix[0]["nombre"]
                      )
                      .map((item) => (
                        <li key={item._id}>
                          <button
                            className="fontPlantagenet"
                            data-bs-toggle="tab"
                            data-bs-target={`#${item.nombre
                              .split(" ")
                              .join("_")}_tab`}
                            type="button"
                            role="tab"
                            aria-controls={`#${item.nombre
                              .split(" ")
                              .join("_")}_tab`}
                            aria-selected="false"
                          >
                            {item.nombre}
                          </button>
                        </li>
                      ))}
                </ul>
              </div>
            </div>

            {/*Contenido de cada tab*/}
            <div className="tab-content">
              {/*Active*/}
              <div
                className="tab-pane fade show active"
                id={`${
                  categories && categories[0]["nombre"].split(" ").join("_")
                }_tab`}
                role="tabpanel"
              >
                <div className="row">
                  {/*Producto*/}
                  {products &&
                    categories &&
                    products
                      .filter(
                        (element) =>
                          element.categoria === categories[0]["nombre"] &&
                          element.fotos_carrusel.length > 0 &&
                          element.estatus === "Activo"
                      )
                      .map((item, index) => {
                        return index < 8 ? (

                          <div key={item._id} className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <ProductPreviewCard item={item}/>
                          </div>

                        ) : (
                          <></>
                        );
                      })}
                  {/*fin producto*/}
                </div>
              </div>

              {/*los demas*/}
              {categories &&
                categories
                  .filter(
                    (element) => element.nombre !== categories[0]["nombre"]
                  )
                  .map((item1) => (
                    <div
                      key={item1._id}
                      className="tab-pane fade"
                      id={`${item1.nombre.split(" ").join("_")}_tab`}
                      role="tabpanel"
                    >
                      <div className="row">
                        {/*Producto*/}

                        {products &&
                          products
                            .filter(
                              (element) =>
                                element.categoria === item1.nombre &&
                                element.fotos_carrusel.length > 0 &&
                                element.estatus === "Activo"
                            )
                            .map((item, index) => {
                              return index < 8 ? (
                                <div key={item._id} className="col-lg-3 col-md-4 col-sm-6 col-6">
                                  <ProductPreviewCard item={item}/>
                                </div>
                              ) : (
                                <></>
                              );
                            })}
                        {/*fin producto*/}
                      </div>
                    </div>
                  ))}
            </div>
          </div>

          {/*modal código descuento*/}
          <div
            className="modal fade"
            id="cod_desc"
            aria-hidden="true"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Código de Descuento</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    Utiliza este código y obtén un 10% de descuento:{" "}
                    <strong>mell10</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


      {/*
<section className="product_section">
  <div className="container width_desktop">
    <div className="row align-items-center">
      <div className="col ">
        <div className="section_title" style={{paddingBottom:"0px"}}>
          <h2 className="title_text text-pink-light fontPlantagenet">
            Las preferidas de todas
          </h2>
        </div>
      </div>
    </div>  
  </div>
</section>

<section className="feature_section">
  <div className="container-fluid">
    <div className="row no_gap">
      ...
    </div>
  </div>
</section>
*/}

<section className="launch_section">
  <div className="container text-center">
    <h2 className="launch_title">
      NUEVA COLECCIÓN
    </h2>
    <p className="launch_subtitle">
      Descubre lo nuevo de Starter
    </p>
    <Link href="/shop" className="btn btn_primary btn_rounded">
      VER COLECCIÓN
    </Link>
  </div>
</section>

      </main>
    </div>
  );
}


export default Page