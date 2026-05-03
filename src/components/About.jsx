import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle2, Zap, Settings, Cpu, Wifi } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6 text-primary-500" />,
      title: "High Precision",
      description: "Achieves micro-level accuracy in material cutting and engraving using advanced stepper motors."
    },
    {
      icon: <Wifi className="w-6 h-6 text-primary-500" />,
      title: "Smart Control",
      description: "Powered by a robust GRBL 1.1 Motherboard allowing for precise g-code parsing and seamless operation."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary-500" />,
      title: "Efficient Performance",
      description: "Optimized power distribution and advanced cooling mechanisms ensure long hours of stable operation."
    }
  ];

  return (
    <section id="about" className="pt-32 pb-24 bg-white dark:bg-dark-900 min-h-screen relative transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-cyan-500/20 mix-blend-overlay z-10"></div>
              <img 
                src={import.meta.env.BASE_URL + "cnc_machine.png"}
                alt="CNC Machine Action" 
                className="w-full object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl"></div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl hidden md:flex items-center gap-4 z-20 border-l-4 border-l-primary-500"
            >
              <div className="w-14 h-14 rounded-full bg-primary-500/10 flex items-center justify-center">
                <Cpu className="w-7 h-7 text-primary-500" />
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900 dark:text-white">100%</div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Custom Built</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Engineering the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-cyan-500">Future of Fabrication</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-10 leading-relaxed font-light">
              Our graduation project focuses on developing a low-cost, highly efficient CNC (Computer Numerical Control) machine. It addresses the growing need for accessible automated manufacturing tools in small-scale industries and educational institutions.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ x: 10 }}
                  className="flex gap-5 p-5 rounded-2xl glass-card transition-all duration-300 group"
                >
                  <div className="mt-1 bg-slate-50 dark:bg-dark-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-white/5 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 dark:border-white/10">
              {[
                "React & Tailwind", "GRBL 1.1 & G-Code", "WebSockets", "SolidWorks"
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium">
                  <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  </div>
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
