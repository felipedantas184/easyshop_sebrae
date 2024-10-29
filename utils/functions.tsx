import fireDB, { storage } from "@/firebase/initFirebase"
import { NewProduct, Order } from "@/types/productType"
import { addDoc, collection, deleteDoc, doc, increment, updateDoc } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { useRouter } from "next/router"
import { v4 } from "uuid"

export async function deleteOrder(order: Order) {
  try {
    if (confirm("Você tem certeza de que deseja cancelar este pedido?") == true) {
      await deleteDoc(doc(fireDB, "orders", order.id)).then(function() {
        order.cart.map((product : any) => (
          updateDoc(doc(fireDB, "products", product.id), {
            stock: increment(product.quantity)
          })
        ))
      })
      alert("Pedido excluído e estoque atualizado!")
    } 
  } catch (error) {
  alert(error)
}}

export async function deleteProduct(productId: string) {
  try {
    if (confirm("Você tem certeza de que deseja excluir este produto?") == true) {
      await deleteDoc(doc(fireDB, "products", productId)).then(function () {
        alert("Produto excluído!")
      })
    }
  } catch (error) {
    alert(error)
  }
} 

export const addProduct = async (imageUpload : any, newProduct : NewProduct, router : any) => {
  try {
    if (imageUpload == null) return;
    var imagesUrls: any = []

    await addDoc(collection(fireDB, "products"), {
      title: newProduct.title,
      brand: newProduct.brand,
      description: newProduct.description,
      price:  Number(newProduct.price),
      stock:  Number(newProduct.stock),
    }).then(async (docRef) => {
      for (let i = 0; i < imageUpload.length; i++) {
        const imageRef = ref(storage, `images/${docRef.id}/${imageUpload[i].name + v4()}`);
        await uploadBytes(imageRef, imageUpload[i]).then(async (snapshot) => {
          await getDownloadURL(snapshot.ref).then((url) => {
            imagesUrls.push(url)
          })
        })
      }
      updateDoc(doc(fireDB, "products", docRef.id), {
        imageUrl: imagesUrls,
      })
    })
    alert("Produto adicionado com sucesso!")
    router.push({ pathname: '/' })
  } catch (error) {
    alert(error)
  }
}