"use client";
import useSchool from "@/hooks/useSchool";

export default function Page2doPrimaria() {
  const { alumnos } = useSchool();

  return (
    <div>
      <p>Alumnos de 2do Primaria</p>
      {alumnos
        .filter(
          (alumno) => alumno.nivel === "primaria" && alumno.grado === "2grado_p"
        )
        .map((alumno) => (
          <div key={alumno.id}>
            <p>
              {alumno.nombre} {alumno.apellidoPaterno} {alumno.apellidoMaterno}
            </p>
          </div>
        ))}
    </div>
  );
}
