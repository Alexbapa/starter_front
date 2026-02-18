"use client";

import Link from "next/link";

export const CategoryItemMain = ({ item1 }) => {
  return (
    <div className="col-12 col-md-4 mb-4">
      <Link
        className="category_item_1 d-block position-relative"
        href={`/categories/Todas/${item1.nombre.trim().replace(/\s/g, "-")}`}
      >
        <img
          src={item1.imagen}
          alt={item1.nombre}
          className="img-fluid w-100"
        />

        <span
          className="item_title position-absolute text-white"
          style={{
            bottom: "20px",
            left: "20px",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          {item1.nombre}
        </span>
      </Link>
    </div>
  );
};


