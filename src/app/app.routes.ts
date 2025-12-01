//tells angular where your components r -> page1 and 2 in directory

//import routing: nevigate between pages
import { Routes } from '@angular/router';

//import two page components 
import {ProductsPg1} from './products-pg1/products-pg1';//import class from directory
import {ReviewPg2} from './review-pg2/review-pg2';

//Define pages with directory from angular
export const routes: Routes = [
    {path: '', component: ProductsPg1},//user goes home: show product page
    {path: 'review', component:ReviewPg2}//review page
];
