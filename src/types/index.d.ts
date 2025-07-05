export interface User {
  email: string;
  username: string;
}

export interface Wishlist {
  _id: string;
  name: string;
  owner: string;
}

export interface WishlistItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  addedBy: string;
}
