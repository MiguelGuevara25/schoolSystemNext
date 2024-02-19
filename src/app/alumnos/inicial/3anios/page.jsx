"use client";
import useSchool from "@/hooks/useSchool";

export default function Page3Anios() {
  const { alumnos } = useSchool();

  return (
    <div>
      <p>Alumos de 3 años</p>

      {alumnos
        .filter(
          (alumno) => alumno.nivel === "inicial" && alumno.grado === "3anios"
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
