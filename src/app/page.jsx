import Layout from "@/components/Layout";
import Image from "next/image";
import landingPic from "../../public/images/profile/developer-pic-1.png";
import lightbulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/Transition/TransitionEffect";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <div className="flex items-center text-dark w-full h-auto dark:text-light relative min-w-[320px]">
        <Layout className="pt-0 md:p-16 sm:p-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={landingPic}
                alt="landingImg"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center md:p-2 md:px-4 md:text-base dark:text-dark dark:bg-light bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:text-dark hover:dark:text-light hover:bg-light hover:dark:bg-dark border-2 border-solid border-transparent hover:border-dark  hover:dark:border-light  transition ease duration-300"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:neel.c.3301@outlook.com"
                  target="_blank"
                  className="text-lg font-medium md:text-base capitalize dark:text-light text-dark underline underline-offset-4 ml-4"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightbulb} alt="lightbulb" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
}
