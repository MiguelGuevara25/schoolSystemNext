"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="bg-indigo-400 text-white text-lg uppercase">
      <ul className="flex flex-col h-screen">
        <li className="hover:bg-indigo-700">
          <Link href="/">Inicio</Link>
        </li>

        <li className="hover:bg-indigo-700 cursor-pointer">
          <Link href="/alumnos">Alumnos</Link>
        </li>

        <li className="hover:bg-indigo-700 cursor-pointer">
          <Link href="/matricula">Matricula</Link>
        </li>

        <li className="hover:bg-indigo-700 cursor-pointer">
          <Link href="/cursos">Cursos</Link>
        </li>

        <li className="hover:bg-indigo-700">
          <Link href="/notas">Notas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
