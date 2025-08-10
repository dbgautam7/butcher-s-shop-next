"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import "../../styles/header.css";

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  // Prevent background scroll when slideover is open
  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Blog", href: "/blog" },

    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header>
        <Link href="/" className="brand">
          <Image
            src="/images/butchers_shop_logo.png"
            alt="Logo Meat"
            height={60}
            width={60}
            className="logo"
          />
          <span className="brandText">Butcher’s Shop</span>
        </Link>

        {/* Desktop nav */}
        <nav className="desktopNav" aria-label="Primary">
          {navItems.map(({ label, href }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="menuButton"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          {/* Hamburger icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      {/* Overlay */}
      <div
        className={`mobileOverlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Slideover panel */}
      <aside
        id="mobile-menu"
        className={`slideover ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <div className="slideoverHeader">
          <span className="slideoverTitle">Menu</span>
          <button
            className="closeButton"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="mobileNav" aria-label="Mobile Primary">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)} /* close on navigate */
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};
