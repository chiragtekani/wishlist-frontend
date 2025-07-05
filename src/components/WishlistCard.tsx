import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wishlist } from "../types";
import { Heart } from "lucide-react";

type Props = {
  wishlist: Wishlist;
};

export default function WishlistCard({ wishlist }: Props) {
  return (
    <motion.div
      data-aos="fade-up"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow p-5 border hover:shadow-lg hover:border-blue-400 transition"
    >
      <Link to={`/wishlist/${wishlist._id}`} className="block space-y-1">
        <div className="flex items-center gap-2">
          <Heart size={18} className="text-pink-500" />
          <h3 className="text-xl font-semibold text-blue-600">
            {wishlist.name}
          </h3>
        </div>
        <p className="text-sm text-gray-500">Created by: {wishlist.owner}</p>
      </Link>
    </motion.div>
  );
}
