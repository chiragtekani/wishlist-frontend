import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { motion } from "framer-motion";
import { LogOut, UserCircle } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50"
    >
      <Link to="/" className="text-xl font-bold text-blue-600">
        FlockShop
      </Link>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="flex items-center gap-1 text-gray-700">
              <UserCircle className="w-5 h-5" /> {user.username}
            </span>
            <button
              onClick={logout}
              className="flex items-center gap-1 text-sm text-red-500 hover:underline"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              Login
            </Link>
            <Link to="/signup" className="text-sm text-blue-600 font-medium">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </motion.nav>
  );
}
