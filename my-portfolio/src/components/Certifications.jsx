import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Title from './utils/Title';
import HideOnOutOfView from './utils/HideOnOutOfView';
import { FiX, FiAward, FiFileText, FiExternalLink } from 'react-icons/fi';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const certifications = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    skill: "Cloud",
    date: "2026",
    emoji: "☁️",
    color: "#FF9900",          // brand colour for the accent bar
    pdf: "/AWS Cloud.pdf"
  },
  {
    title: "Frontend - React",
    issuer: "HackerRank",
    skill: "Frontend",
    date: "2026",
    emoji: "⚛️",
    color: "#61DAFB",
    pdf: "/react.pdf",
  },
  // ── add more here ──
  {
    title: "Google Cloud Foundations",
    issuer: "Google",
    skill: "Cloud",
    date: "2025",
    emoji: "☁️",
    color: "#6366f1",
    pdf: undefined,
    url: "https://www.credly.com/badges/e045cdba-a9c8-4e3c-90a0-4aeb26721a36",
  },
];


/* ─── PDF Viewer using react-pdf ─── */
const PDFViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      const modalWidth = window.innerWidth > 768 ? window.innerWidth - 120 : window.innerWidth - 64;
      setWidth(Math.min(modalWidth, 850));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex-1 w-full overflow-y-auto bg-zinc-100 dark:bg-zinc-950 flex justify-center p-4">
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<div className="text-zinc-500 dark:text-zinc-400 py-20 text-center font-medium">Loading PDF...</div>}
        error={<div className="text-red-500 dark:text-red-400 py-20 text-center font-medium"><ul>No pdf Dected click the link to view pdf.</ul></div>}
        className="flex flex-col items-center gap-4"
      >
        {Array.from(new Array(numPages || 0), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={width}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="shadow-2xl rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800/80"
          />
        ))}
      </Document>
    </div>
  );
};

/* ─── Full-screen PDF preview modal ─── */
const PDFModal = ({ cert, onClose }) => (
  <AnimatePresence>
    {cert && (
      <>
        {/* Backdrop */}
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
        />

        {/* Panel */}
        <motion.div
          key="panel"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-4 md:inset-10 z-[101] flex flex-col
                     rounded-2xl overflow-hidden
                     border border-zinc-200 dark:border-zinc-800
                     bg-white dark:bg-zinc-950 shadow-[0_32px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.8)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3
                          border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-xl">{cert.emoji}</span>
              <div>
                <p className="text-[13px] font-bold text-zinc-800 dark:text-zinc-100 leading-tight">{cert.title}</p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{cert.issuer} · {cert.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Open PDF */}
              {cert.pdf && (
                <a  
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold
                             border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400
                             hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-500
                             transition-all duration-200"
                >
                  <FiExternalLink size={12}/> Open PDF
                </a>
              )}
              {/* Verify Credential */}
              {cert.url && (
                <a  
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold
                             border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400
                             hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-500
                             transition-all duration-200"
                >
                  <FiExternalLink size={12}/> Verify Credential
                </a>
              )}
              {/* Close */}
              <button
                onClick={onClose}
                className="flex items-center justify-center w-8 h-8 rounded-lg
                           border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400
                           hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-500
                           transition-all duration-200"
              >
                <FiX size={15} />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <PDFViewer file={cert.pdf} />
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

/* ─── Certificate card ─── */
const CertCard = ({ cert, index, onClick }) => (
  <HideOnOutOfView delay={index * 100} direction="up" duration={800}>
    <motion.div
      onClick={onClick}
      whileHover={{ y: -4, borderColor: cert.color + "66" }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="cert-card group relative flex flex-col overflow-hidden cursor-pointer
                 rounded-2xl
                 border border-zinc-200 dark:border-zinc-800/60
                 bg-white dark:bg-zinc-900/30
                 shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_24px_rgba(0,0,0,0.4)]
                 hover:shadow-[0_16px_48px_rgba(0,0,0,0.14)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.65)]
                 select-none"
      style={{ willChange: 'transform' }}
    >
      {/* Colour accent bar at top */}
      <div
        className="h-1 w-full shrink-0 transition-all duration-300 group-hover:h-[3px]"
        style={{ background: cert.color }}
      />

      {/* PDF thumbnail area */}
      <div className="relative flex flex-col items-center justify-center gap-3 py-10 px-6
                      bg-zinc-50 dark:bg-zinc-950/60 border-b border-zinc-200 dark:border-zinc-800/40">
        {/* Big icon */}
        <div
          className="flex items-center justify-center w-16 h-16 rounded-2xl
                     transition-transform duration-300 group-hover:scale-110"
          style={{
            background: cert.color + "18",
            border: `1.5px solid ${cert.color}44`,
          }}
        >
          <span className="text-3xl">{cert.emoji}</span>
        </div>

        {/* PDF label */}
        <span
          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
          style={{
            background: cert.color + "14",
            color: cert.color,
            border: `1px solid ${cert.color}33`,
          }}
        >
          <FiFileText size={10} /> {cert.skill}
        </span>

        {/* "Click to preview" hint */}
        <p className="text-[10px] text-zinc-400 dark:text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to preview
        </p>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-2 p-5">
        <h3 className="text-[14px] font-bold leading-snug text-zinc-900 dark:text-zinc-100
                       group-hover:text-accent transition-colors duration-300">
          {cert.title}
        </h3>
        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">{cert.issuer}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 mt-1 border-t border-zinc-100 dark:border-zinc-800/40">
          <span className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
            Issued {cert.date}
          </span>
          <FiAward
            size={14}
            className="text-zinc-300 dark:text-zinc-600 group-hover:text-accent transition-colors duration-300"
          />
        </div>
      </div>
    </motion.div>
  </HideOnOutOfView>
);

/* ─── Section ─── */
const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <>
      <section id="certifications" className="min-h-screen px-8 py-20 flex justify-center">
        <div className="max-w-6xl w-full">
          <HideOnOutOfView direction="up" duration={700}>
            <Title>Certifications</Title>
          </HideOnOutOfView>

          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm">
                <CertCard
                  cert={cert}
                  index={index}
                  onClick={() => setActiveCert(cert)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF preview modal — rendered outside section so it covers the whole viewport */}
      <PDFModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </>
  );
};

export default Certifications;


