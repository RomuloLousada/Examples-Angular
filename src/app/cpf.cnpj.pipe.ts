import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfcnpj'
})
export class CpfCnpjPipe implements PipeTransform {

  transform(string: string, type: string): string {
    switch (type.toLocaleLowerCase()) {
      case 'cpf':
        return string.substring(0, 3) + '.' + 
          string.substring(3, 6) + '.' +
          string.substring(6, 9) + '-' +
          string.substring(9);
      case 'cnpj':
        return string.substring(0, 2) + '.' +
          string.substring(2, 5) + '.' +
          string.substring(5, 8) + '/' +
          string.substring(8, 12) + '-' +
          string.substring(12);
      default:
        return 'Informe no segundo parâmetro o tipo de formatação (cpf ou cnpj)';
    }
  }

}
