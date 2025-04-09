// import Layout from "@/components/Layout/page";
import Image from "next/image";
import React from "react";
import riza from "../../public/profile.png";
import cimb from "../../public/cimb.png";
import alfa from "../../public/alfagift.webp";
import arjuna from "../../public/arjuna.png";
import djp from "../../public/djp.png";
import eduku from "../../public/eduku.png";
import port1 from "../../public/port-1.png";
import port2 from "../../public/port-2.png";
import Link from "next/link";
import Navbar from "@/components/Navbar/page";

export default function Home() {
  return (
    <>
      {/* <Layout>
        <div className="mx-30">Welcome</div>
      </Layout> */}
      {/* Header start */}
      {/* <header>
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link
                href="#home"
                className="font-bold text-lg text-primary block py-6"
              >
                rizapranata
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button
                id="humburger"
                name="humburger"
                type="button"
                className="block absolute right-4"
              >
                <span className="humburger-line"></span>
                <span className="humburger-line"></span>
                <span className="humburger-line"></span>
              </button>
            </div>
          </div>
        </div>
      </header> */}
      <Navbar />
      {/* Hero section start */}
      <section id="home" className="pt-24">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="font-semibold text-primary md:text-xl">
                Halo Semua :D, saya{" "}
                <span className="block font-bold text-slate-900 text-4xl lg:text-5xl">
                  Riza Pranata
                </span>
              </h1>
              <h2 className="text-slate-900 text-lg mb-5 lg:text-2xl">
                Frontend Developer
              </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">
                Programming is fun raight! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Vero tenetur deserunt, mollitia
                veniam neque nulla est.
              </p>

              <a
                href="#contact"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
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
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
      {/* Hero section end */}

      {/* About section start */}
      <section id="about" className="pt-20 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">
                About Me
              </h4>
              <p className="font-medium text-base text-justify text-secondary max-w-xl lg:text-lg">
                I am a programmer with 4 years of experience in web and mobile
                application development. Passionate and detail-oriented Frontend
                Developer with expertise in building dynamic, responsive, and
                user-friendly web and mobile applications. Skilled in React.js,
                Next.js, React Native, TypeScript, and modern UI frameworks like
                Tailwind CSS and Ant Design.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-bold text-l text-secondary text-xl lg:pt-10">
                Lets Be Friends
              </h3>
              <p className="font-medium text-base text-justify text-secondary mb-6 max-w-xl lg:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia asperiores maxime temporibus assumenda repellat id
                quidem architecto voluptatibus totam animi neque cum eos nulla
                tempore, commodi dolor sunt facere ab.
              </p>
              <div className="flex items-center">
                {/* instagram */}
                <Link
                  href={""}
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    className="fill-current"
                  >
                    <title>Instagram</title>
                    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                  </svg>
                </Link>
                {/* Facebook */}
                <Link
                  href={""}
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                    width={20}
                  >
                    <title>Facebook</title>
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                  </svg>
                </Link>
                {/* Gmail */}
                <Link
                  href={""}
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                    width={20}
                  >
                    <title>Gmail</title>
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-xl pt-7 mt-4 mx-auto text-center border-t border-slate-400">
            <h1 className="font-bold text-secondary text-xl">Skills</h1>
            <div className="flex flex-wrap justify-center pt-10 space-x-6">
              {/* React */}
              <div className="pt-5">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-primary"
                  width={40}
                >
                  <title>React</title>
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                </svg>
              </div>
              {/* Redux */}
              <div className="pt-5">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                  width={40}
                >
                  <title>Redux</title>
                  <path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z" />
                </svg>
              </div>
              {/* Tailwindcss */}
              <div className="pt-5">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-primary"
                  width={40}
                >
                  <title>Tailwind CSS</title>
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                </svg>
              </div>
              {/* Flutter */}
              <div className="pt-5">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-blue-400"
                  width={40}
                >
                  <title>Flutter</title>
                  <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
                </svg>
              </div>
              {/* Nodejs */}
              <div className="pt-5">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-primary"
                  width={40}
                >
                  <title>Node.js</title>
                  <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
                </svg>
              </div>
              {/* Express */}
              <div className="pt-5">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-primary"
                  width={40}
                >
                  <title>Express</title>
                  <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                </svg>
              </div>
              {/* Prisma ORM */}
              <div className="pt-5">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-dark"
                  width={40}
                >
                  <title>Prisma</title>
                  <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z" />
                </svg>
              </div>
              {/* Mongodb */}
              <div className="pt-5">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-primary"
                  width={40}
                >
                  <title>MongoDB</title>
                  <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About me end */}

      {/* Portfolio section start */}
      <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Portfolio
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4">New Project</h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi sed facere dolorem et repellat ducimus eos cum atque
                consectetur unde?
              </p>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <Image src={port1} alt={"port-1"} className="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Landing Page Riza
              </h3>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi sed facere dolorem et repellat ducimus eos cum atque
                consectetur unde?
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <Image src={port2} alt={"port-1"} className="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Open AI
              </h3>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi sed facere dolorem et repellat ducimus eos cum atque
                consectetur unde?
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <Image src={port2} alt={"port-1"} className="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Open AI
              </h3>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi sed facere dolorem et repellat ducimus eos cum atque
                consectetur unde?
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <Image src={port1} alt={"port-1"} className="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Landing Page Riza
              </h3>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi sed facere dolorem et repellat ducimus eos cum atque
                consectetur unde?
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio section end */}
      {/* Clients section start */}
      <section id="client" className="pt-36 pb-32 bg-slate-700">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Clients</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl">
              Who has worker together
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              sed facere dolorem et repellat ducimus eos cum atque consectetur
              unde?
            </p>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <Link
                href={""}
                className="py-4 mx-4 max-w-[130px] grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8"
              >
                <Image src={cimb} alt="cimb"></Image>
              </Link>
              <Link
                href={""}
                className="py-4 mx-4 max-w-[120px] grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8"
              >
                <Image src={arjuna} alt="cimb"></Image>
              </Link>
              <Link
                href={""}
                className="py-4 mx-4 max-w-[120px] grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8"
              >
                <Image src={alfa} alt="cimb"></Image>
              </Link>
              <Link
                href={""}
                className="py-4 mx-4 max-w-[90px] grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8"
              >
                <Image src={djp} alt="cimb"></Image>
              </Link>
              <Link
                href={""}
                className="py-4 mx-4 max-w-[120px] grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8"
              >
                <Image src={eduku} alt="cimb"></Image>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Clients section end */}
      {/* Contact section start */}
      <section id="contact" className="pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Contact
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl">
                Contact Us
              </h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, id?
              </p>
            </div>
          </div>
          <form action="">
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="name"
                  className="text-base font-bold text-primary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="message"
                  className="text-base font-bold text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                ></textarea>
              </div>
              <div className="w-full px-4">
                <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Contact section end */}
      {/* Footer section start */}
      <footer id="footer" className="pt-24 pb-12 bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-300 md:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-5">
                Riza Pranata
              </h2>
              <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
              <p className="">rizajuga@gmail.com</p>
              <p className="">Jakarta - Indonesia</p>
            </div>
            <div className="w-full px-4 mb-12 text-slate-300 md:w-1/3">
              <h2 className="font-bold text-xl text-white mb-5">Kategory</h2>
              <ul className="text-slate-300">
                <li>
                  <Link
                    href={""}
                    className="inline-block text-base text-pretty mb-3"
                  >
                    Programming
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="inline-block text-base text-pretty mb-3"
                  >
                    -
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="inline-block text-base text-pretty mb-3"
                  >
                    -
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 text-slate-300 md:w-1/3">
              <h2 className="font-bold text-xl text-white mb-5">Tautan</h2>
              <ul className="text-slate-300">
                <li>
                  <Link
                    href="#home"
                    className="inline-block text-base text-pretty mb-3"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="inline-block text-base text-pretty mb-3"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="inline-block text-base text-pretty mb-3"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
              {/* instagram */}
              <Link
                href={""}
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  className="fill-current"
                >
                  <title>Instagram</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                </svg>
              </Link>
              {/* Facebook */}
              <Link
                href={""}
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                  width={20}
                >
                  <title>Facebook</title>
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
              </Link>
              {/* Gmail */}
              <Link
                href={""}
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                  width={20}
                >
                  <title>Gmail</title>
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </Link>
            </div>
            <p className="font-medium text-sm text-slate-500 text-center">Created by Riza Pranata using NextJS & Tailwind CSS 3</p>
          </div>
        </div>
      </footer>
      {/* Footer section end */}
    </>
  );
}
