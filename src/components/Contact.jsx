import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="pt-32 pb-24 bg-slate-50 dark:bg-dark-900 min-h-screen relative transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Connect With Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-cyan-500">Touch</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg font-light leading-relaxed">
              Have questions about our project or interested in collaboration? Reach out to us.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-colors"></div>
              <div className="w-14 h-14 bg-white dark:bg-dark-900 shadow-md rounded-2xl flex items-center justify-center text-primary-500 mb-6 relative z-10 border border-slate-100 dark:border-white/5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 relative z-10">University Location</h3>
              <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed relative z-10">Faculty of Engineering<br/>Mechatronics Department<br/>Building B, 3rd Floor</p>
            </div>

            <div className="glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-colors"></div>
              <div className="w-14 h-14 bg-white dark:bg-dark-900 shadow-md rounded-2xl flex items-center justify-center text-cyan-500 mb-6 relative z-10 border border-slate-100 dark:border-white/5">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 relative z-10">Email Address</h3>
              <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed relative z-10">cnc.project2026@university.edu<br/>contact@cncmaster.io</p>
            </div>
            
            <div className="glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-colors"></div>
              <div className="w-14 h-14 bg-white dark:bg-dark-900 shadow-md rounded-2xl flex items-center justify-center text-primary-500 mb-6 relative z-10 border border-slate-100 dark:border-white/5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 relative z-10">Phone Number</h3>
              <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed relative z-10">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 glass-card p-8 md:p-12 rounded-[2.5rem]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300 uppercase">Your Name</label>
                  <input type="text" className="w-full bg-white/50 dark:bg-dark-900/50 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300 uppercase">Email Address</label>
                  <input type="email" className="w-full bg-white/50 dark:bg-dark-900/50 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300 uppercase">Subject</label>
                <input type="text" className="w-full bg-white/50 dark:bg-dark-900/50 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300" placeholder="Project Inquiry" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300 uppercase">Message</label>
                <textarea rows="5" className="w-full bg-white/50 dark:bg-dark-900/50 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all resize-none duration-300" placeholder="Type your message here..."></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-primary-600 to-cyan-500 hover:from-primary-500 hover:to-cyan-400 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl shadow-primary-500/25 mt-8">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
