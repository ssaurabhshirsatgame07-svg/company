import React, { useMemo, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGrid,
  FiCode,
  FiShoppingCart,
  FiSmartphone,
  FiTrendingUp,
  FiExternalLink,
  FiGithub,
  FiChevronRight,
  FiChevronLeft,
  FiX,
  FiTag,
  FiClock,
  FiStar,
} from "react-icons/fi";
import "./Portfolio.css";

const CATEGORIES = [
  { id: "all", name: "All", icon: <FiGrid /> },
  { id: "web", name: "Web Apps", icon: <FiCode /> },
  { id: "ecom", name: "E-commerce", icon: <FiShoppingCart /> },
  { id: "mobile", name: "Mobile", icon: <FiSmartphone /> },
  { id: "marketing", name: "Growth/Marketing", icon: <FiTrendingUp /> },
];

// demo items (replace with your real ones)
const RAW_ITEMS = [
  {
    id: "rivaara-luxe",
    title: "Rivaaraluxe — Fashion E-commerce",
    subtitle: "Headless Shopify + Next.js + GraphQL",
    category: "ecom",
    year: "2025",
    duration: "8 weeks",
    rating: 4.9,
    tags: ["Shopify", "Next.js", "Liquid", "Klaviyo"],
    cover:
      "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1600&auto=format&fit=crop",
    shots: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1600&auto=format&fit=crop",
    ],
    link: "https://rivaaraluxe.com/",
  },
  {
    id: "analytics-suite",
    title: "B2B Analytics Suite",
    subtitle: "React + Node + Mongo + Queues",
    category: "web",
    year: "2024",
    duration: "12 weeks",
    rating: 4.8,
    tags: ["React", "Node", "MongoDB", "Redis"],
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
    shots: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    ],
    repo: "https://github.com/",
  },
  {
    id: "fintech-wallet",
    title: "Fintech Wallet",
    subtitle: "Flutter + Firebase + Razorpay",
    category: "mobile",
    year: "2025",
    duration: "10 weeks",
    rating: 4.7,
    tags: ["Flutter", "Firebase", "Razorpay"],
    cover:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    shots: [
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547658719-29b9c9f54e24?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: "growth-engine",
    title: "D2C Growth Engine",
    subtitle: "SEO + CRO + Paid Media",
    category: "marketing",
    year: "2024",
    duration: "Ongoing",
    rating: 4.9,
    tags: ["SEO", "CRO", "Meta Ads", "GA4"],
    cover:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    shots: [
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: "saas-portal",
    title: "SaaS Onboarding Portal",
    subtitle: "Next.js App Router + Stripe",
    category: "web",
    year: "2025",
    duration: "7 weeks",
    rating: 4.8,
    tags: ["Next.js", "Stripe", "Prisma", "Postgres"],
    cover:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=1600&auto=format&fit=crop",
    shots: [
      "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1600&auto=format&fit=crop",
    ],
    repo: "https://github.com/",
  },
  {
    id: "commerce-app",
    title: "Modern Commerce App",
    subtitle: "React Native + GraphQL",
    category: "mobile",
    year: "2024",
    duration: "9 weeks",
    rating: 4.7,
    tags: ["React Native", "GraphQL", "Apollo"],
    cover:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    shots: [
      "https://images.unsplash.com/photo-1547658719-29b9c9f54e24?q=80&w=1600&auto=format&fit=crop",
    ],
  },
];

const spring = { type: "spring", stiffness: 140, damping: 18, mass: 0.8 };

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const [hovered, setHovered] = useState(null);
  const [modal, setModal] = useState({ open: false, index: 0, item: null });

  const items = useMemo(() => {
    if (active === "all") return RAW_ITEMS;
    return RAW_ITEMS.filter((i) => i.category === active);
  }, [active]);

  // tilt effect
  const handleMouseMove = (e, id) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotY = (px - 0.5) * 10;
    const rotX = (0.5 - py) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    setHovered(id);
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "";
    setHovered(null);
  };

  // modal navigation
  const nextShot = () => {
    if (!modal.item) return;
    setModal((m) => ({
      ...m,
      index: (m.index + 1) % (modal.item.shots?.length || 1),
    }));
  };
  const prevShot = () => {
    if (!modal.item) return;
    setModal((m) => ({
      ...m,
      index:
        (m.index - 1 + (modal.item.shots?.length || 1)) %
        (modal.item.shots?.length || 1),
    }));
  };

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setModal({ open: false, item: null, index: 0 });
      if (e.key === "ArrowRight") nextShot();
      if (e.key === "ArrowLeft") prevShot();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal.item]);

  return (
    <section className="portfolio-page">
      {/* HERO */}
      <header className="portfolio-hero">
        <motion.div
          className="ph-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="chip">Case Studies & Work</span>
          <h1 className="ph-title">
            Work that <span className="glow-text">ships</span> and{" "}
            <span className="gradient-text">scales</span>.
          </h1>
          <p className="ph-subtitle">
            A hand-picked collection of builds across web, e-commerce, mobile,
            and growth. Built fast, tuned for conversions, and designed to
            impress.
          </p>
          <div className="ph-stats">
            <div className="stat">
              <FiStar />
              <span>4.9/5 Client Rating</span>
            </div>
            <div className="stat">
              <FiClock />
              <span>Avg. Delivery 6–10 weeks</span>
            </div>
            <div className="stat">
              <FiTag />
              <span>Brand-first Execution</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="ph-right"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="hero-card">
            <div className="hc-bg" />
            <div className="hc-content">
              <h3>From MVP to Hypergrowth</h3>
              <p>
                We blend product, engineering, and marketing to ship experiences
                customers love — and buy.
              </p>
              <div className="hc-row">
                <span>Next.js</span>
                <span>Shopify</span>
                <span>Flutter</span>
                <span>SEO/CRO</span>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* FILTERS */}
     {/* FILTERS */}
