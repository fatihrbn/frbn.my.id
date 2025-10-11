"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white px-6 text-center">
      {/* Logo or Initial */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-sky-300 mb-2 tracking-wide"
      >
        FRBN
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold mb-4"
      >
        Coming Soon
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-gray-400 max-w-2xl mb-8"
      >
        I’m currently crafting my new personal website. Something awesome is on the way 🚀
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="w-60 h-[2px] bg-sky-300 mb-8"
      />

      {/* Short Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-gray-300 mb-10 max-w-md"
      >
        Hi, I’m <span className="text-white font-medium">M. Fatih Rabbani</span> — a web developer & designer passionate about building clean, fast, and user-centered websites.
      </motion.p>

      {/* Contact / Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex gap-6 mb-12"
      >
        <a
          href="mailto:fatihrbbni@gmail.com"
          className="hover:text-cyan-400 transition-colors"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>
        <a
          href="https://github.com/fatihrbn"
          target="_blank"
          className="hover:text-cyan-400 transition-colors"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/m-fatih-rabbani/"
          target="_blank"
          className="hover:text-cyan-400 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
      
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-xs text-gray-600"
      >
        © {new Date().getFullYear()} M. Fatih Rabbani — Built with Next.js & Tailwind CSS
      </motion.footer>
    </main>
  );
}
