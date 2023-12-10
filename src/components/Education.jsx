import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcons from "./LiIcons";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32 sm:my-8">
      <h2 className="font-bold text-8xl  mb-16 md:text-6xl xs:text-4xl sm:mt-8 sm:mb-8  md:mt-20 w-full text-center">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%]  md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full dark:bg-light bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020 "
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence."
          />
          <Details
            type="Master Of Computer Science"
            time="2020-2022"
            place=" Stanford University"
            info="Completed a master's project on deep learning, developing a new neural network architecture for natural 
            language understanding."
          />
          <Details
            type="Online Coursework"
            time="2016-2020 "
            place="Coursera And EdX"
            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine 
            Learning Engineering."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
