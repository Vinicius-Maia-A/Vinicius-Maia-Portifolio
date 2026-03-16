import { DATA } from "../data/data";
import TermWindow from "./TermWindow";

export default function ExperienceSection() {
  return (
    <div id="s-experience">
      <TermWindow title="bash — ~/experience" promptCmd="cat" promptArg="./career/history.log">
        <div className="output-block">
          <div className="sec-label">// HISTÓRICO DE CARREIRA</div>
          <div className="exp-list">
            {DATA.experience.map((e) => (
              <div key={e.company} className="exp-entry">
                <div className="exp-time">
                  {e.period}
                  <span>{e.duration}</span>
                </div>
                <div>
                  <span className="exp-role">{e.role}</span>
                  <div className="exp-company">
                    🏢 {e.company}
                    <span className="exp-loc">· {e.location}</span>
                  </div>
                  <p className="exp-desc">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TermWindow>
    </div>
  );
}
