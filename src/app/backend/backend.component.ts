import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Produto {
  id: number,
  nome: string,
  preco: number
}

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {

  constructor(private httpClient: HttpClient) {}

  url: string = 'http://localhost:3000/produtos';
  products: Produto[] = [];
  form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required, Validators.min(1)])
  });
  
  ngOnInit(): void {
    this.httpClient.get<Produto[]>(this.url).subscribe(data => {
      this.products = data;
    });
  }

  addProduct() {
    const product = this.form.value;

    this.httpClient.post<Produto>(this.url, product).subscribe(newProduct => {
      this.products = [...this.products, newProduct];

      //this.products.push(newProduct);
    });
  }

  deleteProduct(product: Produto) {
    this.httpClient.delete(`${this.url}/${product.id}`).subscribe(() => {
      const index = this.products.indexOf(product);
      this.products = [...this.products.slice(0, index), ...this.products.slice(index + 1)];

      //this.products.splice(index, 1);
    });
  }


  visible: boolean = false;

  toggleVisibility() {
    this.visible = !this.visible;
  }

}
