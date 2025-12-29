import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen px-6 pt-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Together, We Can <br />
            <span className="text-blue-600">Fight Cancer</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Empowering individuals through awareness, early detection,
            emotional strength, and compassionate community support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#mission"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg
                         hover:bg-blue-700 transition"
            >
              Learn Our Mission
            </a>

            <a
              href="#contact"
              className="border border-blue-500 text-blue-600 px-8 py-3 rounded-full text-lg
                         hover:bg-blue-50 transition"
            >
              Get Support
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="absolute -inset-6 bg-blue-200/30 rounded-full blur-3xl -z-10" />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass-card p-4"
          >
            <img
              src="/HeroPagePic.jpg"
              alt="Cancer awareness and support"
              className="w-full max-w-md rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
