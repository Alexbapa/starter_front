
import Link from "next/link";

import clienteAxios from "../../../../../../config/axios";

import { ProductCard } from "./productCard";
import { RelatedProducts } from "./relatedProducts";




export const generateMetadata = async ({ params }) => {
  const p = await params;

  return {
    openGraph: {
      title: p.product_name,
      description: p.category_name,
      url: `https://starter.com.mx/shop_details/${p.category_name}/${p.product_name}/${p.code}`,
      siteName: 'Starter',
      images: [
        {
          url: `http://agencianuba.com/starter_front_images/productos/${p.code}.jpg`,
          width: 400,
          height: 600,
        },
      ],
      locale: 'es_MX',
      type: 'website',
    },
  };
};


const Shop_details = async ({ params }) => {

  const p = await params;

  let foto_principal;
  let nombre_original;
  let marca;
  let categoria;
  let subcategoria;
  let producto;
  let precio;
  let allSizes;
  let fotos_carrusel;
  let productosRelacionados;
  

  const getProduct = async () => {
    try {
      const res = await clienteAxios.get(`/producto/single-codigo/` + p.code);
      //console.log(res.data.single[0]);

      foto_principal = res.data.single[0].foto_principal
      nombre_original = res.data.single[0].nombre
      marca = res.data.single[0].marca
      categoria = res.data.single[0].categoria
      subcategoria = res.data.single[0].subcategoria
      producto = res.data.single[0];
      
      precio = res.data.single[0].precio
    
      allSizes = res.data.single[0].talla

      fotos_carrusel = res.data.single[0].fotos_carrusel
          
      productosRelacionados = res.data.related_products
      
      
    } catch (error) {
      console.log(error);
    }

  
  };

   

  
  await getProduct();
  


  return (
    <>
    
    <main>
      {/*
      <SideMenu></SideMenu>
      */}

      <section className="breadcrumb_section" >
        <div className="container width_tablet">
          <div className="row">
            <div className="col col-lg-6">
              <div className="breadcrumb_content">
                <ul className="breadcrumb_nav ul_li_center">
                  <li>
                    <Link className="home_btn" href="/">
                      Inicio
                    </Link>
                  </li>
                              <li>
                                <Link className="home_btn" href={`/categories/Todas/${p.category_name.replace("-", ' ')}`}>
                                  {p.category_name.replace("-", ' ')}
                                </Link>
                               </li>
                  <li>{nombre_original}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductCard fotos_carrusel={fotos_carrusel} producto={producto} allSizes={allSizes}/>

      <RelatedProducts productosRelacionados={productosRelacionados} codigo={p.code} />

    </main>
    </>
  );
};

export default Shop_details;


