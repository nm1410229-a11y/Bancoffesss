export interface MenuItem {
  id: string;
  name: string;
  category: 'hot' | 'cold' | 'pastry';
  price: number;
  description: string;
  image: string;
  tag?: string;
  calories?: string;
  rating: number;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  size?: 'Regular' | 'Large';
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  favorite: string;
  date: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}
