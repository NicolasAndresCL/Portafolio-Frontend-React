const SkillCard = ({ skill }) => {
  return (
    <div>
        <div className="bg-slate-950 rounded-lg shadow hover:shadow-lg transition duration-300 p-4 flex flex-col items-center">
            <h2>
                {skill.name}
            </h2>
            <div>
            <p>{skill.level}</p>
            </div>
            <div>
            <p>{skill.category}</p>
            </div>
        </div>
    </div>
  );
};

export default SkillCard;