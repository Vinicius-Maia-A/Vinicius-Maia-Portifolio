import { DATA } from "../data/data";
import TermWindow from "./TermWindow";
import { SiGmail, SiGithub, SiWhatsapp } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";

export default function ContactSection() {
  const methods = [
    { icon: SiGmail, label: "E-MAIL", val: DATA.contact.email, href: `mailto:${DATA.contact.email}` },
    { icon: FiLinkedin, label: "LINKEDIN", val: DATA.contact.linkedin, href: `https://${DATA.contact.linkedin}` },
    { icon: SiGithub, label: "GITHUB", val: DATA.contact.github, href: `https://${DATA.contact.github}` },
    { icon: SiWhatsapp, label: "WHATSAPP", val: DATA.contact.whatsapp, href: DATA.contact.whatsappLink },
  ];
  return (
    <div id="s-contact">
      <TermWindow title="bash — ~/contact" promptCmd="open" promptArg="--channel" promptFlag="all">
        <div className="output-block">
          <div className="sec-label">// CANAISA DE CONTATO</div>
          <div className="contact-grid">
            {methods.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.label} className="contact-method" onClick={() => window.open(m.href, "_blank")}>
                  <div className="contact-icon"><Icon /></div>
                  <div className="contact-info">
                    <span className="contact-label">{m.label}</span>
                    <span className="contact-val">{m.val}</span>
                  </div>
                  <div className="contact-arrow">→</div>
                </div>
              );
            })}
          </div>

          <div className="avail-box">
            <div className="prompt-line" style={{ opacity: .6, fontSize: 12 }}>
              <span className="prompt-dollar">$</span>
              <span className="prompt-cmd">echo</span>
              <span style={{ color: "#88ff99", fontSize: "16px" }}>"Disponível para freelance e CLT · resposta em &lt; 24h"</span>
            </div>
            <div style={{ marginTop: 10, fontSize: "16px" }}>
              &gt; Aberto a oportunidades:&nbsp;<span className="yes">SIM</span>&nbsp;&nbsp;|&nbsp;&nbsp;
              Remoto:&nbsp;<span className="yes">SIM</span>&nbsp;&nbsp;|&nbsp;&nbsp;
              Híbrido:&nbsp;<span className="yes">SIM</span>
            </div>
          </div>
        </div>
      </TermWindow>
    </div>
  );
}
