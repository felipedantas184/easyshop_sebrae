import EmptyCart from "@/components/Checkout/EmptyCart";
import Layout from "@/layout";
import { useSelector } from "react-redux";

export default function CheckoutPage() {
  const cart = useSelector((state: any) => state.cart);

  const products = [
    {
      id: "32hYyvpQfro2DrPaLbsi",
      description: "O iPhone 15 e o iPhone 15 Plus trazem a Dynamic Island, câmera grande-angular de 48 MP e USB-C. Tudo em um vidro resistente colorido por infusão e design em alumínio.",
      brand: "Apple",
      title: "iPhone 15 ",
      imageUrl: [
        "https://firebasestorage.googleapis.com/v0/b/wpp-catalog.appspot.com/o/images%2F32hYyvpQfro2DrPaLbsi%2Fiphone15-128gb.webpe4c732b6-96ba-427a-8e1c-8378618271f3?alt=media&token=b1be89f6-e941-4516-8f15-83322d6e4188"
      ],
      category: "Celulares",
      variants: {
        c280557e7605 : {
          stock: 10,
          promotional: "4200",
          price: 4500,
          name: "128Gb"
        },
        j825705e0576 : {
          stock: 20,
          name: "256Gb",
          promotional: null,
          price: 4800,
        }
      },
    },
    {
      id: "91CMnwEoTf0o6q2Wt0IP",
      variants: {
        a370557e8704 : {
          name: "256Gb",
          stock: 15,
          price: 5500,
          promotional: 5200
        },
        d380557e6750 : {
          stock: 10,
          price: 6000,
          name: "512Gb",
          promotional: 5500
        }
      },
      description: "O iPhone 16 e o iPhone 16 Plus trazem a Dynamic Island, câmera grande-angular de 48 MP e USB-C. Tudo em um vidro resistente colorido por infusão e design em alumínio.",
      imageUrl: [
        "https//firebasestorage.googleapis.com/v0/b/wpp-catalog.appspot.com/o/images%2F91CMnwEoTf0o6q2Wt0IP%2Fiphone16-256gb.webpb97f3ec3-e315-4153-a169-4d66a1d56938?alt=media&token=136f61eb-589a-499a-a050-2419cb13a78d"
      ],
      brand: "Apple",
      category: "Celulares",
      title: "iPhone 16"
    }
  ]


  console.log(Object.entries(products[0].variants))

  return(
    <Layout>
     
    </Layout>
  );
}