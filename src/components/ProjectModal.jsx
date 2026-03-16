import { useEffect } from "react";
import ImageCarousel from "./ImageCarousel";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-header">
          <div className="term-dots">
            <div className="term-dot"></div><div className="term-dot"></div><div className="term-dot"></div>
          </div>
          <span className="modal-title">{project.name}</span>
          <button className="modal-close" onClick={onClose}>✕ close</button>
        </div>
        <div className="modal-body">
          <div className="prompt-line" style={{ marginBottom: 16 }}>
            <span className="prompt-dollar">$</span>
            <span className="prompt-cmd">cat</span>
            <span className="prompt-arg">./projects/{project.name.toLowerCase().replace(/\s/g, "_")}.md</span>
          </div>

          <ImageCarousel images={project.images} />

          <p className="modal-desc">{project.desc}</p>

          <div className="modal-services-title">SERVIÇOS PRESTADOS</div>
          {project.services.map((svc, i) => (
            <div key={i} className="service-item">{svc}</div>
          ))}

          <div className="project-tags" style={{ marginTop: 16 }}>
            {project.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
