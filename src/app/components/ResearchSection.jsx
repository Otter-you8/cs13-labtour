"use client";
import React, { useState } from "react";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";

const imageCards = [
  {
    image: "fluorescentcells.jpg",
    title: "バイオイメージング",
    summary: "バイオイメージング ー生命の可視化技術ー",
    description:
      "バイオイメージングは、顕微鏡や光学計測技術を用いて、生きた細胞や組織、さらには分子レベルの構造や動態を可視化する最先端の研究分野です。我々の研究室では蛍光顕微鏡、共焦点顕微鏡、2光子顕微鏡などの先進的な光学技術、蛍光技術、そしてマルチモーダル手法を駆使することで、生きた細胞や組織、生体プロセスを高精度にリアルタイムで観察できます。これにより、細胞動態、疾患メカニズム、分子間相互作用をこれまでになく鮮明に解明し、生命科学の新たな可能性を切り拓いています",
  },
  {
    image: "beads.jpg",
    title: "散乱イメージング",
    summary: "散乱イメージング ー光で可視化する隠れた構造ー",
    description: "散乱イメージングは、光が複雑または不透明な物質と相互作用し、散乱される様子を解析することで、従来の観察手法では捉えられない内部構造や微細な特徴を可視化する技術です。得られた散乱光の情報を数理的に再構成することで、物質内部の隠れた構造や性質を非侵襲的に明らかにできます。この手法は、生体組織や微細構造、さらには複雑な人工材料をその自然な状態で解析するのに有効であり、医療診断から材料科学まで幅広い分野で活用されています。私たちの研究室では、高感度な光学計測と高度なデータ解析を組み合わせ、光が伝える「見えない情報」を読み解くことで、新しい観察・解析の可能性を拓いています。",
  },
  {
    image: "quantum.jpg",
    title: "量子イメージング",
    summary: "量子イメージング ー光の量子性による新たな可視化技術ー",
    description: "量子イメージングは、量子もつれや単一光子干渉といった量子物理の特性を利用し、古典的な光学の限界を超えた観察を可能にする革新的な技術です。量子状態の光を用いることで、極めて低い光量でも高感度な検出が可能となり、対象と直接相互作用しない光からでも画像を再構成することができます。これにより、医療診断における被曝低減、暗所や高ノイズ環境での高精度観察、さらにはセキュリティや材料科学分野における新しい解析手法の実現が期待されています。私たちの研究室では、量子光源と先進的な計測・解析技術を組み合わせ、これまで不可能だった可視化を現実のものとしています。",
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
