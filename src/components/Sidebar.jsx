import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-1/5 min-h-screen bg-zinc-300 p-5 rounded-r-lg">
      <div>
        <div className="flex gap-10 items-center">
          <div className="text-white bg-black w-20 h-20 rounded-full"></div>

          <div>
            <p className="font-semibold">
              Benito Camela <br /> Elver Galarga
            </p>
            <p className="font-bold text-zinc-400">Profesor</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
