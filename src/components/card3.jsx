import { motion } from "framer-motion";
import dbsIcon from "../../public/dbs-icon.png"; // replace with your icon paths
import insuredIcon from "../../public/dbs-icon.png";
import cscsIcon from "../../public/cscs-icon.png";

const badges = [
  { icon: dbsIcon, title: "DBS-Checked Staff" },
  { icon: insuredIcon, title: "FULLY INSURED" },
  { icon: cscsIcon, title: "CSCS CARD" },
];

export default function Card3() {
  return (
    <div className="grid sm:grid-cols-1 sm:grid-cols-3 gap-2 p-6 place-items-center mt-8">
      {badges.map((badge, i) => (
        <motion.div
          key={badge.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-xl shadow-md flex flex-col items-center p-6 w-80 hover:shadow-lg transition-shadow"
        >
          <img src={badge.icon} alt={badge.title} className="w-14 mb-3" />
          <p className="text-lg font-semibold text-blue-900 text-center">{badge.title}</p>
        </motion.div>
      ))}
    </div>
  );
}
