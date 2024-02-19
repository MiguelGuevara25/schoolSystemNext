import Link from "next/link";

const Inicial = () => {
  const gradosIniciales = [
    {
      id: 1,
      grado: "3 años",
      href: "/alumnos/inicial/3anios",
    },
    {
      id: 2,
      grado: "4 años",
      href: "/alumnos/inicial/4anios",
    },
    {
      id: 3,
      grado: "5 años",
      href: "/alumnos/inicial/5anios",
    },
  ];

  return (
    <section>
      <div className="flex gap-5">
        {gradosIniciales.map((grado) => {
          return (
            <Link key={grado.id} href={grado.href}>
              <div className="border border-black rounded-lg p-5 cursor-pointer">
                {grado.grado}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Inicial;
