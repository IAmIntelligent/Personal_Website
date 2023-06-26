import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsCodeSlash, BsFillCreditCard2FrontFill, BsImageAlt } from "react-icons/bs";
import { services } from "../data/data";

const AboutMe = () => {
  console.log(services);
  return (
    <section className="bg-gray-100 py-8 px-4 overflow-y-scroll overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* About header */}
        <div className="text-center flex justify-around relative">
          <h1 className="text-3xl font-bold text-[#00A3E1] ">About Me</h1>
          <div className="absolute bottom-0 w-20 h-1 bg-indigo-500 mx-auto mt-2 mb-6"></div>
          <CgProfile className="text-[1.875rem] text-[#00A3E1]" />
        </div>
        <hr className="h-1 w-full bg-slate-300" />

        <div className="flex flex-col md:flex-row justify-between items-center my-12">
      <div className="w-full md:w-1/2 md:mr-6 mb-8 md:mb-0">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Web Development</h2>
        <p className="text-gray-700 leading-relaxed">
          I am a professional web developer with expertise in frontend and
          backend technologies. I have a strong command over HTML, CSS, and
          JavaScript, along with frameworks like React and Node.js. I have
          experience building responsive and user-friendly web applications,
          incorporating modern design principles and best practices. My goal is
          to create efficient and scalable web solutions that meet the clients'
          requirements and provide an exceptional user experience.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Name: Ronaldo Fredrickson</li>
          <li>Date of Birth: November 28, 1989</li>
          <li>Address: San Francisco, CA 97987, USA</li>
          <li>Zip Code: 1000</li>
          <li>Email: ronaldo@gmail.com</li>
          <li>Phone: +1-2234-5678-9-0</li>
          <li>Projects Completed: 120</li>
        </ul>
      </div>
    </div>

        {/* Web development services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {(services)?.map((service) => (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center" key={service.title}>
              <i className="fas fa-code text-indigo-500 text-3xl mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {service.title}
                {service.icon}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
