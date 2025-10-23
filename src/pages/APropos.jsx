import { motion } from "framer-motion";
import imgTD from "../assets/td.jpg";
import { data } from "react-router-dom";
import {
  FaCode,
  FaLaptopCode,
  FaUserGraduate,
  FaBriefcase,
} from "react-icons/fa";

export const APropos = () => {
  const aboutInfo = [
    {
      icon: FaCode,
      title: "Développement web",
      description:
        "Passionné par le code, j’ai appris à créer des applications modernes avec React, JavaScript et PHP.",
    },
    {
      icon: FaUserGraduate,
      title: "Formation",
      description:
        "Licence en traitement de l’information et formation continue en développement web.",
    },
    {
      icon: FaBriefcase,
      title: "Expérience",
      description:
        "Création de projets personnels et freelance en React et Node.js.",
    },
    {
      icon: FaLaptopCode,
      title: "Objectif",
      description:
        "Devenir développeur web full-stack et construire des projets utiles et performants.",
    },
  ];
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
  {/* IMAGE */}
  <div className="md:w-1/2 rounded-2xl overflow-hidden">
    <motion.img
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="w-full h-full object-cover rounded-2xl"
      src={imgTD}
      alt="Moi"
    />
  </div>

  {/* TEXTE */}
  <div className="md:w-1/2 rounded-2xl p-8 bg-gray-900 text-white">
    <h3 className="text-2xl font-semibold mb-6">Mon parcours</h3>
    <p className="text-gray-300 mb-6 text-justify leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptates quo et dignissimos...
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {aboutInfo.map((data, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
        >
          <div className="text-purple-500 text-4xl mb-4">
            <data.icon />
          </div>
          <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
          <p className="text-gray-400 text-sm">{data.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

    </motion.div>
  );
};
