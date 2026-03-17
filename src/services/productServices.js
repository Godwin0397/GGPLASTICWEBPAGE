import { instance } from "./instance";

const productServices = {
    allProducts: async () => {
        return await instance.get('/products')
    }
}

export default productServices;