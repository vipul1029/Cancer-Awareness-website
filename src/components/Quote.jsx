import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Quote() {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://zenquotes.io/api/random");
      const data = await res.json();
      setQuote({
        text: data[0].q,
        author: data[0].a,
      });
    } catch {
      setQuote({
        text: "Hope is being able to see that there is light despite all of the darkness.",
        author: "Desmond Tutu",
      });
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

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
            {quote && (
              <motion.div
                key={quote.text}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
              >
                <p className="quote-font text-2xl md:text-3xl italic text-gray-700 leading-relaxed mb-6">
                  “{quote.text}”
                </p>

                <p className="text-gray-500 text-lg">
                  — {quote.author}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={fetchQuote}
          className="mt-14 bg-blue-600 text-white px-10 py-3 rounded-full text-lg
                     hover:bg-blue-700 transition shadow-sm"
        >
          Read another message
        </motion.button>
      </div>
    </section>
  );
}
