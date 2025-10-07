import React from "react";

import img1 from "../assets/imghome/img1.png";
import img2 from "../assets/imghome/img2.png";
import webprofile02 from "../assets/imghome/webprofile02.png";
import webprofile03 from "../assets/imghome/webprofile03.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{ fontFamily: "Roboto Mono" }}
      className="w-full h-screen bg-[#91FFB2]"
    >
      {/* ส่วนบน */}
      <div className="w-10/12 mx-auto flex py-20 justify-between">
        {/* ส่วนที่1 */}
        <div className="flex flex-col">
          <div className="text-6xl font-bold text-[#333333]">
            <h1>My Web Desige by</h1>
            <h1>React + tailwindCSS</h1>
          </div>
          <div className="mt-7 ">
            <span className=" text-[#333333] text-lg">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit. <br />
              Cursusimperdiet sed id elementum. <br />
              Quam vel aliquam sit vulputate. <br />
            </span>
          </div>
          <div className="mt-10">
            <a
              href="#"
              className=" bg-[#333333] text-white rounded-4xl py-4 px-11 hover:bg-[#111111] transition duration-300"
            >
              Follow Me
            </a>
          </div>
          <div className="mt-32 flex space-x-4 h-46">
            <Link to="/MyPageA" className="h-full">
              <img
                src={img1}
                alt="img1"
                className="h-full w-auto object-contain"
              />
            </Link>

            <Link to="/MyPageB" className="h-full">
              <img
                src={webprofile02}
                alt="webprofile02"
                className="h-full w-auto object-contain"
              />
            </Link>
          </div>
        </div>

        {/* ส่วนที่2 */}
        <div className=" flex space-x-4 h-159">
          <Link to="/MyPageC" className="h-full">
            <img
              src={webprofile03}
              alt="webprofile03"
              className="w-auto h-full mr-2 "
            />
          </Link>
        </div>
        {/* ส่วนที่3 */}
        <div className=" flex space-x-4 h-159">
          <Link to="/MyPageD" className="h-full">
          <img src={img2} alt="img2" className="w-auto h-full " />
          </Link>
          
        </div>
      </div>

      {/* ส่วนล่าง */}
      <div
        style={{ fontFamily: "Roboto Mono" }}
        className="w-8/12 text-center text-xl py-2 mx-auto"
      >

        <p>(รูปและเนื้อหาทั้งหมดใช้เพื่อการศึกษาเท่านั้น)</p>
        <p>Created by NinniN SAU</p>
        <p>Copyright © 2025 WoW WoW WoW</p>
      </div>
    </div>
  );
}
