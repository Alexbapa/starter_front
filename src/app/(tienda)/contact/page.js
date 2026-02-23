import Link from "next/link";

import { ContactForm } from "./contact_form";

const Contact = async () => {
  return (
    <>
      <main>
        <section
          className="breadcrumb_section" >
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
                    <li>Contacto</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact_section sec_space_small p-4">
          <div className="container">
            <div className="contact3_wrap">
           
              <div className="row">
                <div className="col">
                  <div className="contact_form3">
                    <ContactForm />
                  </div>
                </div>
                <div className="col">
                  <div className="contact_form3">
                    <div className="info_list">
                      <h4>Contáctanos</h4>
                      <ul className="ul_li_block">
                        <li>contacto@starter.com.x</li>
                      </ul>
                    </div>
                    <div className="social_wrap">
                      <h4>Síguenos en:</h4>
                      <ul className="social_border ul_li">
                        <li>
                          <a
                            href="https://www.facebook.com/Startermex"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        {/*
                        <li><a href="#!"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#!"><i className="fab fa-skype"></i></a></li>
                        <li><a href="#!"><i className="fas fa-envelope"></i></a></li>
                        <li><a href="#!"><i className="fab fa-whatsapp"></i></a></li>
                        */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
