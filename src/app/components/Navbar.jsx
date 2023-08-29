import Link from "next/link";
import { FiPower } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="bg-neutral-300 flex justify-between items-center py-3 px-6">
      <span>
        Logo de <br /> Colegio
      </span>

      <Link href="/">
        <FiPower className="text-2xl" />
      </Link>
    </div>
  );
};

export default Navbar;
