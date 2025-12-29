import { motion } from "framer-motion";

const awarenessData = [
  {
    title: "Early Detection",
    icon: "icon1.svg",
    description:
      "Regular screenings and early diagnosis significantly improve survival rates. Awareness helps people recognize symptoms and seek medical help sooner.",
  },
  {
    title: "Emotional & Mental Support",
    icon: "icon2.svg",
    description:
      "Cancer affects mental health as much as physical health. Emotional support, counseling, and community care play a vital role in recovery.",
  },
  {
    title: "Healthy Lifestyle Choices",
    icon: "icon3.svg",
    description:
      "Balanced nutrition, physical activity, and avoiding harmful habits can reduce cancer risk and support overall well-being.",
  },
];

export default function Awareness() {
  return (
    <section
      id="awareness"
      className="relative overflow-hidden
                 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100
                 py-20 px-6"
    >
      
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-sky-300/20 rounded-full blur-[180px]" />
      <div className="absolute bottom-[-25%] right-[-20%] w-[32rem] h-[32rem] bg-indigo-400/20 rounded-full blur-[200px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[22rem] h-[22rem] bg-cyan-300/15 rounded-full blur-[160px]" />

      <motion.div
        animate={{ opacity: [0.22, 0.35, 0.22] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r
                   from-sky-200/15 via-cyan-200/15 to-indigo-200/15"
      />

      <div className="relative max-w-6xl mx-auto">

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-sm uppercase tracking-widest text-blue-600">
            Awareness & Education
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Why Cancer Awareness Matters
          </h2>

          <p className="text-gray-600 text-lg">
            Awareness empowers individuals with knowledge, encourages early
            action, and builds a compassionate community.
          </p>
        </motion.div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awarenessData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 text-center relative"
            >
              <div className="absolute inset-0 bg-blue-200/10 rounded-2xl blur-xl -z-10" />

              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center
                              rounded-full bg-blue-100">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-7 h-7"
                />
              </div>

              <span className="inline-block mb-2 text-sm font-semibold text-blue-600">
                Step 0{index + 1}
              </span>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
