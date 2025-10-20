import { TypeAnimation } from "react-type-animation";
import imgTD from "../assets/td.jpg";

const Accueil = () => {
  return (
    <section
      id="apropos"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-gray-900 text-white scroll-mt-20"
    >
      {/* --- Partie gauche : texte --- */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold mb-4">
          <TypeAnimation
            sequence={[
              "Bonjour 😊",
              2000,
              "Bienvenue sur mon site ⌨",
              2000,
              "Explorez et amusez-vous !",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
        <h1></h1>
        <h3 className="text-2xl font-semibold">
          Je suis <span className="text-purple-400">Développeur web</span>
        </h3>

        <p className="text-gray-300 leading-relaxed">
          Développeur web passionné, j’aime créer des interfaces modernes et
          intuitives. J’utilise principalement{" "}
          <span className="text-purple-400">React</span> et{" "}
          <span className="text-purple-400">Tailwind CSS</span> pour concevoir
          des applications performantes et élégantes. Mon objectif est de
          proposer des solutions efficaces et adaptées à chaque besoin.
        </p>
        <a href="mecontacter">
          <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition duration-300">
            Me contacter
          </button>
        </a>
      </div>

      {/* --- Partie droite : image --- */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <img
            src={imgTD}
            alt=""
            className="rounded-full object-cover w-full h-full border-4 border-purple-500 shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Accueil;
