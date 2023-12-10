"use client";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import project1 from "../../../public/images/projects/p1.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/Transition/TransitionEffect";

const FramerImage = motion(Image);

const FeatureProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full p-12 flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark dark:bg-dark dark:border-light bg-light shadow-2xl dark:text-light relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%]  xs:w-[100%] xs:rounded-[1.5rem]" />
      <a
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </a>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary text-xl font-medium dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <a
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </a>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <a href={github} target="_blank" className="w-10">
            <GithubIcon />
          </a>
          <a
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light sm:px-4 sm:text-base p-2 text-lg px-6 font-semibold dark:bg-light dark:text-dark  "
          >
            Visit Project
          </a>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark  dark:border-light dark:text-light xs:p-4 ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <a
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </a>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary text-xl font-medium dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <a
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </a>
        <div className="mt-2 flex items-center ">
          <a href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </a>
          <a
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-1 text-lg px-8 font-semibold dark:bg-light dark:text-dark md:text-base "
          >
            Visit
          </a>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Chotaliya Neel | Projects Page</title>
        <meta name="description" content="description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center min-w-[320px]">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="text-8xl text-center mb-16 md:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 xl:gap-x-16  lg:gap-x-8 md:gap-y-24  sm:gap-x-0">
            <div className="col-span-12">
              <FeatureProjects
                title="Welcome to My Next.js Portfolio"
                type="Featured Project"
                summary="Welcome to my portfolio website, powered by Next.js! This site is a showcase of my skills, projects, and the technologies I love working with. Crafted with precision and care, it embodies the seamless and efficient performance that Next.js offers."
                img={project1}
                github="https://github.com/Neel3301/My_Portfolio"
                link="https://my-portfolio-swart-seven.vercel.app/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <Project
                title="Welcome to My Next.js Portfolio"
                type="Featured Project"
                img={project1}
                github="https://github.com/Neel3301/My_Portfolio"
                link="https://my-portfolio-swart-seven.vercel.app/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Welcome to My Next.js Portfolio"
                type="Featured Project"
                img={project1}
                github="https://github.com/Neel3301/My_Portfolio"
                link="https://my-portfolio-swart-seven.vercel.app/"
              />
            </div>
            <div className="col-span-12">
              <FeatureProjects
                title="Welcome to My Next.js Portfolio"
                type="Featured Project"
                summary="Welcome to my portfolio website, powered by Next.js! This site is a showcase of my skills, projects, and the technologies I love working with. Crafted with precision and care, it embodies the seamless and efficient performance that Next.js offers."
                img={project1}
                github="https://github.com/Neel3301/My_Portfolio"
                link="https://my-portfolio-swart-seven.vercel.app/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Welcome to My Next.js Portfolio"
                type="Featured Project"
                img={project1}
                github="https://github.com/Neel3301/My_Portfolio"
                link="https://my-portfolio-swart-seven.vercel.app/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Welcome to My Next.js Portfolio"
                type="Featured Project"
                img={project1}
                github="https://github.com/Neel3301/My_Portfolio"
                link="https://my-portfolio-swart-seven.vercel.app/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
