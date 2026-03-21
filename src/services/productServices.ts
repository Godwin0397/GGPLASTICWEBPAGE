import { instance } from "./instance";

interface Product {
    type: string;
    productName: string;
    productURL: string;
  }

type ProductResponse = {
    allProducts: Product[]
}

const productServices = {
    allProducts: async () => {
        return await instance.get<ProductResponse>('/products')
    }
}

export default productServices;