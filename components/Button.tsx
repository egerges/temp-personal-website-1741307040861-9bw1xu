import { motion } from "framer-motion";
import Link from "next/link";

import { cn } from "@lib/utils";

interface ButtonProps {
  text: string;
  link: string;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ text, link, variant = "primary" }) => {
  const buttonStyles = cn(
    "px-6 py-3 rounded-lg font-medium text-lg transition-transform transform hover:scale-105 focus:ring-2 focus:ring-offset-2",
    variant === "primary"
      ? "px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-xl transition"
      : "bg-gradient-to-r from-[var(--color-blue-primary)] to-[var(--color-blue-dark)] text-[var(--gray-light)] hover:from-[var(--color-blue-light)] hover:to-[var(--color-blue-primary)] focus:ring-[var(--color-blue-light)]"
  );

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={buttonStyles}
      data-cursor-color={variant === "primary" ? "var(--color-blue-primary)" : "var(--color-pink-primary)"}
    >
      <Link href={link}>{text}</Link>
    </motion.div>
  );
};

export default Button;
