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
      <div className="w-10/12 mx-auto flex py-20 justify-between items-end">
        {/* ===== ส่วนที่ 1: ข้อความและรูป 1,2 ===== */}
        <div className="flex flex-col justify-between h-full">
          {/* ข้อความ */}
          <div>
            <div className="text-6xl font-bold text-[#333333] ">
              <h1>My Web Design by</h1>
              <h1>React + TailwindCSS</h1>
            </div>
            <div className="mt-13">
              <span className="text-[#333333] text-2xl leading-10">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit. <br />
                Cursusimperdiet sed id elementum. <br />
                Quam vel aliquam sit vulputate. <br />
              </span>
            </div>
            <div className="mt-15">
              <a
                href="#"
                className="bg-[#333333] text-white text-2xl rounded-4xl py-4.5 px-13 hover:bg-[#111111] transition duration-300"
              >
                Follow Me
              </a>
            </div>
          </div>

          {/* รูป 1, 2 */}
          <div className="flex items-end space-x-6 mt-45">
            <Link to="/MyPageA" className="h-50">
              <img
                src={img1}
                alt="img1"
                className="h-full w-auto object-contain"
              />
            </Link>

            <Link to="/MyPageB" className="h-49">
              <img
                src={webprofile02}
                alt="webprofile02"
                className="h-full w-auto object-contain"
              />
            </Link>
          </div>
        </div>

        {/* รูป 3, 4 */}
        <div className="flex items-end space-x-12 ">
          <Link to="/MyPageC" className="h-200">
            <img
              src={webprofile03}
              alt="webprofile03"
              className="h-full w-auto object-contain"
            />
          </Link>

          <Link to="/MyPageD" className="h-200">
            <img
              src={img2}
              alt="img2"
              className="h-full w-auto object-contain"
            />
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
