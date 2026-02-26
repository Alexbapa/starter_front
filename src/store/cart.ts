import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Storage personalizado para TypeScript
const customStorage = {
  getItem: (name) => {
    const item = typeof window !== 'undefined' ? localStorage.getItem(name) : null;
    return item ? JSON.parse(item) : null;
  },
  setItem: (name, value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(name, JSON.stringify(value));
    }
  },
  removeItem: (name) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(name);
    }
  }
};

export const useCartStore = create(persist(
  (set, get) => ({
    cart: [],
    cart_subtotal: 0,
    cart_descuento: 0,
    cart_iva: 0,
    cart_total: 0,
    cart_porcentaje_descuento: 0,

    //funciones 
    //agregar
    add_cart_item: (item) => {

      //subtotal
      set((state) => ({
        cart_subtotal: state.cart_subtotal > 0 ?
          state.cart_subtotal + (parseInt(item.cantidad) * parseFloat(item.precio))
          :
          parseInt(item.cantidad) * parseFloat(item.precio)
      }));

      //descuento
      set((state) => ({
        cart_descuento: parseFloat(state.cart_subtotal) * (parseFloat(state.cart_porcentaje_descuento) * .01)
      }));

      //iva por el momento no cobran iva
      set((state) => ({
        cart_iva: 0
      }));

      //total
      set((state) => ({
        cart_total: parseFloat(state.cart_subtotal) - parseFloat(state.cart_descuento) + parseFloat(state.cart_iva)
      }));

      //agrupar o agregar a cart
      let encontrado;
      set((state) => ({
        cart: state.cart.map((element) => {
          if (item.codigo === element.codigo) {
            encontrado = true;
            const suma = parseInt(element.cantidad) + parseInt(item.cantidad);
            element.cantidad = suma;
            element.total = suma * element.precio;
          }
          return element;
        })
      }));
      if (encontrado != true) {
        set((state) => ({
          cart: [...state.cart, item],
        }));
      }
    },

    //borrar
    remove_cart_item: (index) => {

      //subtotal
      set((state) => ({
        cart_subtotal: state.cart_subtotal - parseFloat(state.cart[index]['total'])
      }));

      //descuento
      set((state) => ({
        cart_descuento: parseFloat(state.cart_subtotal) * (parseFloat(state.cart_porcentaje_descuento) * .01)
      }));

      //iva por el momento no cobran iva
      set((state) => ({
        cart_iva: 0
      }));

      //total
      set((state) => ({
        cart_total: parseFloat(state.cart_subtotal) - parseFloat(state.cart_descuento) + parseFloat(state.cart_iva)
      }));

      //cart
      set((state) => ({
        ...state,
        cart: state.cart.filter((item, idx) => idx != index)
      }));

    },

    //aplicar codigo de descuento
    check_discount_code: (percentage) => {

      //porcentaje
      set((state) => ({
        cart_porcentaje_descuento: percentage
      }));

      //descuento
      set((state) => ({
        cart_descuento: parseFloat(state.cart_subtotal) * (parseFloat(state.cart_porcentaje_descuento) * .01)
      }));

      //iva por el momento no cobran iva
      set((state) => ({
        cart_iva: 0
      }));

      //total
      set((state) => ({
        cart_total: parseFloat(state.cart_subtotal) - parseFloat(state.cart_descuento) + parseFloat(state.cart_iva)
      }));

    },

    //reset codigo de descuento
    clear_discount_code: () => {

      //porcentaje
      set((state) => ({
        cart_porcentaje_descuento: 0
      }));

      //descuento
      set((state) => ({
        cart_descuento: parseFloat(state.cart_subtotal) * (parseFloat(state.cart_porcentaje_descuento) * .01)
      }));

      //iva por el momento no cobran iva
      set((state) => ({
        cart_iva: 0
      }));

      //total
      set((state) => ({
        cart_total: parseFloat(state.cart_subtotal) - parseFloat(state.cart_descuento) + parseFloat(state.cart_iva)
      }));

    },

    //resetear carrito
    clear_cart: () => {
      set((state) => ({
        cart: [],
        cart_subtotal: 0,
        cart_descuento: 0,
        cart_iva: 0,
        cart_total: 0,
        cart_porcentaje_descuento: 0,
      }));
    }

  }),
  {
    name: 'cart-storage', // name of item in storage (must be unique)
    storage: customStorage, // storage personalizado para TypeScript
  } as const
))
