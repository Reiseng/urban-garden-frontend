import '../styles/Global.css';
// @ts-ignore: ThemeContext is a JS module without type declarations
import { useTheme } from '../hooks/useTheme';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';

function LandingPage() {
    const navigate = useNavigate();
    const {theme,toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
        <header>
        <div className="nav">
            <div className="brand">
            <div className="brand-mark">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13H2a10 10 0 0 0 10 10 10 10 0 0 0 10-10h-2a7 7 0 0 1-7 7Z"/><path d="M11 3.05A9.001 9.001 0 0 0 2 12h2a7 7 0 0 1 7-6.95Z"/><path d="M17.5 6.5c-2 0-4 1-5.5 2.5"/></svg>
            </div>
            HuertaAPI
            </div>
            <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                <a href="#hero" onClick={() => setMenuOpen(false)}>
                    Inicio
                </a>

                <a href="#como-funciona" onClick={() => setMenuOpen(false)}>
                    Cómo funciona
                </a>

                <a href="#tecnologias" onClick={() => setMenuOpen(false)}>
                    Tecnologías
                </a>

                <a href="#contacto" onClick={() => setMenuOpen(false)}>
                    Contacto
                </a>
            </nav>
            <div className="nav-right">
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="btn btn-primary" onClick={() => navigate("/dashboard")}>Comenzar</button>
            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            </div>
        </div>
        </header>

        <section id="hero" className="hero">
        <div className="hero-grid">
            <div>
            <div className="eyebrow"><span className="badge-mark"><svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span> Plataforma IoT para agricultura</div>
            <h1>HuertaAPI: gestión inteligente de huertas mediante <span className="accent">IoT</span></h1>
            <p className="lead">Conectá dispositivos, recopilá datos de sensores en tiempo real y administrá tus parcelas y cultivos desde una única plataforma web pensada para producir con datos.</p>
            <div className="hero-actions">
                <button className="btn btn-primary btn-lg" onClick={() => navigate("/dashboard")}>Comenzar <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
                <button className="btn btn-ghost btn-lg" onClick={() => navigate("/dashboard")}>Ver cómo funciona</button>
            </div>
            <div className="trust-row">
                <div><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M20 6 9 17l-5-5"/></svg> API REST abierta</div>
                <div><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M20 6 9 17l-5-5"/></svg> Sensores MQTT</div>
                <div><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M20 6 9 17l-5-5"/></svg> Datos en tiempo real</div>
            </div>
            </div>
            <div className="hero-art">
            <div className="art-card">
                <div className="art-topbar">
                <div className="art-title">Invernadero — Panel en vivo</div>
                <div className="live-pill"><span className="dot"></span>En línea</div>
                </div>
                <div className="mini-stat-row">
                <div className="mini-stat"><div className="lbl">Temp.</div><div className="val blue">18.3°C</div></div>
                <div className="mini-stat"><div className="lbl">Humedad</div><div className="val blue">68%</div></div>
                <div className="mini-stat"><div className="lbl">Suelo</div><div className="val">42%</div></div>
                </div>
                <svg viewBox="0 0 420 220" width="100%" height="auto">
                <polygon points="40,140 130,90 220,140" fill="none" stroke="var(--border)" stroke-width="2"/>
                <rect x="40" y="140" width="180" height="60" fill="none" stroke="var(--border)" stroke-width="2"/>
                <line x1="70" y1="140" x2="70" y2="200" stroke="var(--border)" stroke-width="1.5"/>
                <line x1="100" y1="140" x2="100" y2="200" stroke="var(--border)" stroke-width="1.5"/>
                <line x1="130" y1="115" x2="130" y2="200" stroke="var(--border)" stroke-width="1.5"/>
                <line x1="160" y1="140" x2="160" y2="200" stroke="var(--border)" stroke-width="1.5"/>
                <line x1="190" y1="140" x2="190" y2="200" stroke="var(--border)" stroke-width="1.5"/>
                <circle cx="85" cy="185" r="9" fill="var(--green)" opacity=".85"/>
                <circle cx="145" cy="185" r="10" fill="var(--green)" opacity=".85"/>
                <circle cx="175" cy="185" r="8" fill="var(--green)" opacity=".85"/>
                <circle cx="130" cy="90" r="6" fill="var(--blue)"/>
                <circle cx="130" cy="90" r="10" fill="none" stroke="var(--blue)" stroke-width="1.5" opacity=".4"/>
                <path d="M130 90 q60 -40 130 -30" fill="none" stroke="var(--blue)" stroke-width="1.5" stroke-dasharray="3 4"/>
                <rect x="260" y="28" width="150" height="104" rx="11" fill="var(--surface-2)" stroke="var(--border)" stroke-width="2"/>
                <rect x="272" y="42" width="50" height="8" rx="3" fill="var(--border)"/>
                <rect x="272" y="60" width="60" height="34" rx="6" fill="none" stroke="var(--blue)" stroke-width="2"/>
                <polyline points="278,88 288,70 298,78 308,60 318,66 326,52" fill="none" stroke="var(--blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="340" y="60" width="58" height="34" rx="6" fill="none" stroke="var(--green)" stroke-width="2"/>
                <rect x="348" y="80" width="8" height="10" fill="var(--green)"/>
                <rect x="360" y="72" width="8" height="18" fill="var(--green)"/>
                <rect x="372" y="66" width="8" height="24" fill="var(--green)"/>
                <rect x="272" y="108" width="126" height="10" rx="4" fill="var(--border)"/>
                <path d="M136 88 C 220 40, 240 60, 258 72" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="2 5"/>
                <circle cx="380" cy="152" r="16" fill="none" stroke="var(--warning)" stroke-width="2"/>
                </svg>
            </div>
            </div>
        </div>
        </section>

        <section id="como-funciona" className="section">
        <div className="section-head">
            <div className="eyebrow"><span className="badge-mark"><svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span> Arquitectura</div>
            <h2>Cómo funciona</h2>
            <p>Desde el sensor hasta tu pantalla, cada dato recorre un camino claro y trazable.</p>
        </div>
        <div className="flow-wrap">
            <div className="flow-line"></div>
            <div className="flow">
            <div className="flow-step">
                <div className="flow-icon"><span className="step-num">1</span><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="9" width="16" height="10" rx="2"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg></div>
                <h4>Dispositivos</h4>
                <p>Placas ESP32 instaladas en la parcela</p>
            </div>
            <div className="flow-step">
                <div className="flow-icon"><span className="step-num">2</span><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg></div>
                <h4>Sensores</h4>
                <p>Miden temperatura, humedad y suelo</p>
            </div>
            <div className="flow-step">
                <div className="flow-icon"><span className="step-num">3</span><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17V7a2 2 0 0 1 2-2h9l5 5v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M8 12h8M8 16h5"/></svg></div>
                <h4>API</h4>
                <p>Recibe y valida los datos vía MQTT/REST</p>
            </div>
            <div className="flow-step">
                <div className="flow-icon"><span className="step-num">4</span><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg></div>
                <h4>Base de datos</h4>
                <p>Almacena históricos en PostgreSQL</p>
            </div>
            <div className="flow-step">
                <div className="flow-icon"><span className="step-num">5</span><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg></div>
                <h4>Dashboard</h4>
                <p>Visualizás y gestionás todo en vivo</p>
            </div>
            </div>
        </div>
        </section>

        <section id="tecnologias" className="section tech-bg">
        <div className="section-head">
            <div className="eyebrow"><span className="badge-mark"><svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span> Stack técnico</div>
            <h2>Tecnologías</h2>
            <p>Construido con herramientas modernas, probadas en producción.</p>
        </div>
        <div className="tech-groups">
            <div className="tech-group c-fe">
            <div className="accent-bar"></div>
            <div className="body">
                <div className="cat">Frontend</div>
                <div className="tech-item"><div className="chip">Re</div>React</div>
                <div className="tech-item"><div className="chip">TS</div>TypeScript</div>
            </div>
            </div>
            <div className="tech-group c-be">
            <div className="accent-bar"></div>
            <div className="body">
                <div className="cat">Backend</div>
                <div className="tech-item"><div className="chip">.N</div>ASP.NET Core</div>
                <div className="tech-item"><div className="chip">EF</div>Entity Framework</div>
            </div>
            </div>
            <div className="tech-group c-db">
            <div className="accent-bar"></div>
            <div className="body">
                <div className="cat">Base de datos</div>
                <div className="tech-item"><div className="chip">PG</div>PostgreSQL</div>
            </div>
            </div>
            <div className="tech-group c-iot">
            <div className="accent-bar"></div>
            <div className="body">
                <div className="cat">IoT</div>
                <div className="tech-item"><div className="chip">Mq</div>MQTT</div>
                <div className="tech-item"><div className="chip">32</div>ESP32</div>
            </div>
            </div>
            <div className="tech-group c-infra">
            <div className="accent-bar"></div>
            <div className="body">
                <div className="cat">Infraestructura</div>
                <div className="tech-item"><div className="chip">Dk</div>Docker</div>
            </div>
            </div>
        </div>
        </section>

        <section id="contacto" className="section">
        <div className="section-head">
            <div className="eyebrow"><span className="badge-mark"><svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span> Contacto</div>
            <h2>Hablemos</h2>
            <p>¿Preguntas sobre el proyecto? Estos son los canales directos.</p>
        </div>
        <div className="contact-grid">
            <div className="contact-card">
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></div>
            <h4>Email</h4>
            <p>tu-email@dominio.com</p>
            </div>
            <div className="contact-card">
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></div>
            <h4>GitHub</h4>
            <p>github.com/tu-usuario</p>
            </div>
            <div className="contact-card">
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div>
            <h4>LinkedIn</h4>
            <p>linkedin.com/in/tu-usuario</p>
            </div>
        </div>
        </section>

        <footer>© 2026 HuertaAPI — Gestión inteligente de huertas mediante IoT</footer>
    </>
    );
} export default LandingPage;