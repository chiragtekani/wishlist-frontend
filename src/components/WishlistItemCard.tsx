import { Trash2, Edit } from "lucide-react";
import { motion } from "framer-motion";
import { WishlistItem } from "../types";

type Props = {
  item: WishlistItem;
  onDelete: (id: string) => void;
  onEdit?: (item: WishlistItem) => void;
};

export default function WishlistItemCard({ item, onDelete, onEdit }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      className="p-4 border rounded-lg bg-white flex items-center justify-between shadow"
    >
      <div className="flex gap-4 items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded object-cover"
        />
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-gray-500">₹{item.price}</p>
          <p className="text-xs text-muted-foreground">
            Added by {item.addedBy}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        {onEdit && (
          <button onClick={() => onEdit(item)} className="text-blue-500">
            <Edit size={16} />
          </button>
        )}
        <button onClick={() => onDelete(item._id)} className="text-red-500">
          <Trash2 size={16} />
        </button>
      </div>
    </motion.div>
  );
}
