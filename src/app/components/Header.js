"use client";
import Image from "next/image";
import React from "react";
import "../../styles/header.css";

export const Header = () => {
  return (
    <header>
      <div className="brand">
        <Image
          src="/images/butchers_shop_logo.png"
          alt="Logo Meat"
          height={60}
          width={60}
          className="logo"
        />
        <span className="brandText">
          Freshness You Can Taste, Service You Can Trust!
        </span>
      </div>
    </header>
  );
};
