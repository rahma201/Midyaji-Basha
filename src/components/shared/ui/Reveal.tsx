"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

type RevealState = "ssr" | "waiting" | "visible";

export function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
  duration = 0.45,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>("ssr");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;

    const rafId = requestAnimationFrame(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setState("visible");
        return;
      }

      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setState("visible");
        return;
      }

      setState("waiting");

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setState("visible");
            observer?.unobserve(el);
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
      );
      observer.observe(el);
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, []);

  if (state === "ssr") {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={[
        "css-reveal",
        state === "visible" ? "css-reveal--visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-direction={direction}
      style={
        {
          "--reveal-delay": `${delay}s`,
          "--reveal-duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function Stagger({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>("ssr");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;

    const rafId = requestAnimationFrame(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setState("visible");
        return;
      }

      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setState("visible");
        return;
      }

      setState("waiting");

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setState("visible");
            observer?.unobserve(el);
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
      );
      observer.observe(el);
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, []);

  if (state === "ssr") {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={[
        "css-stagger",
        state === "visible" ? "css-stagger--visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          "--stagger-delay": `${delay}s`,
          "--stagger-step": `${stagger}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

export const staggerItem = {};
