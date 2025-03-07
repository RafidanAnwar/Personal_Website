import "../style/Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiFlutter, SiSqlite, SiTailwindcss, SiDjango, SiMysql } from "react-icons/si";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 className="icon" style={{ color: "#E34F26" }} /> },
  { name: "CSS", icon: <FaCss3Alt className="icon" style={{ color: "#1572B6" }} /> },
  { name: "JavaScript", icon: <FaJs className="icon" style={{ color: "#F7DF1E" }} /> },
  { name: "React", icon: <FaReact className="icon" style={{ color: "#61DAFB" }} /> },
  { name: "Node.js", icon: <FaNodeJs className="icon" style={{ color: "#68A063" }} /> },
  { name: "Flutter", icon: <SiFlutter className="icon" style={{ color: "#02569B" }} /> },
  { name: "SQLite", icon: <SiSqlite className="icon" style={{ color: "#003B57" }} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="icon" style={{ color: "#38B2AC" }} /> },
  { name: "Python", icon: <FaPython className="icon" style={{ color: "#3776AB" }} /> },
  { name: "Django", icon: <SiDjango className="icon" style={{ color: "#092E20" }} /> },
  { name: "MySQL", icon: <SiMysql className="icon" style={{ color: "#4479A1" }} /> },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="fade-in">My Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card zoom-in" key={index}>
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
