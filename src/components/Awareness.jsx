import { motion } from "framer-motion";

const awarenessData = [
  {
    title: "Early Detection",
    icon: "public/icon1.svg",
    description:
      "Regular screenings and early diagnosis significantly improve survival rates. Awareness helps people recognize symptoms and seek medical help sooner.",
  },
  {
    title: "Emotional & Mental Support",
    icon: "public/icon2.svg",
    description:
      "Cancer affects mental health as much as physical health. Emotional support, counseling, and community care play a vital role in recovery.",
  },
  {
    title: "Healthy Lifestyle Choices",
    icon: "public/icon3.svg",
    description:
      "Balanced nutrition, physical activity, and avoiding harmful habits can reduce cancer risk and support overall well-being.",
  },
];

export default function Awareness() {
  return (
    <section
      id="awareness"
      className="relative py-28 bg-blue-50 px-6 overflow-hidden"
    >
      
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-40 -z-10" />

    
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="section-title">
          Why Cancer Awareness Matters
        </h2>
        <p className="section-text">
          Awareness empowers individuals with knowledge, encourages early
          action, and builds a supportive community that stands together
          against cancer.
        </p>
      </motion.div>

    
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {awarenessData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="glass-card p-8 text-center"
          >
            
            <img
              src={item.icon}
              alt={item.title}
              className="w-14 h-14 mx-auto mb-6"
            />

            
            <span className="inline-block mb-3 text-sm font-semibold text-blue-600">
              0{index + 1}
            </span>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>

           
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
