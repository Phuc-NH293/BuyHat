import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../interfaces/Product';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent implements OnInit{

  productId!: any;
    product!: Product;
  constructor(
    private router:Router,
      private route: ActivatedRoute,
      private productService: ProductService
  ) {}

  ngOnInit(): void {
    
      this.productId = this.route.snapshot.paramMap.get('id');
      this.getProductById(this.productId);
  }

  getProductById(id: string): void {
      this.productService.getProductById(id)
          .subscribe(product => this.product = product);
  }

  onSubmit(): void {
      this.productService.Update(this.product)
          .subscribe(() => {
            alert("Sửa thành công")
            this.router.navigate(['/admin']);
            
          });
  }

 
}
