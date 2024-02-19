"use client";
import Inicial from "../components/Inicial";
import Secundaria from "../components/Secundaria";
import Primaria from "../components/Primaria";

export default function PageAlumnos() {
  return (
    <div className="w-[95%] mx-auto">
      <h2>Alumnos</h2>
      <h3>Inicial</h3>
      <Inicial />

      <h3>Primaria</h3>
      <Primaria />

      <h3>Secundaria</h3>
      <Secundaria />
    </div>
  );
}
