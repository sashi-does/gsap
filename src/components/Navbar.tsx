"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);




  const toggleMenu = () => setIsOpen((prev) => !prev);

  const contactContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut", 
      },
    },
  };

  const contactItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <nav className="animate-slideDown fixed top-0 right-0 z-50 p-6 flex items-center space-x-4 pointer-events-none ">
  <button
    onClick={toggleMenu}
    className="flex cursor-pointer items-center space-x-3 group mix-blend-difference pointer-events-auto"
  >
    <span className="tracking-widest text-sm text-white">CONTACT</span>
    <div className="relative w-6 h-4">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        className="absolute w-full h-[2px] bg-white left-0 top-0 origin-center"
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        className="absolute w-full h-[2px] bg-white left-0 top-1/2 transform -translate-y-1/2"
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        className="absolute w-full h-[2px] bg-white left-0 bottom-0 origin-center"
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </div>
  </button>
</nav>



      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#000] text-white z-40 flex flex-col justify-center items-center px-6"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center max-w-xl space-y-6"
            >
              <p className="text-lg">
                Formerly known as SOREN WEST, Brilliant Work is a collective of
                some of the most influential creatives and producers in
                experiential and live entertainment.
              </p>
              <p className="text-lg">
                Our senior leadership team have over 20 years of experience in
                crafting world class productions, having held leadership roles
                at MSG, Obscura, Vita Motus, and more.
              </p>
              <p className="text-lg">
                We are excited to bring your vision to life with our expertise
                and passion for excellence.
              </p>

              <motion.div
                className="space-y-2 mt-6"
                variants={contactContainer as any}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.h2
                  className="text-3xl font-bold"
                  variants={contactItem as any}
                  transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
                >
                  +310-387-7235
                </motion.h2>
                <motion.h2
                  className="text-3xl font-serif"
                  variants={contactItem as any}
                >
                  HELLO@OURBRILLIANTWORK.COM
                </motion.h2>
                <motion.h2
                  className="text-2xl font-bold"
                  variants={contactItem as any}
                >
                  FOLLOW @OURBRILLIANTWORK
                </motion.h2>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 justify-center mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {["Schedule a Call", "Send a Message", "LinkedIn"].map(
                  (text, index) => (
                    <button
                      key={index}
                      className="border px-5 py-3 text-sm tracking-wide uppercase hover:bg-white hover:text-black transition"
                    >
                      {text}
                    </button>
                  )
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
