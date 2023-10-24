export interface Order {
  products: Products[];
  userId: string;
  totalSalePrice: number;
}

interface Products {
  quantity: number;
  name: string;
  price: number;
}
