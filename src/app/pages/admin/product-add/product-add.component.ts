import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup, FormsModule, ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Product } from '../../../interfaces/Product';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule ,RouterModule,FormsModule, ReactiveFormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss'
})
export class ProductAddComponent implements OnInit {
  product:Product={} as Product
productForm: FormGroup= {} as FormGroup
  constructor(private productService: ProductService, private router: Router , private fb : FormBuilder){
    this.productForm=this.fb.group({
      title:['',[Validators.required,Validators.minLength(3)]],
      price:[0,[Validators.required,Validators.min(0)]],
      description:['',[Validators.required,Validators.minLength(3)]],
    })
  }
 
  ngOnInit(): void {
    
  }
  handleSubmit(){
    if(this.productForm.valid){
      console.log(this.productForm.value);
      this.productService.createProduct(this.productForm.value).subscribe((data) => {
          alert("Thành công")
        console.log("Success",data);
        this.router.navigate(['/admin'])
      })
    }
   }
  }
