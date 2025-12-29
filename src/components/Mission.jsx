import { motion } from "framer-motion";

const missionPoints = [
  {
    title: "Educate",
    description:
      "Deliver clear, accessible, and reliable information to raise awareness about cancer, its risks, and the importance of early detection.",
  },
  {
    title: "Support",
    description:
      "Stand beside individuals and families with empathy, emotional encouragement, and guidance throughout their journey.",
  },
  {
    title: "Empower",
    description:
      "Inspire confidence, reduce stigma, and encourage timely medical action through knowledge and community strength.",
  },
];

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden
                 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100
                 py-20 px-6"
    >
      
      <div className="absolute -top-28 -left-28 w-[28rem] h-[28rem] bg-sky-300/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-[-25%] right-[-15%] w-[32rem] h-[32rem] bg-indigo-400/20 rounded-full blur-[180px]" />

      <motion.div
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r
                   from-sky-200/15 via-cyan-200/15 to-indigo-200/15"
      />

      <div className="relative max-w-7xl mx-auto
                      grid grid-cols-1 lg:grid-cols-2
                      gap-14 items-start">

        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm uppercase tracking-widest text-blue-600">
            Our Mission
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-6">
            Building Awareness,<br />
            Strengthening Lives
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Cancer affects emotional, social, and psychological well being.
            Our mission is to ensure no one feels unprepared or unsupported.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Through awareness and compassion, we help communities act early,
            support one another, and move forward with hope.
          </p>
        </motion.div>

      
        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-[2px] bg-blue-200/70" />

          <div className="space-y-10">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative flex gap-5"
              >
                
                <div className="relative z-10">
                  <div className="w-10 h-10 flex items-center justify-center
                                  rounded-full bg-blue-600 text-white
                                  font-semibold shadow">
                    {index + 1}
                  </div>
                </div>

                
                <div className="glass-card p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
