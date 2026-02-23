"use client";

import { useRouter } from "next/navigation";

import Select from "react-select";

export const BrandSelector = ({ brand_name, category_name, allBrands }) => {
  const router = useRouter();

  const actualValue = {"value": brand_name, "label": brand_name}

  const handleBrandChange = (selectedOption) => {
    const brnd = selectedOption.value;
    router.push(`/categories/${brnd.trim().replace(/\s/g,"-")}/${category_name.trim().replace(/\s/g,"-")}`);
  };


  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "white",
      textTransform:"none",
      paddingLeft:"10px",
      borderColor: state.isFocused ? "#0033A0":"#cccccc",
      boxShadow: "0",
      "&:hover": {
        ...base,
        boxShadow: "0",
        borderColor: "#0033A0 !important",
      }
    }),
    singleValue: (base, state) => ({
      ...base,
      color: "rgb(15 23 42 / var(--tw-text-opacity))",
    }),
    multiValueRemove: (base, state) => ({
      ...base,
      color: "red",
    }),
    option: (base, state) => {
      return {
        ...base,
        background: state.isSelected ? "#0033A0" : state.isFocused ? "#0033A050": "transparent",
        color: state.isSelected ? "white" : "grey",
      };
    },
  };
  
  return (

    <Select
    instanceId={'marcas'}
    styles={customStyles}
    placeholder="Seleccione"
    options={allBrands}
    value={actualValue}
    onChange={handleBrandChange}
    isSearchable={true}
   ></Select>

    
  );
};
