import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const donationData = [
  { month: "Jan", amount: 12000 },
  { month: "Feb", amount: 18000 },
  { month: "Mar", amount: 15000 },
  { month: "Apr", amount: 22000 },
  { month: "May", amount: 26000 },
];

export default function DonationDashboard() {
  const totalDonations = donationData.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const donorsCount = 142;

  return (
    <section
      id="dashboard"
      className="relative py-24 px-6 overflow-hidden
                 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100"
    >
    
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-20%] right-[-15%] w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-300/15 rounded-full blur-3xl" />

      <motion.div
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r
                   from-sky-200/15 via-cyan-200/15 to-indigo-200/15"
      />

      <div className="relative max-w-6xl mx-auto">

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-widest text-blue-600">
            Transparency & Impact
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3 mb-4">
            Donation Tracking Dashboard
          </h2>

          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            A transparent overview of contributions supporting awareness
            initiatives and community care.
          </p>
        </motion.div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <motion.div
            whileHover={{ y: -6 }}
            className="glass-card p-8 text-center"
          >
            <p className="text-sm text-gray-500 mb-2">
              Total Donations
            </p>
            <p className="text-3xl md:text-4xl font-bold text-blue-600">
              ₹{totalDonations.toLocaleString()}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="glass-card p-8 text-center"
          >
            <p className="text-sm text-gray-500 mb-2">
              Total Donors
            </p>
            <p className="text-3xl md:text-4xl font-bold text-blue-600">
              {donorsCount}
            </p>
          </motion.div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-8"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Monthly Donation Trends
          </h3>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={donationData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
