import React from "react";
import { motion } from "framer-motion";
import NavBar from "./navbar";
import Footer from "./footer";
import ScrollTop from "./scroll_top";

const TeamCard = ({ imgSrc, name = "Team Member", title = "Staff" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-yellow-50 transition duration-300"
    >
      <img
        src={imgSrc}
        alt="team member"
        className="w-36 h-36 object-cover rounded-full border-4 border-yellow-500 shadow-lg mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">{title}</p>
    </motion.div>
  );
};

const HomeTeam = () => {
  return (
    <>
    <NavBar/>
    <section className="container mx-auto px-5 md:px-16 lg:px-24 py-20 bg-gray-50">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
        Royale Cleaners Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <TeamCard
          imgSrc='/assets/team/team8.jpeg'
          name="Sarah Thompson"
          title="Operations Manager"
        />
        <TeamCard
          imgSrc='/assets/team/team9.jpeg'
          name="James Parker"
          title="Customer Service Lead"
        />
        <TeamCard
          imgSrc='/assets/team/team10.jpeg'
          name="Olivia Bennett"
          title="Cleaning Supervisor"
        />
      </div>
    </section>

    <ScrollTop/>

    <Footer/>
    </>
  );
};

export default HomeTeam;
