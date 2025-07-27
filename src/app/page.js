"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Myheader from "./components/header";
import MatterPortViewer from "./feature/matterportviewer";
import RoomDescription from "./components/RoomDescription";
import ImageCard from "./components/ImageCard";
import ImageModal from "./components/ImageModal";

const HomePage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
    setIsModalOpen(true);
  };

  const rooms = [
    {
      number: "s104",
      title: "Meeting Room：S104",
      description:
        "ミーティングルームとして使用しています。大型のディスプレイがあり、電子黒板やプレゼンテーション表示などに使えます。壁一面の本棚には、専門書や過去の論文が入っています。畳もあり、休憩に寝転がったり自由に使うことができます。",
      image: "/s104.jpg",
      reverse: false,
    },
    {
      number: "s105",
      title: "Student Room：S105",
      description:
        "ミーティングルームとして使用しています。大型のディスプレイがあり、電子黒板やプレゼンテーション表示などに使えます。壁一面の本棚には、専門書や過去の論文が入っています。畳もあり、休憩に寝転がったり自由に使うことができます。",
      image: "/s105.jpg",
      reverse: true,
    },
    {
      number: "s106",
      title: "Laboratory：S106",
      description:
        "ミーティングルームとして使用しています。大型のディスプレイがあり、電子黒板やプレゼンテーション表示などに使えます。壁一面の本棚には、専門書や過去の論文が入っています。畳もあり、休憩に寝転がったり自由に使うことができます。",
      image: "/s106.jpg",
      reverse: false,
    },
    {
      number: "s107",
      title: "Laboratory：S107",
      description:
        "ミーティングルームとして使用しています。大型のディスプレイがあり、電子黒板やプレゼンテーション表示などに使えます。壁一面の本棚には、専門書や過去の論文が入っています。畳もあり、休憩に寝転がったり自由に使うことができます。",
      image: "/s107.jpg",
      reverse: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white font-sans">
      <Myheader />

      <section className="bg-[url('/opticsmain.jpg')] bg-cover h-100 flex items-center justify-center">
        <motion.div
          className=" border-white bg-black/70 border-4 text-center px-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          <motion.h2
            className="text-5xl font-extrabold my-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            Welcome to our virtual lab tour!
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.0 }}
          >
            Discover cutting-edge solutions crafted for innovators, creators,
            and visionaries.
          </motion.p>
        </motion.div>
      </section>

      <MatterPortViewer />

      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-8">
        <div className="flex justify-center pt-20">
          <h1 className="text-center text-5xl">システム情報学研究棟：1F</h1>
        </div>

        {rooms.map((room, index) => {
          return <RoomDescription key={index} {...room} />;
        })}
      </section>

      <section id="Our Misson" className=""></section>

      <section id="Research" className="px-6 py-12">
        <h2 className="text-5xl font-bold text-center mb-8">Research</h2>
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
