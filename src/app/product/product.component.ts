import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductID(): any {
    const url = this.router.serializeUrl(this.router.createUrlTree(['/product', '8088299']));
    window.open(url);
    console.log(url);
  }

  logout(): any {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
