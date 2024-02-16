import Link from "next/link";

const Primaria = () => {
  const gradosPrimaria = [
    { id: 1, grado: "1°", href: "/alumnos/primaria/1ro-primaria" },
    { id: 2, grado: "2°", href: "/alumnos/primaria/2do-primaria" },
    { id: 3, grado: "3°", href: "/alumnos/primaria/3ero-primaria" },
    { id: 4, grado: "4°", href: "/alumnos/primaria/4to-primaria" },
    { id: 5, grado: "5°", href: "/alumnos/primaria/5to-primaria" },
    { id: 6, grado: "6°", href: "/alumnos/primaria/6to-primaria" },
  ];

  return (
    <section>
      <div className="flex gap-5">
        {gradosPrimaria.map((grado) => {
          return (
            <Link key={grado.id} href={grado.href}>
              <div className="border border-black rounded-lg p-5 cursor-pointer">
                {grado.grado} Primaria
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Primaria;
