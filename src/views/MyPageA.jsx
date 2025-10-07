import React from "react";
import Logo from "../assets/imgpagea/Logo.png";
import Ellipse1 from "../assets/imgpagea/Ellipse1.png";
import Ellipse2 from "../assets/imgpagea/Ellipse2.png";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
export default function MyPageA() {
  return (
    <div>
      <div>
        <h1
          style={{ fontFamily: "Monomaniac One " }}
          className="w-full h-lvh flex flex-col bg- bg-black p-6  "
        >
          {/* ส่วนที่1 */}
          <div className="w-10/12 mx-auto flex relative mt-9 text-xl items-center">
            <div className="gap-13 flex">
              <a
                href="#"
                className="text-white hover:text-[#01D5A2] transition-colors duration-300"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="text-white hover:text-[#01D5A2] transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="text-white hover:text-[#01D5A2] transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* hello */}
            <div className="absolute left-1/2 transform -translate-x-1/2 ">
              <img src={Logo} alt="Logo" className="w-25 " />
            </div>
            {/* ไอคอน */}
            <div className="flex gap-6 text-3xl text-white absolute right-0">
              <FaGithub />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>

          {/* ส่วนที่2 */}
          <div className=" mx-auto text-center text-white mt-35 space-y-2 text-6xl">
            <p>Somrak Sudyodjing</p>
            <p className="text-[#01D5A2]">Freelance Web Developer</p>
            <p>Based In THAILAND</p>
          </div>

          {/* ส่วนที่3 */}
          <div className="relative w-full h-80 flex items-center justify-center mt-15">
            <img
              src={Ellipse2}
              alt="Ellipse2"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-84 h-84"
            />
            <img
              src={Ellipse1}
              alt="Ellipse1"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-76 h-76"
            />
          </div>
        </h1>
      </div>
    </div>
  );
}
