"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Myheader from './components/header'
import MatterPortViewer from './feature/matterportviewer'

const ImageCard = ({ image, title, description, onClick }) => {
  return (
    <motion.div
      onClick={() => onClick({ image, title, description })}
      className="cursor-pointer bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

const ImageModal = ({ isOpen, onClose, data }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white text-black rounded-xl overflow-hidden max-w-md w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <img src={data.image} alt={data.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{data.title}</h3>
              <p className="text-gray-700">{data.description}</p>
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const HomePage = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const imageCards = [
    {
      image: '/s104.jpg',
      title: 'ミーティングルーム : S104',
      description: 'Cutting-edge solutions for a smarter world.'
    },
    {
      image: 's105.jpg',
      title: '居室 : S105',
      description: 'Sleek and modern user experiences that inspire.'
    },
    {
      image: 's106.jpg',
      title: '実験室 : S106',
      description: 'Fast, reliable, and scalable technologies.'
    },
    {
      image: 's107.jpg',
      title: '実験室 : S107',
      description: 'Fast, reliable, and scalable technologies.'
    }
  ]

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      <Myheader/>

      <MatterPortViewer/>

      <img src='../../public/s104.jpg'/>

      <section className="text-center py-15 px-6">
        <motion.h2 
          className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500"
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
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discover cutting-edge solutions crafted for innovators, creators, and visionaries.
        </motion.p>
      </section>

      <section id="features" className="grid md:grid-cols-3 gap-6 px-6 py-12">
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: item * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Feature {item}</h3>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.</p>
          </motion.div>
        ))}
      </section>

      <section className="px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Highlights</h2>
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
          We are a team of passionate engineers and designers committed to creating innovative digital experiences.
        </p>
      </section>

      <section id="contact" className="bg-gray-800 px-6 py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-300 mb-6">Contact us to learn more or collaborate.</p>
        <motion.button 
          className="bg-white text-gray-900 text-lg px-6 py-3 rounded-xl shadow-md hover:scale-105 transition"
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm">
        &copy; 2025 MyBrand. All rights reserved.
      </footer>
    </div>
  )
}

export default HomePage