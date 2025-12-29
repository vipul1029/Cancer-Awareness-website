import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden
                 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100
                 py-24"
    >
   
      <div className="absolute -top-32 -left-32 w-[42rem] h-[42rem] bg-sky-300/20 rounded-full blur-[220px]" />
      <div className="absolute bottom-[-30%] right-[-18%] w-[46rem] h-[46rem] bg-indigo-400/20 rounded-full blur-[260px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-cyan-300/18 rounded-full blur-[200px]" />

      <motion.div
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r
                   from-sky-200/15 via-cyan-200/15 to-indigo-200/15"
      />

      <div className="relative max-w-7xl mx-auto px-6
                      grid grid-cols-1 lg:grid-cols-2
                      gap-20 items-center">

      
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 mb-5
                          px-4 py-2 rounded-full
                          bg-blue-100 text-blue-700
                          text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Cancer Awareness & Support Initiative
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl
                         font-extrabold text-gray-900
                         leading-tight mb-6">
            Awareness is the <br />
            <span className="text-blue-600">First Step</span> <br />
            Toward Saving Lives
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mb-10 leading-relaxed">
            We believe cancer awareness is more than information
            it’s about early action, emotional strength, and standing together
            so no one faces the journey alone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="#mission"
              className="px-8 py-3 rounded-full
                         bg-blue-600 text-white
                         text-lg font-semibold
                         shadow-md shadow-blue-600/25
                         hover:bg-blue-700 transition"
            >
              Discover Our Mission
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="px-8 py-3 rounded-full
                         border-2 border-blue-500
                         text-blue-600 text-lg font-semibold
                         hover:bg-blue-50 transition"
            >
              Talk to Someone
            </motion.a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-lg text-sm text-gray-500">
            <div>
              <p className="text-xl font-bold text-gray-800">Early</p>
              <p>Detection Focus</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800">Emotional</p>
              <p>Support Driven</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800">Community</p>
              <p>Centered Care</p>
            </div>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="absolute -inset-10 bg-blue-400/20
                          rounded-full blur-[180px] -z-10" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative glass-card p-5"
          >
            <img
              src="/HeroPagePic.jpg"
              alt="Cancer awareness and community support"
              className="w-full max-w-md rounded-2xl"
            />

            <div className="absolute bottom-4 left-4
                            px-4 py-2 rounded-full
                            bg-white/80 backdrop-blur
                            text-sm text-gray-700 shadow">
              Supporting patients & families
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
