"use client";

import Slider from "react-slick";
import { BtnCategoria } from "./btnCategoria";

export const MainSlider = ({ categories }) => {

const settings = {
  arrows: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true
};

return (
<section className="slider_section main_slider_1">

<Slider {...settings}>

<div className="slider_item">
  <div className="container width_desktop">
    <div className="row justify-content-end align-items-center">
      <div className="col-8 col-lg-5 col-md-6 col-sm-8">

        <div className="slider_content text-white text-center">

          <h1 className="hero_title fadeInCustom">
            BLACK LABEL
            <br />
            <span className="hero_sub">
              SPRING 26
            </span>
          </h1>

          <p className="hero_tagline">
            LOOK FOR THE STAR
          </p>

          <BtnCategoria categories={categories} />

        </div>

      </div>
    </div>
  </div>
</div>

</Slider>

</section>
);
};