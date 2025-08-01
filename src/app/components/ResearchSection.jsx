"use client";
import React, { useState } from "react";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";

const imageCards = [
  {
    image: "fluorescentcells.jpg",
    title: "バイオイメージング",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "beads.jpg",
    title: "散乱イメージング",
    description: "Sleek and modern user experiences that inspire.",
  },
  {
    image: "quantum.jpg",
    title: "量子イメージング",
    description: "Fast, reliable, and scalable technologies.",
  },
];

const ResearchSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
    setIsModalOpen(true);
  };

  return (
    <section id="Research" className="px-6 py-12">
      <h2 className="text-5xl font-medium text-center mb-8">Research</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {imageCards.map((card, index) => (
          <ImageCard key={index} {...card} onClick={handleCardClick} />
        ))}
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedCard || {}}
      />
    </section>
  );
};

export default ResearchSection;
