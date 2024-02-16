import Link from "next/link";

const Secundaria = () => {
  const gradosSecundaria = [
    { id: 1, grado: "1°", href: "/alumnos/secundaria/1ro-secundaria" },
    { id: 2, grado: "2°", href: "/alumnos/secundaria/2do-secundaria" },
    { id: 3, grado: "3°", href: "/alumnos/secundaria/3ero-secundaria" },
    { id: 4, grado: "4°", href: "/alumnos/secundaria/4to-secundaria" },
    { id: 5, grado: "5°", href: "/alumnos/secundaria/5to-secundaria" },
  ];

  return (
    <section>
      <div className="flex gap-5">
        {gradosSecundaria.map((grado) => {
          return (
            <Link key={grado.id} href={grado.href}>
              <div className="border border-black rounded-lg p-5 cursor-pointer">
                {grado.grado} Secundaria
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Secundaria;
