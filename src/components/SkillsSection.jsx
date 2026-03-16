import { DATA } from "../data/data";
import TermWindow from "./TermWindow";

export default function SkillsSection() {
  return (
    <div id="s-skills">
      <TermWindow title="bash — ~/skills" promptCmd="ls" promptArg="./skills/" promptFlag="-la --sorted">
        <div className="output-block">
          <div className="sec-label">// STACK TECNOLÓGICO</div>
          <div className="skills-grid">
            {DATA.skills.map((s) => (
              <div key={s.name} className="skill-card">
                <span className="skill-icon">{s.icon}</span>
                <span className="skill-name">{s.name}</span>
                <span className="skill-ver">{s.ver}</span>
              </div>
            ))}
          </div>
        </div>
      </TermWindow>
    </div>
  );
}
