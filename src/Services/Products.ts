import { Product } from './../Interface/Product';
import { AxiosResponse } from "axios";
import { Api } from "../Api/Axios";

// creating product
export const createProduct = async (product: Product) => {
    let req = await Api.post("products", product)
    return req.data;
  }
//listing product
export const listProducst = async () =>{
    let req: AxiosResponse = await Api.get('products')
    return req.data;
}
//Listing product by id
export const listProductById = async (id:string) => {
    let req: AxiosResponse = await Api.get(`products/${id}`)
    return req.data
}
//updating product by id
export const updateProductById = async (product: Product)  => {
    let req:AxiosResponse = await Api.put('products/' + product.id, product)
    return req.data
}
//deleting product by id
export const deleteItem = async (id:string)  => {
    let req:AxiosResponse = await Api.delete('products/' + id)
    return req.data
}
