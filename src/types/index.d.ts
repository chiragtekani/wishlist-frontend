// src/types.ts (Example)
export interface User {
  userId: string;
  email: string;
  username: string; 
}

export interface Wishlist {
  _id: string;
  title: string;
  owner: string; // This should be a User object or ID
  members: string[]; // Array of User IDs
  items: WishlistItem[];
  createdAt: string;
  updatedAt: string;
}

export interface WishlistItem {
  addedBy: ReactNode;
  _id: string;
  name: string;
  image: string;
  price: number;
  wishlistId: string;
  createdBy: string; // User ID
  editedBy?: string; // Optional User ID
}