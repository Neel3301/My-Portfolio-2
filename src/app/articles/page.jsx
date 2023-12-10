"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import article1 from "../../../public/images/projects/p1.png";
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import TransitionEffect from "@/components/Transition/TransitionEffect";

const FramerImage = motion(Image);

const FeatureArticles = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 dark:bg-dark dark:border-light bg-light border border-solid border-dark rounded-2xl relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const ArticleComp = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between dark:bg-dark dark:border-light dark:text-light bg-light text-dark first:mt-0 border border-solid  border-dark border-r-4 border-b-4 sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageRef = useRef(null);

  function handleMouse(event) {
    imageRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imageRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href="/"
      target="_blank1"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline ">
        {title}
      </h2>
      <FramerImage
        ref={imageRef}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden"
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </Link>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Chotaliya Neel | Articles Page</title>
        <meta name="description" content="description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light min-w-[320px]">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="text-8xl text-center mb-16 md:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeatureArticles
              img={article1}
              title="Welcome to My Next.js Portfolio"
              time="9 min read"
              summary="Welcome to my portfolio website, powered by Next.js! This site is a showcase of my skills, projects, and the technologies I love working with. Crafted with precision and care, it embodies the seamless and efficient performance that Next.js offers."
              link="/"
            />
            <FeatureArticles
              img={article1}
              title="Welcome to My Next.js Portfolio"
              time="9 min read"
              summary="Welcome to my portfolio website, powered by Next.js! This site is a showcase of my skills, projects, and the technologies I love working with. Crafted with precision and care, it embodies the seamless and efficient performance that Next.js offers."
              link="/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 ">
            All Articles
          </h2>
          <ul>
            <ArticleComp
              img={article1}
              title="Welcome to My Next.js Portfolio"
              date="December 6"
              link="/"
            />
            <ArticleComp
              img={article1}
              title="Welcome to My Next.js Portfolio"
              date="December 6"
              link="/"
            />
            <ArticleComp
              img={article1}
              title="Welcome to My Next.js Portfolio"
              date="December 6"
              link="/"
            />
            <ArticleComp
              img={article1}
              title="Welcome to My Next.js Portfolio"
              date="December 6"
              link="/"
            />
            <ArticleComp
              img={article1}
              title="Welcome to My Next.js Portfolio"
              date="December 6"
              link="/"
            />
            <ArticleComp
              img={article1}
              title="Welcome to My Next.js Portfolio"
              date="December 6"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
