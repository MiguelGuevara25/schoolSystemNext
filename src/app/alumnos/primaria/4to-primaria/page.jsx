"use client";
import useSchool from "@/hooks/useSchool";

export default function Page4toPrimaria() {
  const { alumnos } = useSchool();

  return (
    <div>
      <p>Alumnos de 4to Primaria</p>
      {alumnos
        .filter(
          (alumno) => alumno.nivel === "primaria" && alumno.grado === "4grado_p"
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
