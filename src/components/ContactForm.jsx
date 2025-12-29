import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="relative py-36 px-6 bg-white overflow-hidden"
    >
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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

          <img
            src="/contact.jpg"
            alt="Support and listening illustration"
            className="w-full max-w-sm mx-auto md:mx-0"
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
