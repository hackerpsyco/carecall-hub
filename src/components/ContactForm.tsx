import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const inputClasses =
    'w-full bg-transparent border-b border-border px-0 py-3 text-foreground text-sm placeholder:text-muted-foreground outline-none focus:border-foreground transition-colors duration-300';

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="block text-foreground-muted text-xs font-mono tracking-wider uppercase mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className="block text-foreground-muted text-xs font-mono tracking-wider uppercase mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className="block text-foreground-muted text-xs font-mono tracking-wider uppercase mb-2">Message</label>
        <textarea
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          className={`${inputClasses} resize-none`}
          required
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        disabled={loading}
        className="px-8 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm flex items-center gap-2 hover:opacity-85 transition-opacity disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Message'}
        <ArrowUpRight size={16} />
      </motion.button>
    </form>
  );
};

export default ContactForm;
