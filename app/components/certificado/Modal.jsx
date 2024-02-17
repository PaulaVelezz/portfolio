import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "./modal.module.css";
import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnim = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({ modal, certificates }) {
  const { active, index } = modal;

  const container = useRef(null);

  useEffect(() => {
    const moveOnX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveOnY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveOnX(clientX);
      moveOnY(clientY);
    });
  }, []);

  return (
    <motion.div
      ref={container}
      variants={scaleAnim}
      initial={"initial"}
      animate={active ? "open" : "closed"}
      className={styles.modalContainer}
    >
      <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
        {certificates.map((certificate, index) => {
          const { color, src } = certificate;
          return (
            <div
              key={`modal_${index}`}
              style={{ backgroundColor: color }}
              className={styles.modal}
            >
              <Image
                src={`/images/${src}`}
                width={350}
                height={0}
                alt="certificate"
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}