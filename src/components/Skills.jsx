import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full dark:bg-light dark:text-dark bg-dark text-light font-semibold py-3 px-6 shadow-dark cursor-default absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5  md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light  xs:font-bold "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      // viewport={{once: true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-28 w-full text-center mb-16 sm:mt-12 sm:mb-8 md:text-6xl md:mt-20">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md::bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm  lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]">
        <motion.div
          className="flex items-center justify-center rounded-full dark:bg-light dark:text-dark bg-dark text-light font-semibold p-8 cursor-default shadow-dark  lg:py-2 lg:px-4 md:text-sm md:py-1.5  md:px-3 "
          whileHover={{ scale: 1.05 }}>
          Web
        </motion.div>
        <Skill
          name="CSS"
          x="-5vw"
          y="-10vw"
        />
        <Skill
          name="HTML"
          x="-20vw"
          y="2vw"
        />
        <Skill
          name="Java Script"
          x="25vw"
          y="6vw"
        />
        <Skill
          name="React.js"
          x="-12vw"
          y="-20vw"
        />
        <Skill
          name="Mongo DB"
          x="15vw"
          y="-19vw"
        />
        <Skill
          name="Next.js"
          x="22vw"
          y="20vw"
        />
        <Skill
          name="Firebase"
          x="-30vw"
          y="-13vw"
        />
        <Skill
          name="Flutter"
          x="-32vw"
          y="5vw"
        />
        <Skill
          name="Python"
          x="18vw"
          y="-10vw"
        />
        <Skill
          name="App Write"
          x="-15vw"
          y="8vw"
        />
        <Skill
          name="Java"
          x="-18vw"
          y="16vw"
        />
        <Skill
          name="PHP"
          x="12vw"
          y="12vw"
        />
      </div>
    </>
  );
};

export default Skills;
