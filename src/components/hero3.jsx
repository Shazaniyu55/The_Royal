import React from "react";
import { motion } from "framer-motion";

// Reusable animation variant for fade + slide up
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// Card Component with Animation
const Card = ({ imgSrc, title, desc, delay = 0 }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay }}
      className="flex items-start gap-3 sm:gap-10 lg:w-[90%]"
    >
      <img
        src={imgSrc}
        width="60px"
        height="60px"
        alt={title}
        className="mx-auto"
      />
      <div className="flex-1">
        <h3 className="text-lg text-white font-semibold mb-2">{title}</h3>
        <p className="leading-loose tracking-tighter leading-normal text-white">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

// Main Hero3 Section
function Hero3() {
  return (
    <section className="bg-black mt-4 p-4">
      <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
        
        {/* LEFT CONTENT */}
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          
          {/* Main Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center lg:text-left">
              Royale Cleaners customer support 7 days/week
            </h2>
          </motion.div>

          {/* Sub Heading */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-2xl font-bold text-white text-center lg:text-left"
          >
            Always ready to help
          </motion.h2>

          {/* Cards with staggered animation */}
          <Card
            imgSrc="/assets/svg/phone.svg"
            title="VIA PHONE"
            desc="Get in contact with us via phone by calling +44-7349-791131 where are always available by 8 am - 6 pm (Monday - Sunday)"
            delay={0.3}
          />
          <Card
            imgSrc="/assets/svg/email.svg"
            title="VIA EMAIL"
            desc="Get in contact with us via email by sending a mail to info@royalecleaners.co.uk where are always available 24/7 (every day)"
            delay={0.5}
          />
          <Card
            imgSrc="/assets/svg/chat.svg"
            title="VIA CHAT"
            desc="You can also reach us by Chat on our website 8 am - 6 pm (Monday - Sunday)"
            delay={0.7}
          />
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full flex-1"
        >
          <img
            src="/assets/team/clean50.jpeg"
            width="300px"
            height="300px"
            alt="video banner"
            className="object-cover w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero3;
