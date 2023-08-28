import React from "react";
const Sidebar = () => {
  return (
    <aside className="min-h-screen bg-primary p-5 rounded-r-lg">
      <div className="flex gap-6 items-center">
        <div className="bg-black w-20 h-20 rounded-full"></div>

        <div>
          <p className="font-semibold text-white">
            Benito Camela <br /> Elver Galarga
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
