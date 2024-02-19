"use client";
import useSchool from "@/hooks/useSchool";

export default function Page4Anios() {
  const { alumnos } = useSchool();

  return (
    <div>
      <p>Alumnos de 4 años</p>

      {alumnos
        .filter(
          (alumno) => alumno.nivel === "inicial" && alumno.grado === "4anios"
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
