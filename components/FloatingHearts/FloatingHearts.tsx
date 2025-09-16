'use client'
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  return (
    <>
      {/* Global floating hearts scattered throughout the ENTIRE page - LOTS MORE! */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        {/* TOP ROW - More hearts across the top */}
        <motion.div 
          className="absolute left-[3%] top-[5%] float-anim" 
          animate={{ y: [0, -40, 0] }} 
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Heart className="floating-heart text-yellow-400" fill="none" />
        </motion.div>
       
        <motion.div 
          className="absolute left-[92%] top-[13%] drift-right" 
          animate={{ x: [0, 15, 0], y: [0, -16, 0] }} 
          transition={{ duration: 4.2, repeat: Infinity, delay: 2.5 }}
        >
          <Heart className="floating-heart-tiny text-pink-300" fill="none" />
        </motion.div>

        {/* UPPER-MIDDLE ROW */}
        <motion.div 
          className="absolute left-[7%] top-[18%] drift-left" 
          animate={{ x: [0, -20, 0], y: [0, -20, 0] }} 
          transition={{ duration: 5.5, repeat: Infinity, delay: 0.7 }}
        >
          <Heart className="floating-heart-small text-red-400" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[18%] top-[22%] float-anim-tiny" 
          animate={{ y: [0, -18, 0] }} 
          transition={{ duration: 4.2, repeat: Infinity, delay: 1.4 }}
        >
          <Heart className="floating-heart-tiny text-pink-300" fill="none" />
        </motion.div>
       
        <motion.div 
          className="absolute left-[88%] top-[25%] float-anim-small" 
          animate={{ y: [0, -22, 0] }} 
          transition={{ duration: 4.4, repeat: Infinity, delay: 2.8 }}
        >
          <Heart className="floating-heart-small text-rose-400" fill="none" />
        </motion.div>

        {/* MIDDLE ROW */}
        <motion.div 
          className="absolute left-[2%] top-[32%] float-anim-tiny" 
          animate={{ y: [0, -16, 0] }} 
          transition={{ duration: 3.7, repeat: Infinity, delay: 1.9 }}
        >
          <Heart className="floating-heart-tiny text-yellow-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[15%] top-[35%] drift-right" 
          animate={{ x: [0, 18, 0], y: [0, -21, 0] }} 
          transition={{ duration: 5.3, repeat: Infinity, delay: 0.4 }}
        >
          <Heart className="floating-heart-small text-pink-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[25%] top-[38%] float-anim" 
          animate={{ y: [0, -38, 0] }} 
          transition={{ duration: 6.8, repeat: Infinity, delay: 1.6 }}
        >
          <Heart className="floating-heart text-rose-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[38%] top-[33%] float-anim-small" 
          animate={{ y: [0, -24, 0] }} 
          transition={{ duration: 4.6, repeat: Infinity, delay: 2.4 }}
        >
          <Heart className="floating-heart-small text-red-400" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[50%] top-[37%] drift-left" 
          animate={{ x: [0, -22, 0], y: [0, -17, 0] }} 
          transition={{ duration: 5.7, repeat: Infinity, delay: 0.8 }}
        >
          <Heart className="floating-heart-tiny text-yellow-400" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[63%] top-[34%] float-anim-tiny" 
          animate={{ y: [0, -13, 0] }} 
          transition={{ duration: 3.6, repeat: Infinity, delay: 1.3 }}
        >
          <Heart className="floating-heart-tiny text-pink-400" fill="none" />
        </motion.div>
     
        <motion.div 
          className="absolute left-[94%] top-[40%] float-anim-small" 
          animate={{ y: [0, -27, 0] }} 
          transition={{ duration: 4.9, repeat: Infinity, delay: 1.5 }}
        >
          <Heart className="floating-heart-small text-pink-300" fill="none" />
        </motion.div>

        {/* LOWER-MIDDLE ROW */}
        <motion.div 
          className="absolute left-[12%] top-[45%] drift-left" 
          animate={{ x: [0, -15, 0], y: [0, -25, 0] }} 
          transition={{ duration: 5.8, repeat: Infinity, delay: 0.9 }}
        >
          <Heart className="floating-heart-tiny text-purple-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[28%] top-[48%] float-anim-small" 
          animate={{ y: [0, -30, 0] }} 
          transition={{ duration: 4.7, repeat: Infinity, delay: 1.2 }}
        >
          <Heart className="floating-heart-small text-orange-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[45%] top-[52%] drift-right" 
          animate={{ x: [0, 20, 0], y: [0, -18, 0] }} 
          transition={{ duration: 5.1, repeat: Infinity, delay: 2.1 }}
        >
          <Heart className="floating-heart-tiny text-emerald-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[67%] top-[49%] float-anim" 
          animate={{ y: [0, -35, 0] }} 
          transition={{ duration: 6.2, repeat: Infinity, delay: 0.6 }}
        >
          <Heart className="floating-heart text-blue-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[82%] top-[46%] float-anim-tiny" 
          animate={{ y: [0, -12, 0] }} 
          transition={{ duration: 3.9, repeat: Infinity, delay: 1.8 }}
        >
          <Heart className="floating-heart-tiny text-indigo-300" fill="none" />
        </motion.div>

        {/* LOWER ROW */}
        <motion.div 
          className="absolute left-[8%] top-[58%] float-anim-small" 
          animate={{ y: [0, -28, 0] }} 
          transition={{ duration: 4.8, repeat: Infinity, delay: 0.3 }}
        >
          <Heart className="floating-heart-small text-teal-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[22%] top-[62%] drift-left" 
          animate={{ x: [0, -18, 0], y: [0, -22, 0] }} 
          transition={{ duration: 5.4, repeat: Infinity, delay: 1.7 }}
        >
          <Heart className="floating-heart-tiny text-violet-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[40%] top-[65%] float-anim" 
          animate={{ y: [0, -42, 0] }} 
          transition={{ duration: 7.1, repeat: Infinity, delay: 0.8 }}
        >
          <Heart className="floating-heart text-cyan-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[58%] top-[61%] drift-right" 
          animate={{ x: [0, 25, 0], y: [0, -20, 0] }} 
          transition={{ duration: 6.3, repeat: Infinity, delay: 2.4 }}
        >
          <Heart className="floating-heart-small text-lime-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[75%] top-[59%] float-anim-tiny" 
          animate={{ y: [0, -15, 0] }} 
          transition={{ duration: 4.1, repeat: Infinity, delay: 1.1 }}
        >
          <Heart className="floating-heart-tiny text-amber-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[89%] top-[63%] float-anim-small" 
          animate={{ y: [0, -26, 0] }} 
          transition={{ duration: 5.2, repeat: Infinity, delay: 0.4 }}
        >
          <Heart className="floating-heart-small text-red-300" fill="none" />
        </motion.div>

        {/* BOTTOM ROW */}
        <motion.div 
          className="absolute left-[5%] top-[75%] drift-right" 
          animate={{ x: [0, 22, 0], y: [0, -19, 0] }} 
          transition={{ duration: 6.7, repeat: Infinity, delay: 1.3 }}
        >
          <Heart className="floating-heart-tiny text-fuchsia-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[20%] top-[78%] float-anim" 
          animate={{ y: [0, -45, 0] }} 
          transition={{ duration: 7.8, repeat: Infinity, delay: 2.2 }}
        >
          <Heart className="floating-heart text-sky-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[35%] top-[82%] float-anim-small" 
          animate={{ y: [0, -33, 0] }} 
          transition={{ duration: 5.6, repeat: Infinity, delay: 0.7 }}
        >
          <Heart className="floating-heart-small text-green-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[52%] top-[79%] drift-left" 
          animate={{ x: [0, -24, 0], y: [0, -21, 0] }} 
          transition={{ duration: 6.1, repeat: Infinity, delay: 1.6 }}
        >
          <Heart className="floating-heart-tiny text-slate-400" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[68%] top-[76%] float-anim-tiny" 
          animate={{ y: [0, -17, 0] }} 
          transition={{ duration: 4.3, repeat: Infinity, delay: 0.2 }}
        >
          <Heart className="floating-heart-tiny text-orange-400" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[84%] top-[81%] float-anim" 
          animate={{ y: [0, -38, 0] }} 
          transition={{ duration: 6.9, repeat: Infinity, delay: 2.7 }}
        >
          <Heart className="floating-heart text-purple-400" fill="none" />
        </motion.div>

        {/* Additional floating hearts for visual density at the bottom */}
        <motion.div 
          className="absolute left-[10%] top-[90%] float-anim-tiny" 
          animate={{ y: [0, -14, 0] }} 
          transition={{ duration: 3.7, repeat: Infinity, delay: 0.5 }}
        >
          <Heart className="floating-heart-tiny text-rose-400" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[25%] top-[94%] drift-right" 
          animate={{ x: [0, 16, 0], y: [0, -23, 0] }} 
          transition={{ duration: 5.9, repeat: Infinity, delay: 1.8 }}
        >
          <Heart className="floating-heart-small text-yellow-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[37%] top-[91%] float-anim-small" 
          animate={{ y: [0, -31, 0] }} 
          transition={{ duration: 5.4, repeat: Infinity, delay: 0.9 }}
        >
          <Heart className="floating-heart-small text-pink-400" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[49%] top-[96%] float-anim" 
          animate={{ y: [0, -40, 0] }} 
          transition={{ duration: 7.4, repeat: Infinity, delay: 1.9 }}
        >
          <Heart className="floating-heart text-red-300" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[61%] top-[92%] drift-left" 
          animate={{ x: [0, -19, 0], y: [0, -25, 0] }} 
          transition={{ duration: 6.5, repeat: Infinity, delay: 2.3 }}
        >
          <Heart className="floating-heart-tiny text-emerald-400" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[73%] top-[97%] float-anim-small" 
          animate={{ y: [0, -32, 0] }} 
          transition={{ duration: 5.6, repeat: Infinity, delay: 0.3 }}
        >
          <Heart className="floating-heart-small text-blue-400" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[85%] top-[94%] float-anim-tiny" 
          animate={{ y: [0, -18, 0] }} 
          transition={{ duration: 4.8, repeat: Infinity, delay: 1.4 }}
        >
          <Heart className="floating-heart-tiny text-violet-400" fill="none" />
        </motion.div>
        
        <motion.div 
          className="absolute left-[95%] top-[90%] drift-right" 
          animate={{ x: [0, 12, 0], y: [0, -16, 0] }} 
          transition={{ duration: 4.5, repeat: Infinity, delay: 0.6 }}
        >
          <Heart className="floating-heart-tiny text-cyan-400" fill="none" />
        </motion.div>
      </div>

      {/* Global styles for floating hearts */}
      <style jsx global>{`
        /* Floating hearts throughout page */
        .floating-heart {
          position: absolute;
          width: 32px;
          height: 32px;
          opacity: 0.9;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.08));
        }
        .floating-heart-small {
          position: absolute;
          width: 24px;
          height: 24px;
          opacity: 0.7;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.06));
        }
        .floating-heart-tiny {
          position: absolute;
          width: 16px;
          height: 16px;
          opacity: 0.5;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.04));
        }
        
        @keyframes floatUp {
          0% { transform: translateY(0) scale(0.95); opacity: 0.9; }
          50% { transform: translateY(-18px) scale(1.05); opacity: 1; }
          100% { transform: translateY(-36px) scale(0.98); opacity: 0.85; }
        }
        @keyframes floatUpSmall {
          0% { transform: translateY(0) scale(0.9) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-12px) scale(1.1) rotate(5deg); opacity: 0.9; }
          100% { transform: translateY(-24px) scale(0.95) rotate(-3deg); opacity: 0.6; }
        }
        @keyframes floatUpTiny {
          0% { transform: translateY(0) scale(0.8) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-8px) scale(1.2) rotate(-8deg); opacity: 0.8; }
          100% { transform: translateY(-16px) scale(0.9) rotate(4deg); opacity: 0.4; }
        }
        @keyframes driftLeft {
          0% { transform: translateX(0) translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateX(-20px) translateY(-15px) rotate(10deg); opacity: 0.9; }
          100% { transform: translateX(-40px) translateY(-30px) rotate(-5deg); opacity: 0.4; }
        }
        @keyframes driftRight {
          0% { transform: translateX(0) translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateX(20px) translateY(-15px) rotate(-10deg); opacity: 0.9; }
          100% { transform: translateX(40px) translateY(-30px) rotate(5deg); opacity: 0.4; }
        }
        
        .float-anim { animation: floatUp 4.5s ease-in-out infinite; }
        .float-anim-small { animation: floatUpSmall 3.8s ease-in-out infinite; }
        .float-anim-tiny { animation: floatUpTiny 3.2s ease-in-out infinite; }
        .drift-left { animation: driftLeft 6s ease-in-out infinite; }
        .drift-right { animation: driftRight 5.5s ease-in-out infinite; }
      `}</style>
    </>
  );
};

export default FloatingHearts;