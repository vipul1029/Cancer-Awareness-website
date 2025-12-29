import { motion } from "framer-motion";

export default function Impact() {
  return (
    <section
      id="impact"
      className="
        relative py-28 px-6 overflow-hidden
        bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100
      "
    >
      
      <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-sky-300/25 rounded-full blur-[220px]" />
      <div className="absolute bottom-[-25%] right-[-20%] w-[34rem] h-[34rem] bg-indigo-400/25 rounded-full blur-[260px]" />

      <motion.div
        animate={{ opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r
                   from-sky-200/20 via-cyan-200/20 to-indigo-200/20"
      />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="absolute -inset-10 bg-blue-400/25 rounded-full blur-[180px] -z-10" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card p-5"
          >
            <img
              src="/Impact.jpg"
              alt="Community cancer support"
              className="w-full max-w-md rounded-2xl"
            />
          </motion.div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="text-sm uppercase tracking-widest text-blue-600">
            Our Impact
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-6">
            Supporting Beyond Treatment
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
            Cancer is not just a medical journey it affects emotional,
            psychological, and social well being. Our focus is on building
            awareness, compassion, and long term support systems.
          </p>

          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-blue-600" />
              <p className="text-gray-600 text-lg">
                Emotional and mental well being support
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-blue-600" />
              <p className="text-gray-600 text-lg">
                Awareness-driven early action
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-blue-600" />
              <p className="text-gray-600 text-lg">
                Community strength and shared hope
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
