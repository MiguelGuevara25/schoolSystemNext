"use client";
import useSchool from "@/hooks/useSchool";

export default function Page1roPrimaria() {
  const { alumnos } = useSchool();

  return (
    <div>
      <p>Alumnos de 1ro Primaria</p>
      {alumnos
        .filter(
          (alumno) => alumno.nivel === "primaria" && alumno.grado === "1grado_p"
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
