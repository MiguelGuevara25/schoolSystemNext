"use client";
import useSchool from "@/hooks/useSchool";

export default function Page6toPrimaria() {
  const { alumnos } = useSchool();

  return (
    <div>
      <p>Alumnos de 6to Primaria</p>
      {alumnos
        .filter(
          (alumno) => alumno.nivel === "primaria" && alumno.grado === "6grado_p"
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
