import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const inputClasses = `bg-[#1a1a2e] border-[#1E90FF] border-2 py-3 px-6 text-white rounded-lg
    w-full outline-none placeholder:text-gray-400 focus:border-[#39FF14] transition-all duration-300`;

  return (
    <motion.form
      variants={formVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      className="mt-12 flex flex-col gap-8 bg-[#0f0f2d]/60 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_30px_rgba(30,144,255,0.15)]"
    >
      <motion.div variants={itemVariants}>
        <label className="mb-2 block text-white font-medium">Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className={inputClasses}
          required
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <label className="mb-2 block text-white font-medium">Your Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={inputClasses}
          required
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <label className="mb-2 block text-white font-medium">Your Message</label>
        <textarea
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Let me know how I can help you..."
          className={`${inputClasses} resize-none`}
          required
        />
      </motion.div>

      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05, backgroundColor: '#FF2E8D' }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="bg-[#1E90FF] py-3 px-8 mb-2 rounded-xl text-white font-bold shadow-lg flex items-center justify-center gap-2 self-start"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
        <Send size={18} />
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;