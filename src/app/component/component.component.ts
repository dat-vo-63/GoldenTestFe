import { Component, OnInit } from '@angular/core';
import { Item } from 'src/model/item';
import { Product } from 'src/model/product';
import { ProductExits } from 'src/product.interface';
import { ProductService } from 'src/service/productService';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  listProduct ?: Array<Product>
  listProductFromCart: Item[] = []
  msg:any
  isAddButtonDisabled?:boolean[]= new Array(this.listProduct?.length).fill(false);
  check:Item = new Item(0,0,0,"","","") ;
  buttonStates: { [key: number]: boolean } = {};


  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.getAllProduct();
    this.getAllProductFromCart()
    this.getTotalCost()
    
  }
  updateQuantityShoes(id:number,quantity:number){
    this.productService.updateQuantity(id,quantity).subscribe(res=>{
      res
    })
    this.getTotalCost();
    this.getAllProductFromCart();
  }
  deleteShoes(id : number){
    this.productService.deleteShoes(id).subscribe(res => {
      res
    })
    this.getAllProductFromCart()
    this.getTotalCost()
  }
  getAllProduct() {
    this.productService.getAllProduct().subscribe(res => {
      this.listProduct = res
    })
  }
  getAllProductFromCart(){
    this.productService.getAllProductFromCart().subscribe(res => {
      this.listProductFromCart = res
    })
  }
  getTotalCost(){
    this.productService.getTotalCost().subscribe(res => {
      this.msg = res
    })
  }
  addItem(id:number){
    this.productService.addShoes(id).subscribe(res=>{
      this.getAllProductFromCart()
      this.getTotalCost()
      this.isInCart(id)
      return res
    }
    )
    
   
  }
  
  findProductById(id: number){
    this.productService.addShoes(id).subscribe(res=>{
      this.check = res;
      return res
    })
  }
  isListEmpty() {
    if (this.listProductFromCart?.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  isInCart(id:number){
    this.productService.findProduct(id).subscribe(res=>{

    })
  }


 
 
}
  


