import { motion } from "framer-motion";

export default function Impact() {
  return (
    <section
      id="impact"
      className="relative py-32 bg-white px-6 overflow-hidden"
    >
    
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

       
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
       
          <div className="absolute -inset-6 bg-blue-200/30 rounded-full blur-3xl -z-10" />

         
          <div className="glass-card p-4">
            <img
              src="/Impact.jpg"
              alt="Community cancer support"
              className="w-full max-w-md rounded-xl"
            />
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm uppercase tracking-widest text-blue-600">
            Our Impact
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-6">
            Supporting Beyond Treatment
          </h2>

          <p className="text-gray-600 text-lg mb-6">
            Cancer is not just a medical journey — it is emotional,
            psychological, and social. True healing comes from awareness,
            compassion, and strong community support.
          </p>

        
          <ul className="space-y-3 text-gray-600 text-lg">
            <li>• Emotional and mental well-being support</li>
            <li>• Awareness-driven early action</li>
            <li>• Community strength and shared hope</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