<motion.div
  className="portfolio-filters"
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
>
  {CATEGORIES.map((c) => (
    <motion.button
      key={c.id}
      className={`pf-btn-pill ${active === c.id ? "active" : ""}`}
      onClick={() => setActive(c.id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="pf-icon">{c.icon}</span>
      {c.name}
    </motion.button>
  ))}
</motion.div>


      {/* GRID (masonry-like) */}
   {/* GRID - NEW RESPONSIVE CARDS */}
<div className="project-grid">
  {items.map((item) => (
    <motion.div
      key={item.id}
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={() => setModal({ open: true, index: 0, item })}
    >
      {/* Image */}
      <div className="project-image">
        <img src={item.cover} alt={item.title} loading="lazy" />
        <span className="project-type">{item.category}</span>
        <span className="view-shots">View Shots</span>
      </div>

      {/* Content */}
      <div className="project-details">
        <div className="top-meta">
          <span>{item.year}</span>
          <span className="rating">
            <FiStar /> {item.rating}
          </span>
        </div>

        <h3 className="project-title">{item.title}</h3>
        <p className="project-sub">{item.subtitle}</p>

        <div className="project-tags">
          {item.tags.map((tag, idx) => (
            <span key={idx} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="bottom-meta">
          <span className="duration">
            <FiClock /> {item.duration}
          </span>
          <div className="links">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="p-link"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink /> Live
              </a>
            )}
            {item.repo && (
              <a
                href={item.repo}
                target="_blank"
                rel="noreferrer"
                className="p-link"
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>


      {/* CTA STRIP */}
      <section className="portfolio-cta">
        <div className="cta-left">
          <h2>
            Have a project in mind?
            <br />
            Let’s make it <span className="gradient-text">remarkable</span>.
          </h2>
          <p>
            We craft conversion-first experiences across storefronts, apps, and
            brand ecosystems.
          </p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-primary" href="/contact">
            Start a Project <FiChevronRight />
          </a>
          <a className="btn btn-secondary" href="/services">
            Explore Services
          </a>
        </div>
      </section>

      {/* MODAL / CAROUSEL */}
      <AnimatePresence>
        {modal.open && modal.item && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="modal-close"
              onClick={() => setModal({ open: false, item: null, index: 0 })}
            >
              <FiX />
            </button>

            <div className="modal-inner">
              <button className="nav prev" onClick={prevShot}>
                <FiChevronLeft />
              </button>

              <div className="shot-wrap">
                <img
                  src={
                    modal.item.shots?.[modal.index] || modal.item.cover || ""
                  }
                  alt={modal.item.title}
                />
                <div className="shot-caption">
                  <span className="chip">{modal.item.category}</span>
                  <h4>{modal.item.title}</h4>
                  <p>{modal.item.subtitle}</p>
                </div>
              </div>

              <button className="nav next" onClick={nextShot}>
                <FiChevronRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}










