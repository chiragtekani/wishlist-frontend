import { useEffect, useState } from "react";
import WishlistCard from "../components/WishlistCard";
import { Wishlist } from "../types";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const [wishlists, setWishlists] = useState<Wishlist[]>([]);
  const [name, setName] = useState("");
  const { user } = useAuth();
  console.log("user ", user);
  // Fetch all wishlists
  const fetchWishlists = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/wishlist");
      const data = await res.json();

      if (!res.ok) {
        console.error("Error fetching wishlists:", data.message);
        setWishlists([]); // fallback
        return;
      }

      setWishlists(data); // ✅ Expecting an array
    } catch (err) {
      console.error("Unexpected error:", err);
      setWishlists([]);
    }
  };

  useEffect(() => {
    fetchWishlists();
  }, []);

  // Handle form submission to create new wishlist
  const handleCreateWishlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !user) return;

    const payload = {
      title: name, // ✅ Match the backend field
      owner: user.userId,
    };

    const res = await fetch("http://localhost:5000/api/wishlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const newWishlist = await res.json();
    setWishlists((prev) => [...prev, newWishlist]);
    setName("");
  };
  console.log("wishlistssss ", wishlists);
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      <h2 className="text-3xl font-bold mb-6">Your Wishlists</h2>

      {/* ➕ New Wishlist Form */}
      <form onSubmit={handleCreateWishlist} className="flex gap-3 items-center">
        <input
          type="text"
          placeholder="New wishlist name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full max-w-sm"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create
        </button>
      </form>

      {/* 🧾 Wishlists Display */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlists
          .filter((wishlist) => wishlist.owner._id === user?.userId)
          .map((wishlist) => (
            <WishlistCard key={wishlist._id} wishlist={wishlist} />
          ))}
      </div>
    </div>
  );
}
