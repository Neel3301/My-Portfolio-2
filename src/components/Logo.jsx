"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex justify-center items-center mt-2">
      <MotionLink
        href="/"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
        className="w-16 h-16 bg-dark border border-solid border-transparent dark:border-light text-light flex justify-center items-center rounded-full text-2xl font-bold"
      >
        CN
      </MotionLink>
    </div>
  );
};

export default Logo;
