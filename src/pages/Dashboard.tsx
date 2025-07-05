import { useEffect, useState } from "react";
import WishlistCard from "../components/WishlistCard";
import { Wishlist } from "../types";

export default function Dashboard() {
  const [wishlists, setWishlists] = useState<Wishlist[]>([]);

  useEffect(() => {
    fetch("/api/wishlist")
      .then((res) => res.json())
      .then((data) => setWishlists(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Your Wishlists</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlists.map((wishlist) => (
          <WishlistCard key={wishlist._id} wishlist={wishlist} />
        ))}
      </div>
    </div>
  );
}
