import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function CreateWishlist() {
  const [name, setName] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const res = await fetch("http://localhost:5000/api/wishlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ title: name, owner: user.userId }),
    });
    if (res.ok) {
      navigate("/");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Create Wishlist</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Wishlist name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Create
        </button>
      </form>
    </div>
  );
}
