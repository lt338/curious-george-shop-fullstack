//logic for pg2

import { Component,OnInit, ChangeDetectorRef } from '@angular/core';//in pg1.ts
import{CommonModule} from '@angular/common';//in pg1.ts
import{Api} from '../api';//in pg1.ts
import{Router} from '@angular/router';//in pg1.ts

@Component({
  selector: 'app-review-pg2',
  imports: [CommonModule],
  templateUrl: './review-pg2.html',
  styleUrl: './review-pg2.css',
})
export class ReviewPg2 implements OnInit{//in pg1.ts
  product:any=null; //product is stored as nothing until smt is slected-->in pg1.ts
  message: string= ''; //stores comfermation message as nothing until order

  constructor( //injection-> takes cless -> obj -> gives to my componenst or pgs.ts
    private api:Api,//in pg1.ts
    private router: Router,//in pg1.ts
    private  cdr: ChangeDetectorRef

  ){}

  ngOnInit(){//in pg1.ts
    this.api.getSelectedProduct().subscribe((data: any)=>{//in pg1.ts
      this.product=data;
      this.cdr.detectChanges();
    });


  }

  submitOrder(){
    this.api.submitOrder(this.product).subscribe((response:any)=>{ //takes from api.ts
      this.message=response.message; //take comfermation message form backend
      this.cdr.detectChanges();
    });
  }



}
