import React from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '../data/projectData';

const Gallery = () => {
  return (
    <section id="gallery" className="pt-32 pb-24 bg-white dark:bg-dark-800 min-h-screen relative transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Visual Journey</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-cyan-500">Gallery</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg font-light leading-relaxed">
              Visual documentation of our design process, implementation stages, and final machine build.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
              className={`rounded-[2rem] overflow-hidden glass-card group relative ${index === 0 ? 'md:col-span-2 lg:col-span-2 row-span-2' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              {img.type === 'video' ? (
                <video 
                  src={img.url} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  controls
                  className="w-full h-full object-contain min-h-[300px] bg-black transform group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <img 
                  src={img.url || img} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover min-h-[300px] transform group-hover:scale-110 transition-transform duration-700"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
