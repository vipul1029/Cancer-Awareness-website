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
      className="relative py-32 px-6 bg-white overflow-hidden"
    >
    
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-indigo-400 opacity-60" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

      
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm uppercase tracking-widest text-blue-600">
            Our Mission
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-8">
            Building Awareness,<br />Strengthening Lives
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Cancer is not only a medical condition it affects emotional,
            social, and psychological well-being. Our mission is to ensure that
            no one feels unprepared or unsupported when facing this challenge.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Through awareness, compassion, and collective action, we strive to
            create informed communities where early detection is encouraged,
            support is accessible, and hope is never lost.
          </p>
        </motion.div>

        
        <div className="relative">
          
          <div className="absolute left-5 top-0 h-full w-[2px] bg-blue-200" />

          <div className="space-y-14">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                className="relative flex gap-6"
              >
                
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold z-10">
                  {index + 1}
                </div>

                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
