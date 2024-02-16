const Inicial = () => {
  const gradosIniciales = [
    {
      id: 1,
      grado: "3 años",
    },
    {
      id: 2,
      grado: "4 años",
    },
    {
      id: 3,
      grado: "5 años",
    },
  ];

  return (
    <section>
      <div className="flex gap-5">
        {gradosIniciales.map((grado) => {
          return (
            <div className="border border-black rounded-lg p-5 cursor-pointer" key={grado.id}>
              {grado.grado}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Inicial;
