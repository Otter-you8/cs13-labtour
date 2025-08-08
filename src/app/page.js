import React from "react";
import MatterPortViewer from "./feature/Home/matterportviewer";
import ResearchSection from "./components/ResearchSection";
import Hero from "./feature/Home/Hero";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Hero />

      <MatterPortViewer
        modelID={"pXuSmseL7cG"}
        sdkKey={"tnwen6f345d1u4r7dp6p87fsd"}
      />

      <ResearchSection id="Research" />

      <section id="about" className="px-6 py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          We are a team of passionate engineers and designers committed to
          creating innovative digital experiences.
        </p>
      </section>

      <section id="contact" className="bg-gray-700 px-6 py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-300 mb-6">
          Contact us to learn more or collaborate.
        </p>
        <a
          href="https://www.lab.kobe-u.ac.jp/csi-applied-optics/index.html"
          target="_blank"
          rel="noopener noeferrer"
        >
          <button className="bg-white text-gray-900 text-lg px-6 py-3 rounded-xl shadow-md hover:scale-105 transition">
            Contact Us
          </button>
        </a>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm">
        &copy; 2025 MyBrand. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
