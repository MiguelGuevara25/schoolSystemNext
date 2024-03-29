"use client";
import useSchool from "@/hooks/useSchool";

export default function Page3eroSecundaria() {
  const { alumnos } = useSchool();

  return (
    <div>
      <p>Alumnos de 3ero Secundaria</p>
      {alumnos
        .filter(
          (alumno) =>
            alumno.nivel === "secundaria" && alumno.grado === "3grado_s"
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
