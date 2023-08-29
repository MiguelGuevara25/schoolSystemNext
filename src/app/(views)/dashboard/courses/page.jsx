import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Courses from "../components/Courses";

export default function CoursesPage() {
  return (
    <>
      <Navbar />

      <div className="flex">
        <div className="w-1/5">
          <Sidebar />
        </div>

        <div className="w-4/5">
          <Courses />
        </div>
      </div>
    </>
  );
}
