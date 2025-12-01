import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';//angular library ngif and ngFor
import {Api} from '../api';//class from Api.ts
import {Router} from '@angular/router'; //navigation

@Component({
  selector: 'app-products-pg1',
  imports: [CommonModule],
  templateUrl: './products-pg1.html',
  styleUrl: './products-pg1.css',
})
export class ProductsPg1 implements OnInit { //ngOnInit gets data from backend api and runs when Angular is done
  products:any[] = []; //store products from ApI

  constructor(//Angukar component inside declaring dependencies that Angular should provide when class is created=injection
    private api: Api, //makes Api class vaible 
    private router :Router, //gives Angular ROuter to navigate between pagesS
    private cdr:ChangeDetectorRef
  ){}

  ngOnInit(){
    this.api.getProducts().subscribe((data:any)=>{ //get product data by calling api-> .subscribe(): listens to data as it comes not later-> tells Angular to run function as data comesS
      console.log('Data is flowing', data);
      this.products=data; //store data in array 
      console.log('products:', this.products);
      console.log(' products.length:', this.products.length);
      this.cdr.detectChanges();//triggers chnage detection bec products not appearing in page
      // WORKED!! do for pg2
    });
  }

  buy(product:any){ //runs when user clicks buy button
    this.api.selectProduct(product).subscribe(()=>{ //send product to backend
      this.router.navigate(['/review']); //navigate to review page
    });

  }
}
