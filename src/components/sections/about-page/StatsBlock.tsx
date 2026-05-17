"use client";

import { motion, useMotionValue, useTransform, animate, type Variants } from "motion/react";
import { useEffect, useRef } from "react";

const stats = [
  {
    value: 3,
    suffix: "+",
    label: "Years in UI/UX",
    sublabel: "From sketch to ship",
  },
  {
    value: 2.5,
    suffix: "+",
    label: "Years in dev",
    sublabel: "HTML/CSS to Next.js",
  },
  {
    value: 15,
    suffix: "+",
    label: "Projects shipped",
    sublabel: "Real users, real feedback",
  },
  {
    value: 10,
    suffix: "+",
    label: "Tools used daily",
    sublabel: "Right tool for the job",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function StatsBlock() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="group relative isolate overflow-hidden rounded-2xl border border-border-subtle bg-white/[0.025] p-5 backdrop-blur-sm transition-colors hover:border-accent/50 sm:p-6"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="flex items-baseline gap-1">
            <CountUp to={stat.value} />
            <span className="text-[28px] font-extrabold leading-none tracking-tight text-accent sm:text-[36px]">
              {stat.suffix}
            </span>
          </div>
          <p className="mt-2 text-[13px] font-semibold tracking-tight text-foreground sm:text-[14px]">
            {stat.label}
          </p>
          <p className="mt-1 text-[11.5px] leading-5 text-foreground/55 sm:text-[12px]">
            {stat.sublabel}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInteger = Number.isInteger(to);
  const display = useTransform(motionValue, (v) =>
    isInteger ? String(Math.round(v)) : v.toFixed(1),
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const controls = animate(motionValue, to, {
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            });
            observer.disconnect();
            return () => controls.stop();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [motionValue, to]);

  useEffect(() => {
    return display.on("change", (latest) => {
      if (ref.current) ref.current.textContent = latest;
    });
  }, [display]);

  return (
    <span
      ref={ref}
      className="text-[28px] font-extrabold leading-none tracking-tight text-foreground sm:text-[36px]"
    >
      {isInteger ? "0" : "0.0"}
    </span>
  );
}
