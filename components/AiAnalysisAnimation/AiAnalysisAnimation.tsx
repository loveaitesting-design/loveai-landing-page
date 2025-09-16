"use client";

import { motion } from "framer-motion";

export default function AiAnalysisAnimation() {
  // For elements that need to move toward center during breathing
  const createBreathingRotationAnimation = (radius: number, speed: number) => ({
    animate: {
      rotate: 360,
      transition: {
        duration: speed,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  });

  return (
    <div
      style={{ background: "#fff" }}
      className="flex items-center justify-center rounded-full"
    >
      <div className="relative w-96 h-96">
        {/* Background concentric circles */}
        <div className="absolute inset-0 rounded-full border-2 border-cyan-200/50" />
        <div className="absolute inset-8 rounded-full border border-cyan-200/30" />
        <div className="absolute inset-20 rounded-full bg-cyan-200/50" />

        {/* Central profile photo - stays fixed with breathing */}
        <motion.div
          className="absolute w-20 h-20 rounded-full overflow-hidden border-8 border-cyan-400 shadow-lg z-20"
          style={{
            top: "40%",
            left: "40.1%",
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 1 }}
        >
          <img
            src="centralprofile.png?height=80&width=80"
            alt="Central profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Additional border layer above profile photo */}
        <motion.div
          className="absolute w-24 h-24 rounded-full border-8 border-cyan-300/60 z-5"
          style={{
            top: "38%",
            left: "38%",
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 1 }}
        />
        {/* Icons ring - positioned on outside border */}
        <motion.div
          className="absolute inset-0"
          variants={createBreathingRotationAnimation(150, 4)}
          animate="animate"
        >
          {/* Message icon - stays inside the circle */}
          <motion.div
            className="absolute w-10 h-10 bg-transparent rounded-full flex items-center justify-center z-30"
            style={{ top: "25%", left: "22%" }}
            initial={{ rotate: 0 }}
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <img src="message.png" className="w-7 h-7" />
          </motion.div>

          {/* Evenly spaced icons using trigonometry and dynamic offset */}
          {(() => {
            const icons = [
              { src: "animout1.png", className: "w-14 h-14", size: 56 },
              { src: "animout5.png", className: "w-10 h-10", size: 56 },
              { src: "animout3.png", className: "w-12 h-12", size: 48 },
              { src: "animout2.png", className: "w-16 h-16", size: 64 },
              { src: "animout4.png", className: "w-8 h-12", size: 56 },
            ];
            const center = 190; // w-96 = 384px, so center is 192px
            const radius = 185; // px, moved icons further outside
            return icons.map((icon, i) => {
              const angle = (2 * Math.PI * i) / icons.length - Math.PI / 2; // start from top
              const x = center + radius * Math.cos(angle) - icon.size / 2;
              const y = center + radius * Math.sin(angle) - icon.size / 2;
              return (
                <motion.div
                  key={i}
                  className={`absolute bg-transparent rounded-full flex items-center justify-center z-30 ${icon.className}`}
                  style={{ left: x, top: y }}
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <img src={icon.src} className={icon.className} />
                </motion.div>
              );
            });
          })()}
        </motion.div>

        {/* Background glow with rotation */}
        <motion.div
          className="absolute inset-12 rounded-full bg-gradient-to-r from-cyan-200/20 to-blue-200/20 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: 360,
          }}
          transition={{
            scale: {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
            opacity: {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
            rotate: {
              duration: 35,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
          }}
        />
      </div>
    </div>
  );
}
