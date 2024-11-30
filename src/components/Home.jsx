import { Button } from "./ui/button";
import { motion } from "motion/react";

const Home = () => {
  return (
    <section className="min-h-full mt-32 px-4 mb-8">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-between items-center relative h-auto lg:h-[50vh] space-y-6 lg:space-y-0">
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-semibold italic text-green-950 absolute top-5 left-0 lg:top-10 text-left lg:text-left"
        >
          digital marketing agency
        </motion.h3>
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[28px] text-left sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold leading-tight lg:leading-[62px]"
          >
            Choose Zinmiral for viral your Business!
          </motion.h1>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <img
            src="./images/consaltenten.png"
            width={600}
            height={600}
            alt="Consultant"
            className="hidden lg:block"
          />
        </motion.div>
      </div>
      <h2 className="text-left lg:text-center text-[18px] sm:text-[20px] md:text-[23px] leading-[30px] md:leading-[38px] font-normal mt-8">
        “We are Zinmiral! Experts who craft smarter strategies, bold enough to
        take your brand viral!”
      </h2>

      <div className="flex flex-col justify-center items-center mt-10 gap-6 px-4">
        <Button className="bg-[#FEFF00] h-12 hover:bg-[#ffff00cc] px-6 py-4 rounded-sm text-black text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] font-bold">
          Book a Strategy Call
        </Button>

        <h3 className="mt-5 text-center text-[16px] sm:text-[18px]">
          Our Performance Marketing Services are Certified by
        </h3>
        <div className="flex justify-center gap-4 mt-4">
          <img
            src="/images/partners.png"
            alt="Partners"
            className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
