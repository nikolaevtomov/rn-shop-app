export interface ProductProps {
  id: string;
  ownerId: string;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}

export interface StoreState {
  products: Array<ProductProps>;
  card: Array<ProductProps>;
}
