/**
 * CV / Resume generator for Muhammad Sohaib.
 *
 * - Real text output (ATS scanners can parse it cleanly).
 * - Single column, standard section headings, A4.
 * - Subtle accent color + clear hierarchy.
 *
 * Run: `npm run cv` (or `node scripts/generate-cv.cjs`).
 * Output: public/cv.pdf
 *
 * Anything in [SQUARE BRACKETS] is a placeholder for you to fill in.
 */

const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const OUTPUT = path.join(__dirname, "..", "public", "cv.pdf");

const COLOR = {
  text: "#111111",
  body: "#222222",
  secondary: "#525252",
  muted: "#7a7a7a",
  accent: "#5b21b6", // ATS-safe deep violet, prints fine in B/W too
  rule: "#d6d6d6",
};

const PAGE_MARGIN = 48;

const doc = new PDFDocument({
  size: "A4",
  margins: {
    top: PAGE_MARGIN,
    bottom: PAGE_MARGIN,
    left: PAGE_MARGIN,
    right: PAGE_MARGIN,
  },
  info: {
    Title: "Muhammad Sohaib — Curriculum Vitae",
    Author: "Muhammad Sohaib",
    Subject: "Front-End Developer & UI/UX Designer",
    Keywords:
      "Front-End Developer, UI/UX Designer, React, Next.js, TypeScript, Tailwind CSS, Figma, React Native, WordPress, JavaScript, HTML, CSS",
  },
});

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
doc.pipe(fs.createWriteStream(OUTPUT));

const pageW = doc.page.width;
const contentW = pageW - PAGE_MARGIN * 2;

function sectionHeader(title) {
  doc.moveDown(0.6);
  doc
    .font("Helvetica-Bold")
    .fontSize(10.5)
    .fillColor(COLOR.text)
    .text(title.toUpperCase(), { characterSpacing: 1.4 });
  const y = doc.y + 2;
  doc
    .strokeColor(COLOR.rule)
    .lineWidth(0.6)
    .moveTo(PAGE_MARGIN, y)
    .lineTo(PAGE_MARGIN + contentW, y)
    .stroke();
  doc.moveDown(0.5);
}

function entry({ role, org, date, bullets = [], stack }) {
  // Role + date on the same line (date right-aligned)
  const startY = doc.y;
  doc.font("Helvetica-Bold").fontSize(10.5).fillColor(COLOR.text);
  doc.text(role, PAGE_MARGIN, startY, {
    width: contentW * 0.7,
    continued: false,
  });
  doc.font("Helvetica").fontSize(9.5).fillColor(COLOR.muted);
  doc.text(date, PAGE_MARGIN + contentW * 0.7, startY, {
    width: contentW * 0.3,
    align: "right",
  });

  // Organisation
  doc.font("Helvetica").fontSize(10).fillColor(COLOR.accent);
  doc.text(org, PAGE_MARGIN, doc.y, { width: contentW });

  // Optional stack line
  if (stack) {
    doc.font("Helvetica-Oblique").fontSize(9).fillColor(COLOR.muted);
    doc.text(stack, { width: contentW });
  }

  // Bullets
  if (bullets.length) {
    doc.moveDown(0.25);
    doc.font("Helvetica").fontSize(10).fillColor(COLOR.body);
    for (const b of bullets) {
      doc.text("•  " + b, PAGE_MARGIN + 4, doc.y, {
        width: contentW - 4,
        lineGap: 2,
      });
    }
  }
  doc.moveDown(0.55);
}

function skillRow(label, items) {
  doc.font("Helvetica-Bold").fontSize(10).fillColor(COLOR.text);
  doc.text(label + ":  ", PAGE_MARGIN, doc.y, { continued: true });
  doc.font("Helvetica").fillColor(COLOR.body);
  doc.text(items, { width: contentW });
  doc.moveDown(0.18);
}

/* ────────── HEADER ────────── */

doc.font("Helvetica-Bold").fontSize(24).fillColor(COLOR.text);
doc.text("Muhammad Sohaib");
doc.font("Helvetica").fontSize(11.5).fillColor(COLOR.accent);
doc.text("Front-End Developer  &  UI/UX Designer");
doc.moveDown(0.35);

doc.font("Helvetica").fontSize(9.5).fillColor(COLOR.secondary);
doc.text(
  [
    "muhammadsohaib7932@gmail.com",
    "github.com/Sohaib7932",
    "linkedin.com/in/-muhammadsohaib-",
    "[Your City, Country]",
  ].join("   |   "),
  { width: contentW },
);

doc.moveDown(0.3);

/* ────────── PROFILE ────────── */

sectionHeader("Profile");
doc.font("Helvetica").fontSize(10).fillColor(COLOR.body);
doc.text(
  "Final-year Software Engineering student with 3+ years in UI/UX design and 2.5+ years in front-end development. Specialised in React, Next.js, and TypeScript. Started with HTML and CSS, moved to WordPress, then React, and now Next.js is where I spend most of my time. I focus on building clean, fast, and accessible web interfaces, with strong design instincts carried over from a Figma-first background.",
  { width: contentW, align: "justify", lineGap: 2 },
);

/* ────────── EXPERIENCE ────────── */

sectionHeader("Experience");

