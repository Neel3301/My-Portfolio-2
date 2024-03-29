import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 dark:border-light border-solid border-dark font-medium text-lg dark:text-light sm:text-base min-w-[320px]">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Right Reserved.</span>
        <div className="flex items-center justify-center lg:py-2">
          Build With{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          <Link
            href="/"
            className="underline underline-offset-2">
            by Chotaliya Neel
          </Link>
        </div>
        <Link
          href="mailto:neel.c.3301@outlook.com"
          className="underline underline-offset-2">
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
