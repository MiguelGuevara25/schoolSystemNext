import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Content from "./components/Content";
import Courses from "./courses/page";

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
