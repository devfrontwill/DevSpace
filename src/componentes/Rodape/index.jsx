import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import styles from "./Rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://www.linkedin.com/in/devfrontwill/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={24} color="#fff"/>
        </a>
        <a
          href="https://github.com/devfrontwill"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub size={24} color="#fff"/>
        </a>
        <a
          href="https://www.instagram.com/wiliam.rozza"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram size={24} color="#fff" />
        </a>
      </div>
      <p>Desenvolvido por DevFrontWiLL</p>
    </footer>
  );
}
