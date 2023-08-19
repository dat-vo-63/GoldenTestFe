import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/model/item';
import { Product } from 'src/model/product';
@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    constructor(private http: HttpClient) { }
    // baseUrl = "https://goldentest.onrender.com"
    baseUrl ="http://localhost:9090"
    showProduct = "AllProduct"
    addProductToCart = "check/addItem"
    showProductFromCart = "check/seeDetails"
    showAllProductMoney = "check/getAllCost"
    removeProduct = "check/delete"
    updateQuantityShoes = "check/updateQuantity"
    findItemById = "check/getShoesById"
    getAllProduct(): Observable<Array<Product>> {
        return this.http.get<Array<Product>>(`${this.baseUrl}/${this.showProduct}`, {
        })
      }
      addShoes(id:number): Observable<Item> {
        return this.http.post<Item>(`${this.baseUrl}/${this.addProductToCart}`, {
          "id": id
        })
      }
    getAllProductFromCart():Observable<Array<Item>>{
      return this.http.get<Array<Item>>(`${this.baseUrl}/${this.showProductFromCart}`, {
      })
    }
    updateQuantity(id:number, quantity:number):Observable<Item>{
      return this.http.post<Item>(`${this.baseUrl}/${this.updateQuantityShoes}`, {
        "id": id,
        "quantity": quantity
      })
    }
    deleteShoes(id:number): Observable<string> {
      return this.http.post<string>(`${this.baseUrl}/${this.removeProduct}`, {
        "id": id
      })
    }
    getTotalCost():Observable<any>{
      return this.http.get<any>(`${this.baseUrl}/${this.showAllProductMoney}`, {
      })
    }
    findProduct(id:number): Observable<boolean> {
      return this.http.post<boolean>(`${this.baseUrl}/${this.findItemById}`, {
        "id": id
      })
    }
}