import Layout from "@/components/Layout/page";
import Image from "next/image";
import React from "react";
import profile from "../../public/profile.jpeg";
import riza from "../../public/profile.png";

export default function Home() {
  return (
    <section id="home" className="pt-36">
      {/* <Layout>
        <div className="mx-30">
          <Image src={profile} width={200} height={300} alt="Profile" />
        </div>
        <div className="mx-30">Welcome</div>
      </Layout> */}
      <div className="container p-[16px]">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="font-semibold text-emerald-500 md:text-xl">
              Halo Semua :D, saya{" "}
              <span className="block font-bold text-slate-900 text-4xl lg:text-5xl">
                Riza Pranata
              </span>
            </h1>
            <h2 className="text-slate-900 text-lg mb-5 lg:text-2xl">Frontend Developer</h2>
            <p className="font-medium text-slate-400 mb-10 leading-relaxed">
              Programming is fun raight! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Vero tenetur deserunt, mollitia veniam neque
              nulla est.
            </p>

            <a
              href="#"
              className="text-base font-semibold text-white bg-emerald-500 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-5 lg:mt-0 lg:right-0">
              <Image
                src={riza}
                alt={"rizaprofile"}
                className="max-wfull mx-auto"
              />
              <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-100">
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#14b8a6"
                    d="M46.4,-26.6C59.2,-4.7,67.8,19.7,59.4,30C51,40.4,25.5,36.6,2.9,34.9C-19.6,33.2,-39.2,33.6,-50.7,21.5C-62.1,9.4,-65.5,-15.2,-55.7,-35.4C-45.9,-55.5,-23,-71.2,-3.1,-69.4C16.8,-67.7,33.7,-48.4,46.4,-26.6Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
