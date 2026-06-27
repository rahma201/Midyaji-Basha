"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe2 } from "lucide-react";
import { en } from "@/lib/i18n/en";
import { ar } from "@/lib/i18n/ar";
import { LocaleOrderModal } from "@/components/ui/LocaleOrderModal";
import { BrandMark } from "@/components/layout/BrandMark";
import { HoverGlow } from "@/components/ui/HoverGlow";

export function LocaleNavbar({ locale }: { locale: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const pathname = usePathname();
  const dict = locale === "ar" ? ar : en;
  const isRTL = locale === "ar";
  const otherLocale = locale === "ar" ? "en" : "ar";
  const switchLabel = locale === "ar" ? "EN" : "AR";
  const switchPath = pathname.startsWith(`/${locale}`)
    ? `/${otherLocale}${pathname.slice(locale.length + 1) || ""}`
    : `/${otherLocale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/menu`, label: dict.nav.menu },
    { href: `/${locale}/blog`, label: dict.nav.blog },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const arabicFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : {};

  return (
    <>
      <header
        className={`site-header fixed inset-x-0 z-40 transition-all duration-500 ${scrolled ? "top-3 is-scrolled" : "top-0"}`}
      >
        <div className="site-header-shell">
          <div className={`locale-navbar-inner ${isRTL ? "is-rtl" : "is-ltr"}`}>
            {/* Logo */}
            <BrandMark
              href={`/${locale}`}
              locale={locale}
              className="locale-navbar-brand"
            />

            {/* Desktop Nav */}
            <nav
              className="locale-navbar-nav hidden md:flex"
              dir={isRTL ? "rtl" : "ltr"}
            >
              {links.map((l) => {
                const active =
                  l.href === `/${locale}`
                    ? pathname === l.href
                    : pathname.startsWith(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`nav-link text-sm font-medium ${active ? "is-active" : ""}`}
                    style={arabicFont}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div
              className={`locale-navbar-actions hidden md:flex ${isRTL ? "is-rtl" : ""}`}
            >
              <HoverGlow as="span" className="rounded-lg">
                <Link
                  href={switchPath}
                  className="locale-language-switch premium-button-glow"
                  style={arabicFont}
                  aria-label={dict.nav.langSwitchLabel}
                >
                  <Globe2 className="w-4 h-4" aria-hidden="true" />
                  {switchLabel}
                </Link>
              </HoverGlow>
              <HoverGlow as="span" className="rounded-lg">
                <button
                  onClick={() => setOrderOpen(true)}
                  className="premium-button-glow locale-order-button px-5 rounded-lg text-sm font-semibold text-white"
                  style={{ backgroundColor: "#E51E2A", ...arabicFont }}
                >
                  {dict.nav.orderNow}
                </button>
              </HoverGlow>
            </div>

            {/* Mobile toggle */}
            <HoverGlow
              as="span"
              className="locale-navbar-toggle md:hidden rounded-lg"
            >
              <button
                className="p-2 rounded-lg"
                style={{ color: "#F8F6F1" }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </HoverGlow>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="locale-mobile-menu md:hidden"
            dir={isRTL ? "rtl" : "ltr"}
            style={{
              backgroundColor: "#0D0D0D",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <nav className="flex flex-col gap-1">
              {links.map((l) => {
                const active =
                  l.href === `/${locale}`
                    ? pathname === l.href
                    : pathname.startsWith(l.href);
                return (
                  <HoverGlow key={l.href} className="rounded-lg">
                    <Link
                      href={l.href}
                      className={`nav-link premium-button-glow block py-3 px-4 rounded-lg text-sm font-medium ${active ? "is-active" : ""}`}
                      style={arabicFont}
                      onClick={() => setMobileOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </HoverGlow>
                );
              })}
              <div className={`locale-mobile-actions ${isRTL ? "is-rtl" : ""}`}>
                <HoverGlow className="flex-1 rounded-lg">
                  <Link
                    href={switchPath}
                    className="locale-language-switch premium-button-glow w-full justify-center"
                    style={arabicFont}
                    onClick={() => setMobileOpen(false)}
                    aria-label={dict.nav.langSwitchLabel}
                  >
                    <Globe2 className="w-4 h-4" aria-hidden="true" />
                    {switchLabel}
                  </Link>
                </HoverGlow>
                <HoverGlow className="flex-1 rounded-lg">
                  <button
                    onClick={() => {
                      setOrderOpen(true);
                      setMobileOpen(false);
                    }}
                    className="premium-button-glow w-full py-3 rounded-lg text-sm font-semibold text-white"
                    style={{ backgroundColor: "#E51E2A", ...arabicFont }}
                  >
                    {dict.nav.orderNow}
                  </button>
                </HoverGlow>
              </div>
            </nav>
          </div>
        )}
      </header>

      <LocaleOrderModal
        open={orderOpen}
        onOpenChange={setOrderOpen}
        dict={dict.orderModal}
      />
    </>
  );
}
