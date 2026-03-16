import { useState, useEffect, useRef } from "react";
import Boot from "./components/Boot";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  const [booted, setBooted] = useState(false);
  const [clock, setClock] = useState("--:--:--");
  const [uptime, setUptime] = useState("00:00:00");
  const [activeSection, setActiveSection] = useState("s-hero");
  const mainRef = useRef(null);
  const uptimeRef = useRef(0);

  // Clock
  useEffect(() => {
    const iv = setInterval(() => {
      setClock(new Date().toTimeString().slice(0, 8));
    }, 1000);
    return () => clearInterval(iv);
  }, []);

  // Uptime counter
  useEffect(() => {
    const iv = setInterval(() => {
      uptimeRef.current++;
      const s = uptimeRef.current;
      const h = String(Math.floor(s / 3600)).padStart(2, "0");
      const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
      const sec = String(s % 60).padStart(2, "0");
      setUptime(`${h}:${m}:${sec}`);
    }, 1000);
    return () => clearInterval(iv);
  }, []);

  // Scroll spy
  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    const sections = ["s-hero", "s-skills", "s-projects", "s-experience", "s-contact"];
    const handler = () => {
      let curr = "s-hero";
      for (const id of sections) {
        const sec = document.getElementById(id);
        if (sec && sec.offsetTop - el.scrollTop <= 120) curr = id;
      }
      setActiveSection(curr);
    };
    el.addEventListener("scroll", handler);
    return () => el.removeEventListener("scroll", handler);
  }, [booted]);

  const scrollSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
  };

  return (
    <>
      {!booted && <Boot onDone={() => setBooted(true)} />}
      <Topbar activeSection={activeSection} onNav={scrollSection} clock={clock} />
      <div className="shell">
        <Sidebar activeSection={activeSection} onNav={scrollSection} uptime={uptime} />
        <div className="main" ref={mainRef}>
          <HeroSection onNav={scrollSection} />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </div>
      <div className="term-footer">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="status-dot"></span>
          <span>VINICIUS MAIA · FULLSTACK DEV · v2.4.1</span>
        </div>
        <div className="footer-right">
          <span className="footer-dim">LICENSED</span>
          <span>made with ❤ + Qwen</span>
          <span className="footer-dim">uptime: <span style={{ color: "var(--green)" }}>{uptime}</span></span>
        </div>
      </div>
    </>
  );
}
