"use client";
import useSchool from "@/hooks/useSchool";

export default function Page3eroPrimaria() {
  const { alumnos } = useSchool();

  return (
    <div>
      <p>Alumnos de 3ero Primaria</p>
      {alumnos
        .filter(
          (alumno) => alumno.nivel === "primaria" && alumno.grado === "3grado_p"
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
