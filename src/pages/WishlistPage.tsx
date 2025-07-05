import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WishlistItemCard from "../components/WishlistItemCard";
import { WishlistItem } from "../types";

export default function WishlistPage() {
  const { id } = useParams();
  const [items, setItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    fetch(`/api/wishlist/${id}`)
      .then((res) => res.json())
      .then((data) => setItems(data.items));
  }, [id]);

  const handleDelete = (itemId: string) => {
    setItems(items.filter((i) => i._id !== itemId));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h2 className="text-2xl font-bold">Wishlist Items</h2>
      {items.map((item) => (
        <WishlistItemCard key={item._id} item={item} onDelete={handleDelete} />
      ))}
    </div>
  );
}
