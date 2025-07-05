import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import WishlistItemCard from "../components/WishlistItemCard";
import { WishlistItem } from "../types";
import { useAuth } from "../contexts/AuthContext";

export default function WishlistPage() {
  const { id } = useParams();
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`/api/wishlist/${id}`)
      .then((res) => res.json())
      .then((data) => setItems(data.items));
  }, [id]);

  const handleDelete = async (itemId: string) => {
    await fetch(`/api/wishlist/${id}/item/${itemId}`, {
      method: "DELETE",
    });
    setItems((prev) => prev.filter((i) => i._id !== itemId));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const payload = {
      name,
      image,
      price,
      addedBy: user.username,
    };

    let response;
    if (editingId) {
      response = await fetch(`/api/wishlist/${id}/item/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      response = await fetch(`/api/wishlist/${id}/item`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }

    const updatedItem = await response.json();

    setItems((prev) =>
      editingId
        ? prev.map((item) => (item._id === editingId ? updatedItem : item))
        : [...prev, updatedItem]
    );

    setName("");
    setImage("");
    setPrice(0);
    setEditingId(null);
  };

  const handleEdit = (item: WishlistItem) => {
    setName(item.name);
    setImage(item.image);
    setPrice(item.price);
    setEditingId(item._id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Wishlist Items</h2>

      {/* 🔗 Invite Others (Mocked) */}
      <div className="border p-4 rounded bg-green-50">
        <p className="text-sm mb-2">Invite others to join this wishlist</p>
        <input
          type="text"
          placeholder="Enter email (mocked)"
          className="w-full p-2 border rounded mb-2"
        />
        <button className="bg-green-600 text-white px-3 py-1 rounded">
          Send Invite
        </button>
        <p className="text-xs text-gray-500 mt-1">
          * This is just a mock invite feature.
        </p>
      </div>

      {/* 📝 Add/Edit Product Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 border p-4 rounded bg-gray-50"
      >
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="url"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingId ? "Update" : "Add"} Product
        </button>
      </form>

      {/* 📦 Wishlist Items List with AnimatePresence */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <WishlistItemCard
              key={item._id}
              item={item}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
