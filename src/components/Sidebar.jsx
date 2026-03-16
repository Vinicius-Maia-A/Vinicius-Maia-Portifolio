import { DATA } from "../data/data";

export default function Sidebar({ activeSection, onNav, uptime }) {
  const treeLinks = [
    { id: "s-hero", label: "~/home", prefix: "▶", child: false },
    { id: "s-skills", label: "./skills", prefix: "├", child: false },
    { id: "s-skills", label: "frontend", prefix: "│ ├", child: true },
    { id: "s-skills", label: "backend", prefix: "│ └", child: true },
    { id: "s-projects", label: "./projects", prefix: "├", child: false },
    { id: "s-experience", label: "./experience", prefix: "├", child: false },
    { id: "s-contact", label: "./contact", prefix: "└", child: false },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-block">
        <div className="sidebar-header">NAVIGATOR</div>
        {treeLinks.map((t, i) => (
          <div key={i} className={`tree-item${t.child ? " tree-child" : ""}${activeSection === t.id ? " active" : ""}`} onClick={() => onNav(t.id)}>
            <span className="prefix">{t.prefix}</span> {t.label}
          </div>
        ))}
      </div>

      <div className="sidebar-block">
        <div className="sidebar-header">PROFICIENCY</div>
        {DATA.proficiency.map((s) => (
          <div key={s.label} className="skill-bar-wrap">
            <div className="skill-label"><span>{s.label}</span><span>{s.pct}%</span></div>
            <div className="skill-bar"><div className="skill-fill" style={{ width: `${s.pct}%` }}></div></div>
          </div>
        ))}
      </div>

      <div className="sidebar-block">
        <div className="uptime-box">
          <div>&gt; STATUS</div>
          <div>uptime: <span className="val">{uptime}</span></div>
          <div>projetos: <span className="val">{DATA.projects.length}</span></div>
          <div>clientes: <span className="val">4</span></div>
          <div>exp: <span className="val">1+ anos</span></div>
        </div>
      </div>
    </div>
  );
}
