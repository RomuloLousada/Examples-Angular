import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cep'
})

export class CepPipe implements PipeTransform{
    
    transform(cep: string): string {
        if (cep.length === 8) {
            return cep.substr(0, 5) + '-' + cep.substr(5);
        } else {
            return "Formato de cep inválido: String deve conter exatamente 8 números";
        }
    }

}