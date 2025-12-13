import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FeedbackOverlay = ({ isVisible, type }) => {
  const isSuccess = type === "success";
  const bgColor = isSuccess
    ? "bg-gradient-to-br from-green-500 to-emerald-600"
    : "bg-gradient-to-br from-red-500 to-rose-600";

  const icon = isSuccess ? (
    // Checkmark
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="60"
        cy="60"
        r="55"
        stroke="white"
        strokeWidth="8"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 11, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.path
        d="M30 60L50 80L90 40"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      />
    </motion.svg>
  ) : (
    // X mark
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="60"
        cy="60"
        r="55"
        stroke="white"
        strokeWidth="8"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 11, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.path
        d="M40 40L80 80M80 40L40 80"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      />
    </motion.svg>
  );

  const message = isSuccess
    ? "Thank you! I'll get back to you as soon as possible!"
    : "Failed to send email. Please try again later!";

  const title = isSuccess ? "Message Sent!" : "Oops! Something went wrong";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed inset-0 z-50 flex items-center justify-center ${bgColor}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex flex-col items-center gap-6 px-8 text-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.1,
            }}
          >
            {/* Animated icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
            >
              {icon}
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {title}
            </motion.h2>

            {/* Message */}
            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {message}
            </motion.p>

            {/* Progress bar showing auto-close */}
            <motion.div
              className="w-64 h-1 bg-white/30 rounded-full overflow-hidden mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 3, ease: "linear", delay: 0.7 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeedbackOverlay;
