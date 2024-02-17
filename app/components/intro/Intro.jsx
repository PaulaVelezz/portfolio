'use client'

import { useRef, useEffect } from "react";
import styles from "./intro.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const frase = "Hi there! 👋 I'm Paula, and I'm a frontend developer based in Argentina 🌎. I'm passionate about transforming ideas into visually captivating digital experiences 👀. And for that a calm mindset, a collaborative approach, and effective communication are key to my process. I enjoy working closely with clients, designers, and fellow developers to ensure that every project is a harmonious blend of creativity and functionality 🤜💫🤛. In my free time I am researching at the intersection between generative art and creative coding 🎨. And right now i'm looking for a job offer, open for collaborations long and short term.";


export default function Intro() {

  let refs = useRef([]);
  const container = useRef(null);
  const body = useRef(null);

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1
  });
};
  
  const splitPalabras = (frase) => {

    let body = [];

    frase.split(" ").forEach( (word, i) => {
      const letters = splitLetras(word);
      body.push(<p key={word + "_" + i}>{letters}</p>)
    });

    return body;
  };

  const splitLetras = (word) => {

    let letters = []

    word.split("").forEach( (letter, i) => {
      letters.push(<span key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>)
    });

    return letters;
  };


  return (
    <main ref={container} className={styles.main}>
      <div ref={body} className={styles.body}>
        {
          splitPalabras(frase)
        }
      </div>
    </main>
  );
}