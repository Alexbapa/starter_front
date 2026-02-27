"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import bgStarter from "../images/banner/proximamente.png";
import logoStarter from "../images/logo/Logo_redondo_alta.png";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const targetDate = new Date("2026-03-06T23:59:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  return (
    <main style={styles.container}>
      {/* Background con zoom cinematic */}
      <motion.div
        style={styles.bgImageContainer}
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 20, ease: "easeOut" }}
      >
        <Image
          src={bgStarter}
          alt="Starter Streetwear Background"
          fill
          priority
          style={{
            objectFit: "cover",
            filter: "brightness(0.45) contrast(1.1)",
          }}
        />
      </motion.div>

      {/* Overlay más profundo */}
      <div style={styles.overlay}></div>

      {/* Grain texture */}
      <div style={styles.noise}></div>

      <motion.div
        style={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={styles.logoContainer}
        >
         <motion.div
  style={{
     width: "clamp(140px, 40vw, 230px)",
  height: "clamp(140px, 40vw, 230px)",
  borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",        
  }}
  animate={{
    boxShadow: [
      "0 0 0px rgba(255,255,255,0)",
      "0 0 60px rgba(255,255,255,0.18)",
      "0 0 0px rgba(255,255,255,0)",
    ],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
>
            <Image
              src={logoStarter}
              alt="Starter Logo"
              width={220}
              height={155}
              priority
              style={{
                objectFit: "contain",
                mixBlendMode: "screen",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={styles.subtitle}
        >
          STREETWEAR COLLECTION // DROP 01
        </motion.p>

        {/* Línea animada */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1, delay: 0.6 }}
          style={styles.divider}
        />

        {/* Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={styles.timerContainer}
        >
          {renderBlock(timeLeft.days, "DÍAS")}
          <span style={styles.colon}>:</span>
          {renderBlock(
            timeLeft.hours.toString().padStart(2, "0"),
            "HRS"
          )}
          <span style={styles.colon}>:</span>
          {renderBlock(
            timeLeft.minutes.toString().padStart(2, "0"),
            "MIN"
          )}
          <span style={styles.colon}>:</span>
          {renderBlock(
            timeLeft.seconds.toString().padStart(2, "0"),
            "SEG"
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={styles.footerText}
        >
          LA CALLE NOS ESPERA. PREPÁRATE.
        </motion.p>
      </motion.div>
    </main>
  );
}

function renderBlock(value, label) {
  return (
    <div style={styles.timeBlock}>
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={styles.timeNumber}
        >
          {value}
        </motion.span>
      </AnimatePresence>
      <span style={styles.timeLabel}>{label}</span>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "var(--font-din), sans-serif",
    overflow: "hidden",
  },
  bgImageContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.75) 60%, #000 100%)",
    zIndex: 1,
  },
  noise: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage:
      "url('https://grainy-gradients.vercel.app/noise.svg')",
    opacity: 0.04,
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    color: "#fff",
    padding: "0 1.5rem",
    width: "100%",
maxWidth: "1200px",
  },
  logoContainer: {},
  subtitle: {
    fontSize: "clamp(0.7rem, 2vw, 1rem)",
    letterSpacing: "5px",
    color: "#ccc",
  },
  divider: {
    height: "1px",
    backgroundColor: "#ffffff",
    opacity: 0.3,
  },
 timerContainer: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "clamp(0.5rem, 3vw, 1.5rem)",
  marginTop: "1rem",
  padding: "clamp(1rem, 4vw, 1.5rem)",
  backdropFilter: "blur(10px)",
  background: "rgba(255,255,255,0.05)",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.1)",
  flexWrap: "nowrap",
  maxWidth: "95vw",
},
 timeBlock: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minWidth: "clamp(55px, 16vw, 80px)",
},
 timeNumber: {
  fontSize: "clamp(2rem, 8vw, 4rem)",
  fontWeight: "800",
  lineHeight: 1,
  textShadow: "0 0 20px rgba(255,255,255,0.15)",
},
  timeLabel: {
    fontSize: "0.7rem",
    letterSpacing: "2px",
    color: "#aaa",
    marginTop: "0.5rem",
  },
 colon: {
  fontSize: "clamp(1.8rem, 7vw, 3rem)",
  fontWeight: "800",
  opacity: 0.5,
},
  footerText: {
    fontSize: "0.8rem",
    letterSpacing: "3px",
    marginTop: "2rem",
  },
};