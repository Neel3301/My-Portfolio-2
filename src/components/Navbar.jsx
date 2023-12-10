"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const path = usePathname();
  console.log(path);
  return (
    <Link href={href} className={`${className} relative group text-lg`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          path === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const path = usePathname();
  console.log(path);
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      className={`${className} relative group text-lg text-light dark:text-dark my-2`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light dark:bg-dark  absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          path === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full z-10 lg:px-16 md:px-12 sm:px-8 px-32 py-8 lg:py-4 font-medium flex relative items-center justify-between dark:text-light min-w-[320px]">
      <button
        className="flex-col items-center justify-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-2.5" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center">
        <nav className="lg:hidden">
          <CustomLink href="/" title="Home" className="mr-6" />
          <CustomLink href="/about" title="About" className="mr-6" />
          <CustomLink href="/projects" title="Projects" className="mr-6" />
          <CustomLink href="/articles" title="Articles" className="mr-6" />
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[-50%] lg:relative lg:top-0">
          <Logo />
        </div>
        <nav className="flex justify-center items-center flex-wrap lg:hidden">
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 bg-light rounded-full"
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <DribbbleIcon />
          </motion.a>
          <button
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[300px] w-[70vw] z-50 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink toggle={handleClick} href="/" title="Home" />
            <CustomMobileLink
              toggle={handleClick}
              href="/about"
              title="About"
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/projects"
              title="Projects"
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/articles"
              title="Articles"
            />
          </nav>
          <nav className="flex justify-center items-center flex-wrap px-10 ">
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 mt-5"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark mt-5"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 mt-5"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full mt-5"
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 mt-5"
            >
              <DribbbleIcon />
            </motion.a>
            <button
              className={`ml-3 flex items-center justify-center rounded-full p-1 mt-5 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
              }}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;
