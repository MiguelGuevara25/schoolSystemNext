import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <section className="w-1/2 h-1/2 rounded-md flex bg-white">
        <div className="w-2/5 bg__login"></div>

        <div className="w-3/5 flex flex-col justify-center items-center gap-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              className="border rounded-sm p-2 pl-9"
              placeholder="Usuario"
            />
          </div>

          <div className="relative">
            <RiLockPasswordFill className="absolute left-3 top-1/2 transform -translate-y-1/2" />

            <input
              type="password"
              className="border rounded-sm p-2 pl-9"
              placeholder="Contraseña"
            />
          </div>

          <Link href="/dashboard">
            <button className="bg-[#FF8812] py-2 px-8 mt-3 text-white font-bold rounded-md">
              Iniciar Sesión
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
