"use client";
import useSchool from "@/hooks/useSchool";

export default function Page4toSecundaria() {
  const { alumnos } = useSchool();

  return (
    <div>
      <p>Alumnos de 4to Secundaria</p>
      {alumnos
        .filter(
          (alumno) =>
            alumno.nivel === "secundaria" && alumno.grado === "4grado_s"
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
