import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product } from '../../../interfaces/Product';
import { ProductService } from './../../../product.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,CommonModule,HttpClientModule  ,ReactiveFormsModule   ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit {

  products!: Product[] ;
  router: any;

  constructor(private producservice: ProductService) {}
  ngOnInit() {
    this.producservice.getProducts().subscribe((Data) => {
      this.products = Data;  
    }
  );
  }
  removeProduct(id: string |number| undefined ){
    const cf = window.confirm('Bạn có muốn xóa không')
    if(cf){
      this.producservice.deleteProduct(id).subscribe({
        next:(Data:any)=>{
          alert('xóa thành công')
          this.producservice.getProducts().subscribe(data=>{
           this.products=data
            
          });
          this.router.navigate(['/admin'])  
        }
      }
    )
    }else{
      alert("chưa xóa")
    }    
  }

}