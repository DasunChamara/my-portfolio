import React, { useState } from 'react';

// Built-in Zero-Crash SVG Icons
const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);
  
  // State for Lanka Food City Case Study Modal
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("flow");
  const [selectedVideo, setSelectedVideo] = useState("video1");

  // Official YouTube Video IDs
  const youtubeVideoIds = {
    video1: "gfRhqbWTmlA",
    video2: "RaCLdxZIqLg",
    video3: "DloURattHK0"
  };

  // Academic References (Lecturers)
  const references = [
    {
      name: "Mr. Asanka Pathirana",
      role: "Senior Lecturer (Grade I)",
      dept: "Department of Software Technology, UoVT",
      email: "pathirana@uovt.ac.lk",
      phone: "+94 71 641 6416"
    },
    {
      name: "Mr. P. Uruthiran",
      role: "Head, Department of Software Technology",
      dept: "Faculty of Information Technology, UoVT",
      email: "uruthiran@uovt.ac.lk",
      phone: "+94 11 263 0700"
    }
  ];

  // Competitions
  const competitions = [
    {
      title: "MoraXtreme 10.0: Algorithmic Coding Competition",
      organizer: "IEEE Student Branch & IEEE Computer Society, University of Moratuwa",
      team: "Team Code Hunters",
      date: "Oct 2025",
      desc: "Participated in MoraXtreme 10.0, an intensive algorithmic coding competition focused on solving complex data structures and algorithmic challenges under tight time constraints.",
      certFile: "/certificates/moraxtreme-cert.pdf",
      certType: "pdf"
    },
    {
      title: "IEEEXtreme 19.0 Programming Competition",
      organizer: "IEEE Global",
      team: "Participant",
      date: "Oct 2025",
      desc: "Competed globally in the prestigious 24-hour virtual competitive programming benchmark against thousands of international university engineering teams.",
      certFile: "/certificates/ieeextreme-cert.pdf",
      certType: "pdf"
    }
  ];

  // Certifications & Badges
  const certifications = [
    { name: "AWS Academy – Cloud Developing", date: "Nov 2026", issuer: "AWS Academy", file: "/certificates/aws-dev.png", type: "png", kind: "Digital Badge" },
    { name: "AWS Academy – Cloud Architecting", date: "Sep 2026", issuer: "AWS Academy", file: "/certificates/aws-arch.png", type: "png", kind: "Digital Badge" },
    { name: "AWS Academy – Cloud Foundations", date: "Aug 2026", issuer: "AWS Academy", file: "/certificates/aws-foundations.png", type: "png", kind: "Digital Badge" },
    { name: "Cisco – Python Essentials 1", date: "Aug 2026", issuer: "Cisco Networking Academy", file: "/certificates/python-badge.png", type: "png", kind: "Digital Badge" },
    { name: "Cisco – Python Essentials 1", date: "Aug 2026", issuer: "Cisco Networking Academy", file: "/certificates/python-cert.pdf", type: "pdf", kind: "Course Certificate" },
    { name: "Workshop on PLC Systems Programming", date: "Apr 2025", issuer: "Engineering Dept", file: "/certificates/plc-cert.pdf", type: "pdf", kind: "Training Certificate" },
    { name: "Azure 101 – Unlocking Power of Cloud", date: "2025", issuer: "Microsoft Azure Community", file: "/certificates/azure-101.pdf", type: "pdf", kind: "Certificate" }
  ];

  // Work Experience
  const experiences = [
    {
      role: "Information Technology Intern",
      company: "Sri Lanka Telecom (SLT)",
      date: "Jan 2025 – Mar 2025",
      location: "Ratmalana, Sri Lanka",
      desc: "Assisted with routine enterprise IT operations, hardware and software diagnostics, incident troubleshooting, and gained operational exposure to telecommunications networks and corporate IT support."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0e0e11] text-white font-sans selection:bg-orange-500 selection:text-white">

      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0e0e11]/90 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex flex-col">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Dasun Chamara
            </span>
            <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase">D. D. C. Jayalath</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">Home</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#competitions" className="hover:text-white transition-colors">Competitions</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#references" className="hover:text-white transition-colors">References</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#141418] border-b border-white/10 px-6 py-5 space-y-4 text-sm">
            <a onClick={() => setMobileMenuOpen(false)} href="#about" className="block text-zinc-300 hover:text-white">Home</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#projects" className="block text-zinc-300 hover:text-white">Projects</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#competitions" className="block text-zinc-300 hover:text-white">Competitions</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#experience" className="block text-zinc-300 hover:text-white">Experience</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#education" className="block text-zinc-300 hover:text-white">Education</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#references" className="block text-zinc-300 hover:text-white">References</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#certifications" className="block text-zinc-300 hover:text-white">Certifications</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="block text-orange-400 font-semibold">Contact</a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section id="about" className="pt-16 pb-20 md:pt-24 md:pb-28 px-6 max-w-4xl mx-auto text-center">
        <div className="relative w-36 h-36 md:w-40 md:h-40 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 blur-xl opacity-40 animate-pulse"></div>
          <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-purple-500 to-pink-500 overflow-hidden shadow-2xl">
            <img 
              src="/profile.jpg" 
              alt="Dasun Chamara"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }} 
              className="w-full h-full rounded-full object-cover"
            />
            <div className="hidden w-full h-full rounded-full bg-zinc-900 items-center justify-center text-3xl font-bold text-zinc-300">
              DC
            </div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15]">
          Software Technology Undergraduate & <br />
          Full-Stack Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-400">building solid systems!</span>
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          Software Technology undergraduate at the{" "}
          <a href="https://uovt.ac.lk/en" target="_blank" rel="noreferrer" className="text-zinc-200 font-semibold underline decoration-zinc-600 hover:decoration-emerald-400 hover:text-emerald-400 transition-colors">
            University of Vocational Technology (UoVT) ↗
          </a>{" "}
          with IT internship experience at <strong className="text-zinc-200">Sri Lanka Telecom</strong>. Specializing in high-performance Java Spring Boot & Next.js web applications with concurrency controls.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-lg shadow-white/10"
          >
            Get In Touch
          </a>
          <a 
            href="/Dasun_Chamara_CV.pdf" 
            download 
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-white text-white font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <span>↓</span> Download CV
          </a>
        </div>

        {/* Tech Stack & Languages */}
        <div className="pt-4 space-y-4">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-zinc-500 mb-4">
              EXPERIENCE WITH
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-2xl mx-auto">
              {["Java 21", "Spring Boot 3", "React.js", "Next.js 15", "PostgreSQL", "MySQL", "PHP", "Tailwind CSS", "AWS", "Git CLI"].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3.5 py-1.5 rounded-xl bg-[#18181c] border border-white/5 text-xs font-medium text-zinc-300 hover:border-zinc-600 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-zinc-400">
            <span className="px-3 py-1 rounded-full bg-[#141418] border border-white/5">
              🗣️ Sinhala: <strong className="text-zinc-200">Native</strong>
            </span>
            <span className="px-3 py-1 rounded-full bg-[#141418] border border-white/5">
              🌐 English: <strong className="text-zinc-200">Intermediate</strong>
            </span>
            <span className="px-3 py-1 rounded-full bg-[#141418] border border-white/5">
              ⚡ Leadership &amp; Planning
            </span>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-lg md:text-xl font-black tracking-widest text-[#f85c2c] uppercase">
            PROJECTS
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">Differentiating Architecture: Modern Full-Stack vs Traditional Full-Stack</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1: Lanka Food City Online */}
          <div className="group bg-[#16161a] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all flex flex-col justify-between">
            <div className="p-6 bg-gradient-to-b from-orange-500/20 via-red-500/10 to-transparent border-b border-white/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border border-orange-500/40 text-orange-400">
                  MODERN FULL-STACK
                </span>
                <span className="text-xs font-mono text-zinc-500">Java 21 + Next.js 15</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                Lanka Food City Online
              </h3>
              <p className="text-xs text-zinc-400 mt-1">Enterprise E-commerce Platform</p>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-5">
                  Decoupled Next.js 15 & Spring Boot 3 system. Implemented JPA pessimistic locking to prevent concurrent inventory overselling, location-based automated delivery fees, and COD penalty tracking.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["Java 21", "Spring Boot 3", "Next.js 15", "PostgreSQL", "Pessimistic Locking", "Spring Security"].map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-[#202026] text-zinc-400 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button 
                  onClick={() => setCaseStudyOpen(true)}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:opacity-90 shadow-lg shadow-orange-500/20 transition-all"
                >
                  ⚡ Explore Architecture &amp; Case Study ↗
                </button>
                <a 
                  href="https://github.com/DasunChamara/ecommerce-project" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                >
                  Source Code ↗
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: Assignment Portal (With EXACT Repo Link) */}
          <div className="group bg-[#16161a] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all flex flex-col justify-between">
            <div className="p-6 bg-gradient-to-b from-blue-500/20 via-indigo-500/10 to-transparent border-b border-white/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border border-blue-500/40 text-blue-400">
                  TRADITIONAL FULL-STACK
                </span>
                <span className="text-xs font-mono text-zinc-500">PHP + MySQL</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                Assignment Management Portal
              </h3>
              <p className="text-xs text-zinc-400 mt-1">Role-Based Academic System</p>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-5">
                  Built complete role-based dashboards for lecturers and students in PHP & MySQL. Features multi-file submissions, automated deadline tracking, grading feedback loops, and dynamic student profile management.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "REST"].map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-[#202026] text-zinc-400 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <a 
                  href="https://assignment-system.freedev.app" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs font-bold tracking-wider text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  LIVE DEMO &amp; SYSTEM ↗
                </a>
                <a 
                  href="https://github.com/DasunChamara/my-first-project" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs font-semibold text-zinc-400 hover:text-white"
                >
                  Source Code (GitHub) ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CASE STUDY DEEP-DIVE MODAL */}
      {caseStudyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#141418] border border-zinc-700 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-zinc-100">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 bg-[#101014] flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-black bg-orange-500/20 text-orange-400 border border-orange-500/30 uppercase">
                    Full-Stack Case Study
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30">
                    Decoupled REST API
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Pessimistic Locking
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Lanka Food City Online — System &amp; Architecture Deep-Dive
                </h2>
                <p className="text-xs text-zinc-400 mt-1 font-mono">
                  Next.js 15 · Spring Boot 3 · PostgreSQL · Spring Security
                </p>
              </div>

              <button
                onClick={() => setCaseStudyOpen(false)}
                className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 px-6 pt-3 border-b border-white/10 bg-[#0e0e11] text-xs font-bold">
              <button
                onClick={() => setActiveTab("flow")}
                className={`pb-3 px-3 transition border-b-2 ${activeTab === "flow" ? "border-orange-500 text-orange-400" : "border-transparent text-zinc-400 hover:text-zinc-200"}`}
              >
                👁️ Visual Flows (Customer &amp; Admin)
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`pb-3 px-3 transition border-b-2 ${activeTab === "architecture" ? "border-orange-500 text-orange-400" : "border-transparent text-zinc-400 hover:text-zinc-200"}`}
              >
                ⚡ Architecture &amp; Concurrency Logic
              </button>
              <button
                onClick={() => setActiveTab("video")}
                className={`pb-3 px-3 transition border-b-2 ${activeTab === "video" ? "border-orange-500 text-orange-400" : "border-transparent text-zinc-400 hover:text-zinc-200"}`}
              >
                🎥 Walkthrough Videos (3 Parts)
              </button>
            </div>

            {/* Tab Contents */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
              
              {/* TAB 1: VISUAL FLOWS */}
              {activeTab === "flow" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-3">
                      1. Customer Purchasing Flow (End-to-End)
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      <div className="p-4 rounded-xl bg-[#1c1c22] border border-white/5 space-y-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/20 text-orange-400">STEP 01</span>
                        <h4 className="text-xs font-bold text-white">Dynamic Catalogue</h4>
                        <p className="text-[11px] text-zinc-400">Ceylon Cinnamon & daily groceries with weight variants (100g to 5kg).</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#1c1c22] border border-white/5 space-y-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/20 text-orange-400">STEP 02</span>
                        <h4 className="text-xs font-bold text-white">Custom Bundle Builder</h4>
                        <p className="text-[11px] text-zinc-400">Custom family packages with real-time weight and courier fee calculation.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#1c1c22] border border-white/5 space-y-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/20 text-orange-400">STEP 03</span>
                        <h4 className="text-xs font-bold text-white">Geofenced Checkout</h4>
                        <p className="text-[11px] text-zinc-400">GPS Lat/Long coordinates validation within Colombo boundary & PickMe fee estimation.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#1c1c22] border border-white/5 space-y-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/20 text-orange-400">STEP 04</span>
                        <h4 className="text-xs font-bold text-white">Urgent Confirmation</h4>
                        <p className="text-[11px] text-zinc-400">COD modal prompt: Normal allows 48h cancel; Urgent initiates immediate dispatch receipt.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3">
                      2. Admin Governance &amp; Fraud Prevention
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-3">
                      <div className="p-4 rounded-xl bg-[#1c1c22] border border-white/5 space-y-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-400">ADMIN DISPATCH</span>
                        <h4 className="text-xs font-bold text-white">Priority Dispatch Queue</h4>
                        <p className="text-[11px] text-zinc-400">Urgent orders routed to dedicated view with real-time timer for PickMe handover.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#1c1c22] border border-white/5 space-y-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-400">INVENTORY CRUD</span>
                        <h4 className="text-xs font-bold text-white">Variants &amp; Uploads</h4>
                        <p className="text-[11px] text-zinc-400">Local image upload with preview and cascading stock management.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#1c1c22] border border-white/5 space-y-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400">FRAUD MITIGATION</span>
                        <h4 className="text-xs font-bold text-white">6-Strike Auto-Blacklist</h4>
                        <p className="text-[11px] text-zinc-400">Admin logs COD delivery rejections. At 6 strikes, account auto-locks with override.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ARCHITECTURE & CONCURRENCY */}
              {activeTab === "architecture" && (
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-[#1c1c22] border border-white/5 space-y-3">
                    <h4 className="text-sm font-bold text-orange-400">
                      ⚡ Concurrency Control: JPA Pessimistic Locking (`PESSIMISTIC_WRITE`)
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      In high-traffic checkout environments, two customers purchasing the last stock concurrently cause race conditions. We enforce row-level database locks using PostgreSQL:
                    </p>
                    <div className="p-4 rounded-xl bg-[#0c0c0e] font-mono text-[11px] text-orange-300 space-y-1 border border-white/5 overflow-x-auto">
                      <p>1. Client initiates OrderRequest ➔ Transaction starts (@Transactional)</p>
                      <p>2. SELECT * FROM products WHERE id = :id FOR UPDATE (Pessimistic Row Lock Acquired)</p>
                      <p>3. Stock Check: IF (current_stock &gt;= requested_qty) ➔ PROCEED ELSE ➔ ROLLBACK</p>
                      <p>4. Atomic Deduction: UPDATE products SET stock = stock - qty</p>
                      <p>5. Transaction Commits ➔ Row Lock Released</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#1c1c22] border border-white/5 space-y-1">
                      <h4 className="text-xs font-bold text-blue-400">Decoupled REST Protocol</h4>
                      <p className="text-[11px] text-zinc-300">
                        Next.js 15 client state is completely decoupled from Spring Boot 3 backend. Strict DTO mapping with centralized GlobalExceptionHandler.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#1c1c22] border border-white/5 space-y-1">
                      <h4 className="text-xs font-bold text-emerald-400">Geofence &amp; Security</h4>
                      <p className="text-[11px] text-zinc-300">
                        Passwords hashed via BCrypt. Geographic validation checks client lat/long within Colombo boundary (Lat 6.80°-6.99° N, Lng 79.80°-80.00° E).
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: 3-PART YOUTUBE WALKTHROUGH */}
              {activeTab === "video" && (
                <div className="space-y-6">
                  
                  {/* Video Selector Buttons */}
                  <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0c0c0e] rounded-2xl border border-white/5">
                    <button
                      onClick={() => setSelectedVideo("video1")}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                        selectedVideo === "video1" 
                          ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" 
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <span>🛒 Video 1: Customer Flow</span>
                    </button>
                    <button
                      onClick={() => setSelectedVideo("video2")}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                        selectedVideo === "video2" 
                          ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-black" 
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <span>🛡️ Video 2: Admin Operations</span>
                    </button>
                    <button
                      onClick={() => setSelectedVideo("video3")}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                        selectedVideo === "video3" 
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <span>⚡ Video 3: Rapid Checkout &amp; Profile</span>
                    </button>
                  </div>

                  {/* VIDEO 1 */}
                  {selectedVideo === "video1" && (
                    <div className="space-y-4">
                      <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${youtubeVideoIds.video1}`}
                          title="Part 1: Customer Flow"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>

                      <div className="p-4 rounded-xl bg-[#1c1c22] border border-white/5 space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-orange-400">
                          <span>Part 1: Customer Flow, Geofencing &amp; Package Customizer</span>
                          <span className="font-mono text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">Duration: 05:00 Min</span>
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Highlights: Registration with GPS Coordinates ➔ Ceylon Cinnamon Variants (100g-500g) ➔ Custom Package Trolley (8.5kg - 13.5kg) ➔ Geofenced PickMe Delivery calculation ➔ COD Double-Confirmation.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* VIDEO 2 */}
                  {selectedVideo === "video2" && (
                    <div className="space-y-4">
                      <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${youtubeVideoIds.video2}`}
                          title="Part 2: Admin Operations"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>

                      <div className="p-4 rounded-xl bg-[#1c1c22] border border-white/5 space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                          <span>Part 2: Admin Operations, Urgent Queue &amp; Inventory Governance</span>
                          <span className="font-mono text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">Duration: 04:32 Min</span>
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Highlights: Priority Urgent Queue ➔ Real-time Dispatch (Order #9) ➔ Global Lifecycle Filters ➔ COD Strike Rejections (+1) &amp; Blacklist Override ➔ Adding "kollu seeds" with variants &amp; Storefront verification.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* VIDEO 3 */}
                  {selectedVideo === "video3" && (
                    <div className="space-y-4">
                      <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${youtubeVideoIds.video3}`}
                          title="Part 3: Rapid Checkout & Profile"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>

                      <div className="p-4 rounded-xl bg-[#1c1c22] border border-white/5 space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-blue-400">
                          <span>Part 3: Rapid Checkout Protocol, Package Customizer &amp; Profile</span>
                          <span className="font-mono text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">Duration: 02:00 Min</span>
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Highlights: Dynamic Package Builder ➔ Urgent vs Normal Checkout Verification ➔ Customer Profile &amp; Order History ➔ Direct Admin Hotline Modal ➔ Selective Cart &amp; GPS validation.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* GitHub Repo Button */}
                  <div className="text-center pt-2">
                    <a
                      href="https://github.com/DasunChamara/ecommerce-project"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition shadow-lg shadow-orange-500/20"
                    >
                      <GithubIcon />
                      <span>Explore Complete Source Code on GitHub ↗</span>
                    </a>
                  </div>

                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-4 px-6 border-t border-white/10 bg-[#101014] flex items-center justify-between text-xs text-zinc-400">
              <span>Enterprise E-Commerce Platform · 3-Part Video Case Study</span>
              <button
                onClick={() => setCaseStudyOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold transition"
              >
                Close Deep-Dive
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 5. COMPETITIONS & HACKATHONS */}
      <section id="competitions" className="py-16 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-lg md:text-xl font-black tracking-widest text-[#eab308] uppercase">
            🏆 COMPETITIONS & HACKATHONS
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">Algorithmic Problem Solving & Competitive Coding Benchmarks</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitions.map((comp, idx) => (
            <div key={idx} className="bg-[#16161a] border border-white/5 p-6 rounded-2xl hover:border-yellow-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span className="text-yellow-400 font-semibold">{comp.team}</span>
                  <span className="bg-zinc-800/80 px-2.5 py-0.5 rounded text-zinc-300">{comp.date}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">{comp.title}</h3>
                <p className="text-xs text-indigo-400 mb-3">{comp.organizer}</p>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">{comp.desc}</p>
              </div>

              {comp.certFile && (
                <div className="pt-4 border-t border-white/5 flex justify-end">
                  <button 
                    onClick={() => setActiveCert({ name: `${comp.title} (Participation Certificate)`, file: comp.certFile, type: comp.certType })}
                    className="px-3.5 py-1.5 rounded-lg bg-[#202026] text-xs font-semibold text-yellow-400 hover:bg-yellow-500/20 hover:text-yellow-300 transition-colors flex items-center gap-1.5"
                  >
                    View Certificate ↗
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. EXPERIENCE */}
      <section id="experience" className="py-20 px-6 max-w-4xl mx-auto border-t border-white/5">
        <div className="text-center mb-14">
          <h2 className="text-lg md:text-xl font-black tracking-widest text-[#0088ff] uppercase">
            EXPERIENCE
          </h2>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group flex flex-col sm:flex-row items-start justify-between gap-4 border-b border-white/5 pb-8">
              <div className="space-y-2 max-w-2xl">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#0088ff] transition-colors">
                  {exp.role} <span className="text-zinc-500 font-normal">at</span> {exp.company}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {exp.desc}
                </p>
              </div>
              <div className="text-xs font-mono text-zinc-400 shrink-0 text-left sm:text-right">
                <p className="font-semibold text-zinc-300">{exp.date}</p>
                <p className="text-zinc-500">{exp.location}</p>
              </div>
            </div>
          ))}

          <div className="p-5 rounded-2xl bg-[#16161a] border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm font-bold text-indigo-400">
                ⚡ Production Git &amp; Team Workflow Experience
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed max-w-2xl">
                Proficient with Git CLI, atomic semantic commits (<code className="text-zinc-200">feat:</code>, <code className="text-zinc-200">fix:</code>), rebasing (<code className="text-zinc-200">git pull --rebase</code>) to resolve push conflicts cleanly, and GitHub Issue code review workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EDUCATION */}
      <section id="education" className="py-20 px-6 max-w-4xl mx-auto border-t border-white/5">
        <div className="text-center mb-14">
          <h2 className="text-lg md:text-xl font-black tracking-widest text-emerald-400 uppercase">
            ACADEMIC EDUCATION
          </h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#16161a] border border-white/5 hover:border-emerald-500/30 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <a 
                  href="https://www.lkuni.com/2024/02/admission-for-degree-programmes.html" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-lg font-bold text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span>B. Tech in Software Technology</span>
                  <span className="text-emerald-400 text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </a>
                
                <p className="text-sm mt-0.5">
                  <a 
                    href="https://uovt.ac.lk/en" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-semibold underline decoration-emerald-500/40 hover:decoration-emerald-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>University of Vocational Technology (UoVT)</span>
                    <span className="text-xs">↗</span>
                  </a>
                </p>
              </div>
              <span className="text-xs font-mono px-3 py-1 bg-zinc-800 rounded text-zinc-300 w-fit">
                Jul 2024 – Present
              </span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Focusing on Software Architecture, Backend Development, Concurrency Controls, and Distributed Enterprise Systems.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141418] border border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <div className="font-semibold text-zinc-200 text-sm">G.C.E. Advanced Level (2022) — Technology Stream</div>
              <p className="text-xs text-zinc-400 mt-0.5">ICT: <strong className="text-emerald-400">B</strong> | SFT: <strong className="text-zinc-200">C</strong> | ET: <strong className="text-zinc-200">C</strong></p>
            </div>
            <span className="font-mono text-xs bg-zinc-800 px-3 py-1.5 rounded text-zinc-300">Z-Score: 1.0660</span>
          </div>

          <div className="p-5 rounded-xl bg-[#141418] border border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <div className="font-semibold text-zinc-200 text-sm">G.C.E. Ordinary Level (2019)</div>
              <p className="text-xs text-zinc-400 mt-0.5">Successfully Passed with English &amp; Core Subjects</p>
            </div>
            <span className="font-mono text-xs bg-zinc-800 px-3 py-1.5 rounded text-zinc-300">Passed (2019)</span>
          </div>
        </div>
      </section>

      {/* 8. ACADEMIC REFERENCES */}
      <section id="references" className="py-16 px-6 max-w-4xl mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-lg md:text-xl font-black tracking-widest text-[#06b6d4] uppercase">
            ACADEMIC REFERENCES
          </h2>
          <p className="text-zinc-400 text-xs mt-1">Senior Faculty &amp; Department Leadership — University of Vocational Technology</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {references.map((ref, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-[#16161a] border border-white/5 hover:border-cyan-500/40 transition-all space-y-3"
            >
              <div>
                <h3 className="text-base font-bold text-white">{ref.name}</h3>
                <p className="text-xs text-cyan-400 font-medium">{ref.role}</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">{ref.dept}</p>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-1.5 text-xs text-zinc-400 font-mono">
                <p className="flex items-center gap-2">
                  <span className="text-zinc-500">Email:</span>
                  <a href={`mailto:${ref.email}`} className="text-zinc-300 hover:text-white underline">{ref.email}</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-zinc-500">Phone:</span>
                  <a href={`tel:${ref.phone.replace(/\s+/g, '')}`} className="text-zinc-300 hover:text-white">{ref.phone}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CERTIFICATIONS */}
      <section id="certifications" className="py-16 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-lg md:text-xl font-black tracking-widest text-[#a855f7] uppercase">
            CERTIFICATIONS &amp; VERIFIED CREDENTIALS
          </h2>
          <p className="text-zinc-400 text-xs mt-1">Official Badges &amp; Verified Training Documents (Month &amp; Year)</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-[#16161a] border border-white/5 p-4 rounded-xl flex items-center justify-between gap-3 hover:border-purple-500/40 transition-all"
            >
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  {cert.kind}
                </span>
                <h4 className="text-xs sm:text-sm font-semibold text-white leading-tight mt-1">{cert.name}</h4>
                <p className="text-[11px] text-zinc-500">
                  {cert.issuer} • <span className="font-mono text-purple-300 font-semibold">{cert.date}</span>
                </p>
              </div>
              <button 
                onClick={() => setActiveCert(cert)}
                className="p-2 px-3 rounded-lg bg-[#202026] text-zinc-300 hover:text-white hover:bg-purple-600 transition-colors shrink-0 text-xs font-semibold"
                title="View Credential"
              >
                View ↗
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CERTIFICATE MODAL */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-[#16161a] border border-zinc-700 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#121215]">
              <h3 className="font-semibold text-sm text-zinc-200 truncate pr-4">{activeCert.name}</h3>
              <button onClick={() => setActiveCert(null)} className="text-zinc-400 hover:text-white font-bold px-2 py-1">
                ✕
              </button>
            </div>
            
            <div className="p-4 flex-1 overflow-auto flex items-center justify-center bg-[#0c0c0e]">
              {activeCert.type === 'png' || activeCert.type === 'jpg' ? (
                <img 
                  src={activeCert.file} 
                  alt={activeCert.name} 
                  className="max-h-[60vh] max-w-full rounded-lg object-contain shadow-lg"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x400/18181b/ffffff?text=Image+Not+Found+in+public/certificates";
                  }}
                />
              ) : (
                <div className="w-full h-[60vh] flex flex-col">
                  <iframe 
                    src={activeCert.file} 
                    title={activeCert.name}
                    className="w-full flex-1 rounded border border-white/5 bg-white"
                  />
                </div>
              )}
            </div>

            <div className="p-3 border-t border-white/5 bg-[#121215] flex items-center justify-between">
              {activeCert.type === 'pdf' ? (
                <a 
                  href={activeCert.file} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs text-purple-400 hover:text-purple-300 font-semibold"
                >
                  Open in New Tab ↗
                </a>
              ) : <span></span>}
              <button onClick={() => setActiveCert(null)} className="px-4 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-300">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 11. CONTACT & FOOTER */}
      <footer id="contact" className="py-20 px-6 max-w-3xl mx-auto border-t border-white/5 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-2">Get In Touch</h2>
        <p className="text-zinc-500 text-xs uppercase tracking-widest font-mono mb-4">Dommanige Dasun Chamara Jayalath</p>
        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-8 max-w-xl mx-auto">
          Undergraduate Software Engineer seeking Full-Stack / Backend Engineering Internship opportunities. Available for immediate interview and hiring.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a 
            href="mailto:dasunchamaraofficial@gmail.com" 
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white"
          >
            ✉ dasunchamaraofficial@gmail.com
          </a>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <a 
            href="tel:+94712983655" 
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white"
          >
            📞 +94 71 298 3655
          </a>
        </div>

        <p className="text-xs text-zinc-500 mb-8">
          📍 239/1, Nugethota Road, Divithura, Ethkadura, Sri Lanka
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a 
            href="https://www.linkedin.com/in/dasun-chamara-52566a322/" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 rounded-full bg-[#18181c] border border-white/5 text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a 
            href="https://github.com/DasunChamara" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 rounded-full bg-[#18181c] border border-white/5 text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
            title="GitHub"
          >
            <GithubIcon />
          </a>
        </div>

        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Dasun Chamara Jayalath. Handcrafted with React &amp; Tailwind CSS.
        </p>
      </footer>

    </div>
  );
}