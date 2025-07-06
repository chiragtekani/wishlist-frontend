import { Pencil, Trash2 } from "lucide-react";
import { WishlistItem } from "../types";
import { motion } from "framer-motion";

interface Props {
  item: WishlistItem;
  onDelete: (id: string) => void;
  onEdit: (item: WishlistItem) => void;
}

/**
 * A card component for displaying a single WishlistItem.
 *
 * It displays the item's image, name, price, and who added it.
 * It also provides two buttons for editing or deleting the item.
 *
 * @param {WishlistItem} item
 * @param {(id: string) => void} onDelete
 * @param {(item: WishlistItem) => void} onEdit
 * @returns
 */
export default function WishlistItemCard({ item, onDelete, onEdit }: Props) {
  return (
    <motion.div
      data-aos="fade-up"
      className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-md border"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-600 mb-1">₹{item.price}</p>
          <p className="text-xs text-gray-500">
            Added by <span className="font-medium">{item.addedBy}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(item)}
            className="text-blue-500 hover:text-blue-700 transition"
            title="Edit"
          >
            <Pencil size={18} />
          </button>
          <button
            onClick={() => onDelete(item._id)}
            className="text-red-500 hover:text-red-700 transition"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
