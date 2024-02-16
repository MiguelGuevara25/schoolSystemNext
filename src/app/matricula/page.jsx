"use client";
import { generarId } from "@/helpers/generarId";
import useSchool from "@/hooks/useSchool";

export default function PageMatricula() {
  const {
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
  } = useSchool();

  const optionNivel = (nivel) => {
    switch (nivel) {
      case "inicial":
        return (
          <div>
            <label htmlFor="grado">Grado:</label>
            <select id="grado" onChange={(e) => setGrado(e.target.value)}>
              <option hidden>Seleccione el nivel</option>
              <option value="3anios">3 años</option>
              <option value="4anios">4 años</option>
              <option value="5anios">5 años</option>
            </select>
          </div>
        );
      case "primaria":
        return (
          <div>
            <label htmlFor="grado">Grado:</label>
            <select id="grado" onChange={(e) => setGrado(e.target.value)}>
              <option hidden>Seleccione el nivel</option>
              <option value="1grado_p">1° Primaria</option>
              <option value="2grado_p">2° Primaria</option>
              <option value="3grado_p">3° Primaria</option>
              <option value="4grado_p">4° Primaria</option>
              <option value="5grado_p">5° Primaria</option>
              <option value="6grado_p">6° Primaria</option>
            </select>
          </div>
        );
      case "secundaria":
        return (
          <div>
            <label htmlFor="grado">Grado:</label>
            <select id="grado" onChange={(e) => setGrado(e.target.value)}>
              <option hidden>Seleccione el nivel</option>
              <option value="1grado_s">1° Secundaria</option>
              <option value="2grado_s">2° Secundaria</option>
              <option value="3grado_s">3° Secundaria</option>
              <option value="4grado_s">4° Secundaria</option>
              <option value="5grado_s">5° Secundaria</option>
            </select>
          </div>
        );
      default:
        return "Nivel no seleccionado";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setAlumnos([
      ...alumnos,
      {
        id: generarId(),
        dni,
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        sexo,
        fechaNacimiento,
        nivel,
        grado,
        direccion,
      },
    ]);
  };

  return (
    <div className="w-[95%] mx-auto">
      <h2>Matrícula de Alumno</h2>
      <form
        className="bg-indigo-400 p-10 [&>div>label]:text-white [&>div]:mb-5"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="dni">N° Documento:</label>
          <input
            type="number"
            id="dni"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="nombre">Nombres:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="apellidoPaterno">Apellido Paterno:</label>
          <input
            type="text"
            id="apellidoPaterno"
            value={apellidoPaterno}
            onChange={(e) => setApellidoPaterno(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="apellidoMaterno">Apellido Materno:</label>
          <input
            type="text"
            id="apellidoMaterno"
            value={apellidoMaterno}
            onChange={(e) => setApellidoMaterno(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="sexo">Sexo:</label>
          <select id="sexo" onChange={(e) => setSexo(e.target.value)}>
            <option hidden>Seleccione Sexo</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>

        <div>
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
          <input
            type="date"
            id="fechaNacimiento"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="nivel">Nivel:</label>
          <select id="nivel" onChange={(e) => setNivel(e.target.value)}>
            <option hidden>Seleccione el nivel</option>
            <option value="inicial">Inicial</option>
            <option value="primaria">Primaria</option>
            <option value="secundaria">Secundaria</option>
          </select>
        </div>

        {nivel && optionNivel(nivel)}

        <div>
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>

        <button
          className="text-indigo-500 bg-white px-5 py-2 rounded-lg font-bold"
          type="submit"
        >
          Matricular
        </button>
      </form>
    </div>
  );
}
