// SkillCard.js
const iconMap = {
  JavaScript: "https://img.icons8.com/color/48/javascript.png",
  Python: "https://img.icons8.com/color/48/python.png",
  Django: "https://img.icons8.com/color/48/django.png",
  MySQL: "https://img.icons8.com/color/48/mysql-logo.png",
  React: "https://img.icons8.com/color/48/react-native.png",
  FastAPI: "https://img.icons8.com/fluency/48/api.png",
  Git: "https://img.icons8.com/color/48/git.png",
  SQLAlchemy: "https://img.icons8.com/ios-filled/50/database.png",
  Docker: "https://img.icons8.com/color/48/docker.png",
  Cmder: "https://img.icons8.com/color/48/command-line.png",
  GitHub: "https://img.icons8.com/color/48/github.png",
  Postman: "https://img.icons8.com/color/48/postman.png",
  "Visual Studio Code": "https://img.icons8.com/color/48/visual-studio-code-2019.png",
  DjangoRestFramework: "https://img.icons8.com/color/48/django.png",
  Flask: "https://img.icons8.com/color/48/flask.png",
  Fastapi: "https://img.icons8.com/color/48/fastapi.png",
  Copilot: "https://img.icons8.com/color/48/copilot.png",
  CSS: "https://img.icons8.com/color/48/css3.png",
  HTML: "https://img.icons8.com/color/48/html-5.png",
  TailwindCSS: "https://img.icons8.com/color/48/tailwindcss.png",
  Bootstrap: "https://img.icons8.com/color/48/bootstrap.png",
  // 🔁 Agrega más tecnologías según las uses
};

const SkillCard = ({ skill }) => {
  const fallbackIcon = iconMap[skill.name] || "https://img.icons8.com/color/48/source-code.png";

  return (
    <div>
      <div className="bg-cyan-800 hover:bg-teal-700 rounded-xl shadow-xl hover:shadow-2xl border border-slate-700 transition duration-300 p-4 flex flex-col items-center">
        
        {/* Logo desde backend si existe, sino ícono predeterminado */}
        <img
          src={skill.logo ? skill.logo : fallbackIcon}
          alt={`${skill.name} icon`}
          className="w-10 h-10 mb-2"
        />

        {/* Info de la Skill */}
        <h2 className="text-white font-semibold text-lg">{skill.name}</h2>
        <p className="text-slate-200 mt-2">{skill.level}</p>
        <p className="text-slate-300 mt-1">{skill.category}</p>
      </div>
    </div>
  );
};

export default SkillCard;