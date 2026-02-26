import { create } from 'zustand'

interface CartItem {
  codigo: string
  cantidad: number
  precio: number
  total: number
  [key: string]: any
}

interface CartStore {
  cart: CartItem[]
  cart_subtotal: number
  cart_descuento: number
  cart_iva: number
  cart_total: number
  cart_porcentaje_descuento: number

  add_cart_item: (item: CartItem) => void
  remove_cart_item: (index: number) => void
  check_discount_code: (percentage: number) => void
  clear_discount_code: () => void
  clear_cart: () => void
}

export const useCartStore = create<CartStore>((set, get) => ({

  cart: [],
  cart_subtotal: 0,
  cart_descuento: 0,
  cart_iva: 0,
  cart_total: 0,
  cart_porcentaje_descuento: 0,

  // =========================
  // AGREGAR ITEM
  // =========================
  add_cart_item: (item) => {
    set((state) => {

      const cantidad = Number(item.cantidad)
      const precio = Number(item.precio)

      let encontrado = false

      const nuevoCart = state.cart.map((element) => {
        if (element.codigo === item.codigo) {
          encontrado = true
          const nuevaCantidad = Number(element.cantidad) + cantidad

          return {
            ...element,
            cantidad: nuevaCantidad,
            total: nuevaCantidad * Number(element.precio)
          }
        }
        return element
      })

      const cartFinal = encontrado
        ? nuevoCart
        : [...nuevoCart, {
            ...item,
            cantidad,
            precio,
            total: cantidad * precio
          }]

      const nuevoSubtotal = cartFinal.reduce(
        (acc, item) => acc + Number(item.total),
        0
      )

      const nuevoDescuento =
        nuevoSubtotal * (state.cart_porcentaje_descuento * 0.01)

      const nuevoIva = 0

      const nuevoTotal =
        nuevoSubtotal - nuevoDescuento + nuevoIva

      return {
        cart: cartFinal,
        cart_subtotal: nuevoSubtotal,
        cart_descuento: nuevoDescuento,
        cart_iva: nuevoIva,
        cart_total: nuevoTotal
      }
    })
  },

  // =========================
  // ELIMINAR ITEM
  // =========================
  remove_cart_item: (index) => {
    set((state) => {

      const nuevoCart = state.cart.filter((_, i) => i !== index)

      const nuevoSubtotal = nuevoCart.reduce(
        (acc, item) => acc + Number(item.total),
        0
      )

      const nuevoDescuento =
        nuevoSubtotal * (state.cart_porcentaje_descuento * 0.01)

      const nuevoIva = 0

      const nuevoTotal =
        nuevoSubtotal - nuevoDescuento + nuevoIva

      return {
        cart: nuevoCart,
        cart_subtotal: nuevoSubtotal,
        cart_descuento: nuevoDescuento,
        cart_iva: nuevoIva,
        cart_total: nuevoTotal
      }
    })
  },

  // =========================
  // APLICAR DESCUENTO
  // =========================
  check_discount_code: (percentage) => {
    set((state) => {

      const nuevoDescuento =
        state.cart_subtotal * (percentage * 0.01)

      const nuevoTotal =
        state.cart_subtotal - nuevoDescuento + state.cart_iva

      return {
        cart_porcentaje_descuento: percentage,
        cart_descuento: nuevoDescuento,
        cart_total: nuevoTotal
      }
    })
  },

  // =========================
  // LIMPIAR DESCUENTO
  // =========================
  clear_discount_code: () => {
    set((state) => {

      const nuevoDescuento = 0

      const nuevoTotal =
        state.cart_subtotal - nuevoDescuento + state.cart_iva

      return {
        cart_porcentaje_descuento: 0,
        cart_descuento: nuevoDescuento,
        cart_total: nuevoTotal
      }
    })
  },

  // =========================
  // LIMPIAR CARRITO
  // =========================
  clear_cart: () => {
    set({
      cart: [],
      cart_subtotal: 0,
      cart_descuento: 0,
      cart_iva: 0,
      cart_total: 0,
      cart_porcentaje_descuento: 0,
    })
  }

}))