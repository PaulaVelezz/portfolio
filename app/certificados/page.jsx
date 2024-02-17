"use client";
import Certificado from "../components/certificado/Certificado";
import Modal from "../components/certificado/Modal";
import { useState } from "react";

export default function Certificados() {
  const certificates = [
    {
      title: "Front-end Developer",
      src: "certificate1.webp",
      color: "#8db6f7",
    },
    {
      title: "Front-end Developer",
      src: "certificate2.webp",
      color: "#d0a4ff",
    },
    {
      title: "Front-end Developer",
      src: "certificate3.webp",
      color: "#8fa64c",
    },
    {
      title: "Front-end Developer",
      src: "certificate4.webp",
      color: "#EB984E",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[1000px]">
        {certificates.map((certificate, index) => {
          return (
            <Certificado
              key={index}
              index={index}
              title={certificate.title}
              setModal={setModal}
            />
          );
        })}
      </div>
      <Modal modal={modal} certificates={certificates} />
    </main>
  );
}