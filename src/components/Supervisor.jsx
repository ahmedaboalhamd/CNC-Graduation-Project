import React from 'react';
import { motion } from 'framer-motion';
import { Award, Quote, GraduationCap, Users, UserCheck, Briefcase } from 'lucide-react';

const leaders = [
  {
    id: 1,
    name: "Prof. Dr. Mohamed Morsi El-Gohary",
    role: "University Dean",
    department: "Faculty of Engineering",
    quote: "Empowering our students to push the boundaries of modern engineering and applied sciences.",
    image: import.meta.env.BASE_URL + "team.images/University Dean.png",
    icon: <Briefcase className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 2,
    name: "Prof. Dr. Osama Elnahas",
    role: "Head of Department",
    department: "Mechatronics Dept.",
    quote: "This CNC project is a testament to the department's vision for practical, industry-ready education.",
    image: import.meta.env.BASE_URL + "team.images/Osama_el_naahas.png",
    icon: <Award className="w-6 h-6" />,
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 3,
    name: "Dr. Alexander Wright",
    role: "Project Supervisor",
    department: "Robotics & Automation",
    quote: "Guiding 30 students to build a full-scale CNC machine from scratch has been an extraordinary journey.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "from-primary-500 to-cyan-500"
  },
  {
    id: 4,
    name: "Eng. Omar Youssef",
    role: "Teaching Assistant",
    department: "Mechatronics Dept.",
    quote: "Supporting the team through complex technical challenges and witnessing their growth was deeply rewarding.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    icon: <UserCheck className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 5,
    name: "Ahmed Mahmoud Ali Al-Shalqami Al-Khatib",
    role: "Team Leader",
    department: "Graduation Class of 2026",
    quote: "Leading a brilliant team of 30 engineers to turn our graduation dream into a fully functional reality.",
    image: import.meta.env.BASE_URL + "team.images/Ahmed_team_leader.png",
    icon: <Users className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500"
  }
];

const LeadershipCard = ({ leader, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-[2rem] p-8 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
    >
      {/* Top Gradient Bar */}
      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${leader.color}`}></div>
      
      {/* Background Glow */}
      <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-r ${leader.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>

      <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-200/50 dark:text-white/5 group-hover:scale-110 transition-transform duration-300" />
      
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
        <div className="w-24 h-24 shrink-0 relative">
          <div className={`absolute inset-0 bg-gradient-to-tr ${leader.color} rounded-2xl animate-pulse blur-md opacity-40 dark:opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
          <img 
            src={leader.image} 
            alt={leader.name} 
            className="w-full h-full object-cover rounded-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className={`absolute -bottom-3 -right-3 bg-gradient-to-br ${leader.color} text-white p-2.5 rounded-xl z-20 shadow-lg border-2 border-white dark:border-dark-800 transform group-hover:rotate-12 transition-transform duration-300`}>
            {leader.icon}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">{leader.name}</h3>
          <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${leader.color} bg-opacity-10 dark:bg-opacity-20 text-slate-800 dark:text-slate-200 text-xs font-semibold tracking-wide uppercase mb-2`}>
            {leader.role}
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></span>
            {leader.department}
          </p>
        </div>
      </div>

      <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic flex-1 transition-colors duration-300 font-light text-lg">
        "{leader.quote}"
      </p>
    </motion.div>
  );
};

const Supervisor = () => {
  return (
    <section id="supervisor" className="pt-32 pb-24 bg-slate-50 dark:bg-dark-900 min-h-screen relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl mix-blend-screen transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl mix-blend-screen transition-colors duration-300" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Leadership & Supervision</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-cyan-500">Board</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg font-light leading-relaxed">
              The driving forces behind the scenes. Meet the exceptional individuals who supervised, guided, and led the CNC project to success.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Top Tier: Dean & Head of Dept */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {leaders.slice(0, 2).map((leader, index) => (
              <LeadershipCard key={leader.id} leader={leader} index={index} />
            ))}
          </div>
          
          {/* Second Tier: Supervisor, TA, Team Leader */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leaders.slice(2, 5).map((leader, index) => (
              <LeadershipCard key={leader.id} leader={leader} index={index + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supervisor;
