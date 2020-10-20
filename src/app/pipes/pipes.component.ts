import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  visible: boolean = false;
  visibleLowerUpper: boolean = false;
  visibleNumbers: boolean = false;
  visibleDate: boolean = false;
  visibleCep: boolean = false;
  visibleCpfCnpj: boolean = false;
  visibleImpure: boolean = false;

  randomString: string = "A random string to be used in Pipes.";
  randomNumber: number = 12345.67890;
  randomDate = new Date();

  validCep: string = "12345678";
  invalidCep: string = "123456789";

  randomCpf: string = "11122233344";
  randomCnpj: string = "11222333444411";

  strings: string[] = ['Cachorro', 'Gato'];
  newString: string;

  toggleVisibility() {
    this.visible = !this.visible;
  }

  addStringInArray(string: string) {
    if (this.newString != '') {
      this.strings.push(this.newString);
    }
  }
}
