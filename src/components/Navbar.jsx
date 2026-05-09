import { useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";
import { RiHome2Line } from "react-icons/ri";
import { Menu } from "lucide-react";
import { X } from 'lucide-react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="shadow-sm sticky top-0 z-50">
        <div className="navbar w-full lg:max-w-[1440px] md:flex justify-between items-center mx-auto px-4 bg-white">
          <div className="cursor-pointer text-xl font-bold flex items-center gap-2">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X></X> : <Menu />}
            </div>
            <div className="hidden sm:block">
              <span className=" text-[#1f2937]">Keen</span>
              <span className=" text-[#244d3f]">Keeper</span>
            </div>
            {open && (
              <div className="absolute top-10 left-10">
                <ul className="md:hidden  flex flex-col justify-center items-center gap-2 bg-[#244d3f] text-white p-5 rounded-lg">
                  <li className="btn btn-ghost  font-medium">
                    <RiHome2Line />
                    Home
                  </li>
                  <li className="btn btn-ghost  font-medium">
                    <CiClock2 />
                    Timeline
                  </li>
                  <li className="btn btn-ghost  font-medium">
                    <ImStatsDots />
                    Stats
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="">
            <ul className="hidden md:flex justify-center items-center gap-2">
              <li className="btn btn-ghost text-[#64748b] font-medium">
                <RiHome2Line />
                Home
              </li>
              <li className="btn btn-ghost text-[#64748b] font-medium">
                <CiClock2 />
                Timeline
              </li>
              <li className="btn btn-ghost text-[#64748b] font-medium">
                <ImStatsDots />
                Stats
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;  