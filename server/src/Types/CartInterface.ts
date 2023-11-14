import ProductInterface from "./ProductInterface";

export default interface Cart {
  id: number;
  product: ProductInterface;
  quantity: number;
  userId: number;
  totalPrice: number;
}
