"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Header from "@/ui/layout/Header";

// CSS Plugin
import "@/public/vendor/bootstrap-icons/bootstrap-icons.css";
import "@/public/vendor/font-awesome/css/all.min.css";
import "@/public/vendor/tiny-slider/tiny-slider.css";
import "@/public/vendor/plyr/plyr.css";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <div>Home</div>
    </>
  );
}
