import React from "react";

export default function Certificado({ index, title, setModal }) {
  return (
    <div
      className="flex w-full justify-between items-center cursor-pointer border-t border-slate-800 pt-12 pr-24 pb-12 pl-24 hover:opacity-30 transition-all duration-75 ease-linear last-of-type:border-b"
      onMouseEnter={() => setModal({ active: true, index: index })}
      onMouseLeave={() => setModal({ active: false, index: index })}
    >
      <h2 className="m-0 font-medium text-4xl transition-all duration-75 ease-linear">
        {title}
      </h2>
      <p className="font-normal transition-all duration-75 ease-linear">
        NUCBA
      </p>
    </div>
  );
}