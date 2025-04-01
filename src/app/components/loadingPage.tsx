"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen(): JSX.Element {
  const [loading, setLoading] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-black text-white p-4">
      {/* Centered Image */}
      <div className="flex justify-center items-center mb-8">
        <Image src="/pic1.jpg" alt="Random" width= {32} height={32} className="h-32 w-32 object-cover rounded-lg" />
      </div>
      
      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4"
      >
        {loading}%
      </motion.div>

      <p className="text-center text-sm max-w-lg">
        Almost there...
      </p>
    </div>
  );
}