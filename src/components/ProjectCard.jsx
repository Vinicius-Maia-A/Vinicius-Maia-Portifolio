export default function ProjectCard({ project, onClick }) {
  const widths = [70, 55, 85, 60, 45];
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-thumb">
        <div className="thumb-code">
          {widths.map((w, i) => (
            <div key={i} className="code-line" style={{ width: `${w}%` }}></div>
          ))}
        </div>
      </div>
      <div className="project-meta">
        <div className="project-status">
          <span className={`status-badge${project.status === "LIVE" ? " live" : ""}`}>
            {project.status === "LIVE" ? "● LIVE" : "○ WIP"}
          </span>
          {project.year}
        </div>
        <span className="project-name">{project.name}</span>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tags">
          {project.tags.slice(0, 4).map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </div>
  );
}
