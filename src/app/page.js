"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// 1. Importamos las imágenes directamente desde src/images
// 1. Importamos usando rutas relativas (subimos un nivel con ../)
import bgStarter from "../images/banner/proximamente.png"; 
import logoStarter from "../images/logo/Logo_redondo_alta.png";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Configura la fecha de lanzamiento para el viernes 27 de febrero de 2026 a las 00:00 hrs
    const targetDate = new Date("2026-02-27T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  return (
    <main style={styles.container}>
      {/* 1. Capa de Imagen de Fondo (Oscurecida) */}
      <div style={styles.bgImageContainer}>
        <Image
          src={bgStarter} // Asegúrate que este sea el nombre correcto
          alt="Starter Streetwear Background"
          fill
          priority
          style={{ objectFit: 'cover', filter: 'brightness(0.4)' }} // brightness(0.4) oscurece la imagen
        />
      </div>

      {/* 2. Capa de Efecto Radial (Viñeta y círculos desde el centro) */}
      <div style={styles.overlay}></div>

      {/* 3. Contenido Principal */}
      <div style={styles.content}>
        {/* Logo Animado */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={styles.logoContainer}
        >
        <Image
            src={logoStarter}
            alt="Starter Logo"
            width={220} // Un ancho que respeta el "breathing space" del manual
            height={155} // Alto proporcional para que no se deforme
            priority
            style={{ 
              objectFit: 'contain', // Asegura que el logo se vea completo
              mixBlendMode: 'screen', // ¡La magia! Vuelve transparente el fondo negro del JPG
            }}
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={styles.subtitle}
        >
          STREETWEAR COLLECTION // DROP 01
        </motion.p>

        {/* Temporizador Animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          style={styles.timerContainer}
        >
          <div style={styles.timeBlock}>
            <span style={styles.timeNumber}>{timeLeft.days}</span>
            <span style={styles.timeLabel}>DÍAS</span>
          </div>
          <span style={styles.colon}>:</span>
          <div style={styles.timeBlock}>
            <span style={styles.timeNumber}>{timeLeft.hours.toString().padStart(2, '0')}</span>
            <span style={styles.timeLabel}>HRS</span>
          </div>
          <span style={styles.colon}>:</span>
          <div style={styles.timeBlock}>
            <span style={styles.timeNumber}>{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <span style={styles.timeLabel}>MIN</span>
          </div>
          <span style={styles.colon}>:</span>
          <div style={styles.timeBlock}>
            <span style={styles.timeNumber}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <span style={styles.timeLabel}>SEG</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p style={styles.footerText}>LA CALLE NOS ESPERA. PREPÁRATE.</p>
        </motion.div>
      </div>
    </main>
  );
}

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#000000', // Fondo negro base
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'var(--font-din), sans-serif',
    overflow: 'hidden',
  },
  bgImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // Este degradado crea el efecto de "círculos desde el centro" y oscurece los bordes
    backgroundImage: 'radial-gradient(circle at center, transparent 10%, rgba(0,0,0,0.6) 50%, #000000 100%)',
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'clamp(1.5rem, 3vw, 2rem)', // Escala el espacio entre elementos
    color: '#ffffff',
    width: '100%',
    padding: '0 1.5rem', // Evita que los textos toquen los bordes del celular
    boxSizing: 'border-box',
  },
  logoContainer: {
    marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
  },
  subtitle: {
    fontSize: 'clamp(0.65rem, 2.5vw, 1rem)', // Se reduce en móviles
    fontWeight: '400',
    letterSpacing: 'clamp(3px, 1.5vw, 6px)', // Menos espaciado en móviles para que no se rompa la línea
    color: '#cccccc', 
    margin: 0,
  },
  timerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: 'clamp(0.5rem, 2.5vw, 1.5rem)', // Acerca los números en pantallas pequeñas
    marginTop: 'clamp(0.5rem, 2vw, 1rem)',
  },
  timeBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 'clamp(50px, 12vw, 80px)', // Mantiene el bloque estable para que no baile el texto
  },
  timeNumber: {
    fontSize: 'clamp(2.5rem, 10vw, 4rem)', // 2.5rem min en móvil, 4rem max en PC
    fontWeight: '800',
    lineHeight: '1',
    fontVariantNumeric: 'tabular-nums', 
  },
  timeLabel: {
    fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)',
    fontWeight: '700',
    letterSpacing: 'clamp(1.5px, 1vw, 3px)',
    color: '#999999', 
    marginTop: '0.75rem',
  },
  colon: {
    fontSize: 'clamp(2rem, 8vw, 3.5rem)', // Los dos puntos también se encogen
    fontWeight: '800',
    lineHeight: '1',
    color: '#ffffff',
    marginTop: '-5px',
  },
  footerText: {
    fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
    fontWeight: '600',
    letterSpacing: 'clamp(1.5px, 1vw, 3px)',
    color: '#ffffff',
    marginTop: 'clamp(1.5rem, 4vw, 2rem)',
    textTransform: 'uppercase',
  }
};