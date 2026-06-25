import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Formation from "@/components/Formation";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function App() {
  const [page, setPage] = useState<"home" | "privacy">("home");

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.pathname === "/politica-de-privacidade") {
        setPage("privacy");
      } else {
        setPage("home");
      }
    };
    handleHashChange();

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.href?.includes("politica-de-privacidade")) {
        e.preventDefault();
        setPage("privacy");
        window.scrollTo(0, 0);
      }
      if (target.tagName === "A" && target.href?.includes("#") && !target.href?.includes("politica")) {
        const hash = target.getAttribute("href");
        if (hash?.startsWith("#")) {
          setPage("home");
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (page === "privacy") {
    return (
      <>
        <Header onNavigate={() => setPage("home")} />
        <PrivacyPolicy />
        <Footer onPrivacyClick={() => setPage("privacy")} />
        <CookieBanner />
      </>
    );
  }

  return (
    <>
      <Header onNavigate={() => setPage("home")} />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Formation />
        <Publications />
        <Contact />
      </main>
      <Footer onPrivacyClick={() => setPage("privacy")} />
      <CookieBanner />
    </>
  );
}
