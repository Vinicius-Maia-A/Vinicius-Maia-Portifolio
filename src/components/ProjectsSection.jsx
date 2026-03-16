import { useState } from "react";
import { DATA } from "../data/data";
import TermWindow from "./TermWindow";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);
  return (
    <div id="s-projects">
      <TermWindow title="bash — ~/projects" promptCmd="git" promptArg="log --oneline" promptFlag="--featured">
        <div className="output-block">
          <div className="sec-label">// PROJETOS EM DESTAQUE</div>
          <div className="projects-grid">
            {DATA.projects.map((p) => (
              <ProjectCard key={p.name} project={p} onClick={() => setSelected(p)} />
            ))}
          </div>
          <div style={{ fontSize: 14, color: "var(--green-mid)", marginTop: 14 }}>
            &gt; Clique em um projeto para ver os serviços detalhados
          </div>
        </div>
      </TermWindow>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
