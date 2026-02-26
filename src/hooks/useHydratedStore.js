import { useEffect, useState } from 'react'

export const useHydratedStore = (store, callback) => {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window !== 'undefined' && store && store.persist) {
      const unsub = store.persist.onHydrate(() => {
        setHydrated(false)
      })
      
      const unsubFinish = store.persist.onFinishHydration(() => {
        setHydrated(true)
      })

      // Si ya está hidratado, marcar como hidratado
      if (store.persist.hasHydrated()) {
        setHydrated(true)
      }

      return () => {
        unsub()
        unsubFinish()
      }
    } else {
      // Si no hay persistencia o no estamos en el cliente, marcar como hidratado
      setHydrated(true)
    }
  }, [store])

  return hydrated
}
