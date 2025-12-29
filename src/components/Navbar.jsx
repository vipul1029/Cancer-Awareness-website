import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Mission", href: "#mission" },
  { name: "Awareness", href: "#awareness" },
  { name: "Impact", href: "#impact" },
  { name: "Quotes", href: "#quotes" },
  { name: "Contact", href: "#contact" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        fixed top-0 w-full z-50
        bg-gradient-to-r from-white/80 via-blue-50/70 to-white/80
        backdrop-blur-xl
        border-b border-blue-100
        shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

     
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
         
          <div className="relative">
           
            <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-md" />

            
            <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 p-[2px]">
              
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-sm">
                <img
                  src="/logo.jpg"
                  alt="Cancer Awareness Logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div>
          </div>

          
          <div className="leading-tight">
            <span className="block text-xl font-bold tracking-wide text-blue-600">
              Cancer Awareness
            </span>
            <span className="block text-xs text-gray-500">
              Care • Support • Hope
            </span>
          </div>
        </motion.div>

        
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <a
                href={link.href}
                className="
                  text-gray-700 font-medium
                  transition-colors duration-300
                  group-hover:text-blue-600
                "
              >
                {link.name}
              </a>

            
              <span
                className="
                  absolute left-0 -bottom-1
                  h-[2px] w-0
                  bg-blue-600
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </motion.li>
          ))}
        </ul>

        
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

    
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-lg border-t border-blue-100"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 font-medium hover:text-blue-600 transition"
                >
                  {link.name}
                </a>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

