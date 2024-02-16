import React from "react";

export default function PageAlumnosInicial() {
  const gradosIniciales = [
    {
      id: 1,
      grado: "3 años",
    },
    {
      id: 2,
      grado: "4 años",
    },
    {
      id: 3,
      grado: "5 años",
    },
  ];

  return (
    <div>
      {gradosIniciales.map((grado) => {
        return (
          <div key={grado.id}>
            <h2>{grado.grado}</h2>
          </div>
        );
      })}
    </div>
  );
}
