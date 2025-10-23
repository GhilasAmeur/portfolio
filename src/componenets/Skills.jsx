
import { motion } from "framer-motion"

const Skills = () => {
  return (
    <motion.div
     initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} // <- visible animation
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount:0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
      
    
    
    >
        <h2>Mes <span className="">expériences</span></h2>Skills
        
        </motion.div>
  )
}

export default Skills