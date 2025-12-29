import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    text: "Hope is being able to see that there is light despite all of the darkness.",
    author: "Desmond Tutu",
  },
  {
    text: "Cancer may have started the fight, but I will finish it.",
    author: "Unknown",
  },
  {
    text: "You are stronger than you know, braver than you believe.",
    author: "A.A. Milne",
  },
  {
    text: "Once you choose hope, anything is possible.",
    author: "Christopher Reeve",
  },
];

export default function Quote() {
  const [index, setIndex] = useState(0);

  const nextQuote = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <section
      id="quotes"
      className="relative py-36 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-50"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-blue-200/30 blur-[140px] -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-blue-600 mb-6"
        >
          A moment of strength
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-14"
        >
          Words That Matter
        </motion.h2>

        <div className="relative glass-card px-8 py-12 md:px-14 md:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={quotes[index].text}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
            >
              <p className="quote-font text-2xl md:text-3xl italic text-gray-700 leading-relaxed mb-6">
                “{quotes[index].text}”
              </p>

              <p className="text-gray-500 text-lg">
                — {quotes[index].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={nextQuote}
          className="mt-14 bg-blue-600 text-white px-10 py-3 rounded-full text-lg
                     hover:bg-blue-700 transition shadow-sm"
        >
          Read another message
        </motion.button>
      </div>
    </section>
  );
}
