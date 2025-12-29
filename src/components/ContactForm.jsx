import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="relative py-36 px-6 overflow-hidden
                 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100"
    >

      <div className="absolute -top-32 -right-32 w-[36rem] h-[36rem]
                      bg-sky-300/25 rounded-full blur-[220px]" />
      <div className="absolute bottom-[-30%] left-[-20%] w-[44rem] h-[44rem]
                      bg-indigo-400/25 rounded-full blur-[260px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2
                      w-[30rem] h-[30rem]
                      bg-cyan-300/20 rounded-full blur-[200px]" />

      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r
                   from-sky-200/20 via-cyan-200/20 to-indigo-200/20"
      />

      
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm uppercase tracking-widest text-blue-600">
            Reach Out
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-6">
            You’re Not Alone
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            If you or someone you care about is affected by cancer, we’re here
            to listen. Whether you have questions, need guidance, or simply want
            to share your thoughts reaching out is a strong first step.
          </p>

          <p className="text-gray-500 mb-10">
            This form is for awareness and support purposes only.
            No personal data is stored.
          </p>

          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="/contact.jpg"
            alt="Support and listening illustration"
            className="w-full max-w-sm mx-auto md:mx-0 rounded-xl"
          />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-10"
        >
          <form className="space-y-5">
            <div>
              <label className="block text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 border rounded focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 border rounded focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full p-3 border rounded focus:outline-none resize-none"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full bg-blue-600 text-white py-3 rounded-full text-lg
                         hover:bg-blue-700 transition shadow-sm"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
