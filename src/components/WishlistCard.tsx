// src/components/WishlistCard.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wishlist } from "../types";

type Props = {
  wishlist: Wishlist;
};

export default function WishlistCard({ wishlist }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow p-4 border hover:shadow-md"
    >
      <Link to={`/wishlist/${wishlist._id}`}>
        <h3 className="text-xl font-semibold text-blue-600 mb-2">
          {wishlist.name}
        </h3>
        <p className="text-sm text-gray-500">Created by: {wishlist.owner}</p>
      </Link>
    </motion.div>
  );
}
