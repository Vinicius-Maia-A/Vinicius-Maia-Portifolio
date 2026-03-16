import { useState, useEffect } from "react";

export default function Boot({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 8;
        if (next >= 100) {
          clearInterval(iv);
          setTimeout(() => setVisible(false), 400);
          setTimeout(onDone, 900);
          return 100;
        }
        return next;
      });
    }, 80);
    return () => clearInterval(iv);
  }, []);

  if (!visible) return null;

  const lines = [
    { delay: "0.1s", content: <><span style={{ color: "var(--green)", fontFamily: "'VT323',monospace", fontSize: 20 }}>*** DEV.PORTFOLIO SYSTEM v2.4 ***</span></> },
    { delay: "0.3s", content: <>Inicializando módulos... <span className="ok">[ OK ]</span></> },
    { delay: "0.5s", content: <>Carregando React v18... <span className="ok">[ OK ]</span></> },
    { delay: "0.7s", content: <>Montando Node.js runtime... <span className="ok">[ OK ]</span></> },
    { delay: "0.9s", content: <>Conectando MongoDB... <span className="ok">[ OK ]</span></> },
    { delay: "1.1s", content: <>Carregando parsers HTML/CSS... <span className="ok">[ OK ]</span></> },
    { delay: "1.3s", content: <>Validando dados do portfólio... <span className="ok">[ OK ]</span></> },
    { delay: "1.5s", content: <>Iniciando servidor de exibição... <span className="ok">[ OK ]</span></> },
  ];

  return (
    <div id="boot" style={{ opacity: visible ? 1 : 0, transition: "opacity .5s" }}>
      {lines.map((l, i) => (
        <div key={i} className="boot-line" style={{ animationDelay: l.delay }}>{l.content}</div>
      ))}
      <div id="boot-bar-wrap" className="boot-line" style={{ animationDelay: "1.7s" }}>
        <div id="boot-bar-label">Carregando assets...</div>
        <div id="boot-bar"><div id="boot-bar-fill" style={{ width: `${progress}%` }}></div></div>
      </div>
    </div>
  );
}
