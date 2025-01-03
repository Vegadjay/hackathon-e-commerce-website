'use client'

import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  className ? :string;
  error:string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange
}) => (
  <motion.div
    variants={itemVariants}
    className="group"
  >
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <motion.input
      whileFocus={{ scale: 1.01 }}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-xl border-2 border-orange-100 focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all bg-white/50 backdrop-blur-sm"
    />
  </motion.div>
);