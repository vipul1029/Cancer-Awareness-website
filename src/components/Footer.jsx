import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden
                       bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100
                       pt-20 pb-10 px-6">
      
      {/* Background accents */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2
                      w-[28rem] h-[28rem]
                      bg-blue-300/20 rounded-full blur-[180px] -z-10" />
      <div className="absolute bottom-0 right-0
                      w-[22rem] h-[22rem]
                      bg-indigo-400/20 rounded-full blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-14">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Cancer Awareness
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Spreading awareness, encouraging early detection,
              and providing emotional support so no one faces cancer alone.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
              <li><a href="#dashboard" className="hover:text-blue-600 transition">Dashboard</a></li>
              <li><a href="#mission" className="hover:text-blue-600 transition">Mission</a></li>
              <li><a href="#awareness" className="hover:text-blue-600 transition">Awareness</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
            </ul>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Our Promise
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Awareness saves lives. Together, through compassion,
              education, and community, we create hope and strength.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-100 pt-6 flex flex-col sm:flex-row
                        items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Cancer Awareness. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built with care & purpose 💙
          </p>
        </div>
      </div>
    </footer>
  );
}