entry({
  role: "Front-End Developer",
  org: "Sweden Relocators  /  Nordic Relocators",
  date: "[Start Month Year] – Present",
  bullets: [
    "Built the enterprise client and company portal end-to-end with Next.js 15, React, Material UI, Auth0, and Supabase.",
    "Developed the public marketing websites for the Sweden (swedenrelocators.se) and Nordic (nordicrelocators.dk) markets.",
    "Implemented a 9-step case-management flow, document vault, appointment booking, and live status tracking inside the portal.",
    "Added multi-language support (English, Svenska, Urdu) using i18n and shipped fully responsive layouts across all surfaces.",
    "Improved performance, accessibility, and visual polish across the platform.",
  ],
});

entry({
  role: "UI/UX Designer (Intern)",
  org: "[Company Name]",
  date: "[Month Year] – [Month Year]",
  bullets: [
    "Designed user flows, wireframes, and high-fidelity mockups in Figma for web and mobile products.",
    "Contributed to a shared design system and reusable component library.",
    "Worked closely with developers to ensure a clean, accurate handoff from design to code.",
  ],
});

entry({
  role: "UI/UX Designer (Intern)",
  org: "[Company Name]",
  date: "[Month Year] – [Month Year]",
  bullets: [
    "Ran light user research and produced wireframes for client-facing projects.",
    "Built interactive Figma prototypes for stakeholder reviews and usability testing.",
    "Iterated on designs based on real user feedback, focusing on clarity and simplicity.",
  ],
});

entry({
  role: "WordPress Developer (Intern)",
  org: "[Company Name]",
  date: "[Month Year] – [Month Year]",
  bullets: [
    "Built and customised WordPress sites using Elementor, custom themes, and reusable blocks.",
    "Optimised page speed, on-page SEO, and responsive layouts across devices.",
    "Maintained plugins, resolved theme conflicts, and supported small client requests.",
  ],
});

/* ────────── PROJECTS ────────── */

sectionHeader("Selected Projects");

entry({
  role: "PayPalm  —  Palm Vein Payments (Final-Year Project)",
  org: "Mobile banking app + custom IoT hardware",
  stack: "React Native, Expo, IoT Hardware",
  date: "2025",
  bullets: [
    "A full mobile banking app paired with custom-built palm-vein scanning hardware.",
    "Users sign in and pay by scanning the vein pattern in their palm, no card, no PIN, no phone unlock needed.",
  ],
});

entry({
  role: "Sweden Relocators Client Portal",
  org: "Enterprise client and company portal",
  stack: "Next.js, React, MUI, Auth0, Supabase, i18n",
  date: "2024 – Present",
  bullets: [
    "End-to-end immigration, relocation, accounting, property, and business services platform.",
    "9-step case flow, document vault, appointment booking, invoicing, and live status tracking.",
  ],
});

entry({
  role: "IELTS Counsel  —  Full Mock Test Suite",
  org: "AI-powered IELTS preparation platform",
  stack: "Next.js, React, Node.js, OpenAI API",
  date: "2025",
  bullets: [
    "Complete IELTS prep platform covering Listening, Reading, Writing, and an AI-powered Speaking module.",
    "Speaking AI runs the full 3-part interview and scores fluency, vocabulary, grammar, and pronunciation with band-level feedback.",
  ],
});

entry({
  role: "Corefinity  —  Studio Website",
  org: "Marketing site for a software studio",
  stack: "Next.js, React, Tailwind CSS, Framer Motion",
  date: "2025",
  bullets: [
    "Designed and built a high-converting marketing site for a studio that ships web, mobile, and AI products.",
    "Clean hero, animated sections, and a service-led layout focused on real conversations and lead capture.",
  ],
});

entry({
  role: "Code Smell Detection",
  org: "Web-based static analysis tool",
  stack: "Next.js, React, Static Analysis",
  date: "2024",
  bullets: [
    "Scans uploaded source code and flags common design issues such as Bloaters, Couplers, and Object-Oriented smells.",
    "Helps developers spot maintainability problems early with clear, structured feedback for each finding.",
  ],
});

entry({
  role: "Blood Pulse Connect",
  org: "Figma design and full prototyping",
  stack: "Figma, Prototyping, UX Research",
  date: "2024",
  bullets: [
    "Full Figma design for a blood-donation app that connects donors and recipients in minutes.",
    "Designed around urgency, trust, and removing friction at the moment it matters most.",
  ],
});

/* ────────── SKILLS ────────── */

sectionHeader("Skills");

skillRow(
  "Front-End (Main)",
  "React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Redux, React Query",
);
skillRow(
  "Languages",
  "HTML, CSS, JavaScript, TypeScript, Python (basics)",
);
skillRow(
  "Mobile",
  "React Native, Expo, App Store / Play Store publishing",
);
skillRow(
  "Design",
  "Figma, Prototyping, Wireframing, Design Systems, User Research",
);
skillRow(
  "CMS / Web",
  "WordPress, Elementor, custom themes, on-page SEO",
);
skillRow(
  "Backend (Light)",
  "Node.js, Express, REST APIs, MongoDB",
);
skillRow(
  "AI",
  "OpenAI API, Anthropic API, streaming chat, tool-using agents",
);
skillRow(
  "Tooling",
  "Git, GitHub, Vercel, VS Code, Auth0, Supabase",
);

/* ────────── EDUCATION ────────── */

sectionHeader("Education");

entry({
  role: "Bachelor of Science in Software Engineering",
  org: "[University Name]",
  date: "[Start Year] – [Expected End Year]",
  bullets: [
    "Final-year student. Focus areas: software design, web technologies, human-computer interaction.",
    "Final-year project: PayPalm  —  palm-vein biometric mobile payments.",
  ],
});

doc.end();

doc.on("end", () => {
  console.log("CV generated at " + OUTPUT);
});
