"use client";
import useSchool from "@/hooks/useSchool";

export default function Page2doSecundaria() {
  const { alumnos } = useSchool();

  return (
    <div>
      <p>Alumnos de 2do Secundaria</p>
      {alumnos
        .filter(
          (alumno) =>
            alumno.nivel === "secundaria" && alumno.grado === "2grado_s"
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
