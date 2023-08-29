import React from "react";

const Courses = () => {
  return (
    <div className="m-5">
      <h1 className="text-xl mb-5">Cursos Asignados</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="border border-black rounded-md">
          <div className="w-full bg-slate-500 h-60"></div>
          <h2 className="h-20 pl-5 pt-3">
            Fundamentos y Sistemas de Información
          </h2>
        </div>

        <div className="border border-black rounded-md">
          <div className="w-full bg-slate-500 h-60"></div>
          <h2 className="h-20 pl-5 pt-3">Diseños y Experimentos en SI</h2>
        </div>

        <div className="border border-black rounded-md">
          <div className="w-full bg-slate-500 h-60"></div>
          <h2 className="h-20 pl-5 pt-3">Finanzas e Ingeniería Económica</h2>
        </div>
      </div>
    </div>
  );
};

export default Courses;
