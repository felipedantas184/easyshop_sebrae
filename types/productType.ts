type Product = {
  id: string,
  title: string,
  brand: string,
  imageUrl: string[],
  featureImage: string,
  description: string,
  price: number,
  stock: number,
}

type NewProduct = {
  title: string,
  brand: string,
  description: string,
  price: number,
  stock: number,
}

type OrderCart = {
  id: string,
  quantity: number
}

type Order = {
  id: string,
  amount: number,
  cart: OrderCart[],
  date: string,
  deliveryType: string,
  delivery?: {
    zipCode: string,
    address: string,
    complement: string,
    district: string,
    number: string,
    city: string,
    state: string,
  }
  paymentMethod: string,
  personal: {
    cpf: string,
    email: string,
    name: string,
    phone: string
  },
}

type CartItem = {
  id: string,
  title: string,
  brand: string,
  imageUrl: string[],
  featureImage: string,
  description: string,
  price: number,
  stock: number,
  quantity: number,
}

export type {
  Product,
  NewProduct,
  CartItem,
  Order
}