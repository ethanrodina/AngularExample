import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.servies';

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html"
})

export class ProductListComponent {
    pageTitle:string = "My Epic Products";
    imageWidth:number = 50;
    imageMargin:number = 4;
    showImage:boolean = true;
    _listFilter:string;
    filterProduct:IProduct[];
    products:IProduct[] = [];

      constructor(private productService:ProductService){
          console.log('peepee')        
      }

      ngOnInit():void{
        console.log("butthole")
        //this.products = productService.getProducts();
        this.productService.getProducts().subscribe({
            next: prodObserved => {this.products = prodObserved
                this.filterProduct = this.products;}})
      }

      toggleImage():void{
          this.showImage = !this.showImage
      }

      get listFilter():string{
          return this._listFilter
      } 
      set listFilter(value:string){
          this._listFilter = value
          this.filterProduct = this.listFilter ? this.performFilter(this.listFilter) : this.products
      }

      performFilter(filterBy:string): IProduct[]{
          filterBy = filterBy.toLowerCase();
          return this.products.filter((product:IProduct)=>
          product.productName.toLowerCase().indexOf(filterBy) !== -1)
      }

      onRatingClicked(message:string) : void {
        this.pageTitle = message
      }
}