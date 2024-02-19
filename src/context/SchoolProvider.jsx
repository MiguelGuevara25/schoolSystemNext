"use client";
import { createContext, useEffect, useState } from "react";

const SchoolContext = createContext();

const SchoolProvider = ({ children }) => {
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [sexo, setSexo] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [nivel, setNivel] = useState("");
  const [grado, setGrado] = useState("");
  const [direccion, setDireccion] = useState("");
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const item = localStorage.getItem("AlumnosMatriculados");
    const alumnos = JSON.parse(item);
    if (alumnos) {
      setAlumnos(alumnos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("AlumnosMatriculados", JSON.stringify(alumnos));
  }, [alumnos]);

  return (
    <SchoolContext.Provider
      value={{
        alumnos,
        setAlumnos,
        nombre,
        setNombre,
        apellidoPaterno,
        setApellidoPaterno,
        apellidoMaterno,
        setApellidoMaterno,
        sexo,
        setSexo,
        fechaNacimiento,
        setFechaNacimiento,
        nivel,
        setNivel,
        grado,
        setGrado,
        direccion,
        setDireccion,
        dni,
        setDni,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export { SchoolProvider };
export default SchoolContext;
