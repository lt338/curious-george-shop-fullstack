import { Injectable } from '@angular/core'; 
//router: connect your angular pages together
import{HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root',
})

//API file
export class Api {
  private backend='http://localhost:2001/api';

  
  storage: any = null; //store selected product in memory for any kind of daat

  constructor(private http: HttpClient){}//varible http for GET,POST-> in constructor: method runs when class created
  
  //1. GET all products from backend -> exp.get('/api/products', (req, res)=>{
  getProducts(){
    return this.http.get(`${this.backend}/products`); //GET the products: from backend port..
  }

  //2. POST selected products to backend
  selectProduct(product: any){
    this.storage=product;//show on revew page
    return this.http.post(`${this.backend}/select-product`,product); //Post product data client selected to backend
  }

  //3. GET selected product from backend 
  getSelectedProduct(){
    return this.http.get(`${this.backend}/selected-product`);//for method (http) get

  }

  //4. POST order
  submitOrder(order:any){
    return this.http.post(`${this.backend}/submit-order`,order);//grbs from backend

  }

}
