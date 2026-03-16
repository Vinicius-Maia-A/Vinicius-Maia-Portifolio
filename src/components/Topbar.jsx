export default function Topbar({ activeSection, onNav, clock }) {
  const navItems = [
    { id: "s-hero", label: "home" },
    { id: "s-skills", label: "skills" },
    { id: "s-projects", label: "projects" },
    { id: "s-experience", label: "experience" },
    { id: "s-contact", label: "contact" },
  ];
  return (
    <div className="topbar">
      <div className="topbar-brand">
        <span>~/</span>dev.portfolio<span>$</span>
        <span className="cursor"></span>
      </div>
      <div className="topbar-nav">
        {navItems.map((n) => (
          <button key={n.id} className={`nav-cmd${activeSection === n.id ? " active" : ""}`} onClick={() => onNav(n.id)}>
            {n.label}
          </button>
        ))}
      </div>
      <div className="topbar-right">
        <span><span className="status-dot"></span>ONLINE</span>
        <span>{clock}</span>
      </div>
    </div>
  );
}
