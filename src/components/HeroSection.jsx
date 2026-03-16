import { DATA } from "../data/data";
import TermWindow from "./TermWindow";

export default function HeroSection({ onNav }) {
  return (
    <div id="s-hero">
      <TermWindow title="bash — ~/home — 120×40" promptCmd="whoami" promptFlag="--verbose">
        <div className="output-block">
          <div className="hero-name">VINICIUS MAIA<span className="cursor"></span></div>
          <div className="hero-role">
            FULLSTACK DEVELOPER // <span>REACT · NODE.JS · MONGODB · WIX · WORDPRESS</span>
          </div>
          <p className="hero-bio">{DATA.bio}</p>

          <div className="hero-btns">
            <button className="term-btn primary" onClick={() => onNav("s-projects")}>▶ ver_projetos()</button>
            <button className="term-btn" onClick={() => onNav("s-contact")}>⚡ contato --now</button>
            <button className="term-btn" onClick={() => onNav("s-skills")}>🔍 stack --list</button>
          </div>

          <div className="hero-stats">
            {DATA.stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <span className="stat-val">{s.val}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </TermWindow>
      <div className="scroll-hint">▼ scroll to explore ▼</div>
    </div>
  );
}
