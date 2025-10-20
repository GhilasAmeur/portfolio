import { motion } from "framer-motion";
import imgTD from "../assets/td.jpg";

export const APropos = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} // <- visible animation
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          À propos de <span className="text-purple-500">moi</span>
        </h2>
        <p className="text-gray-400 text-center max-2xl mx-auto mb-16">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          reprehenderit nesciunt, nihil aut libero culpa ducimus expedita alias,
          ea omnis fuga quos consequatur reiciendis quasi, labore optio
          architecto adipisci. Quae.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 rounded-2xl overflow-hidden">
          <motion.img 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // <- visible animation
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: false, amount:0.2 }}
          className="w-full h-full object-cover"
          src={imgTD} alt="" />
        </div>
      </div>
    </motion.div>
  );
};
