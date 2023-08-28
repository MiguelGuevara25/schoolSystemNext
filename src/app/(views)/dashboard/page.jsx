import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";
import Content from "./components/Content";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="flex">
        <div className="w-1/5">
          <Sidebar />
        </div>

        <div className="w-4/5">
          <Content />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
