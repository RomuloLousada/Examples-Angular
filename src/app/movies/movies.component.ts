import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  titulo: string = "Filmes";

  movies = [
    { name: 'Os Vingadores', rating: 5 },
    { name: 'Joias Brutas', rating: 3 },
    { name: 'Parasita', rating: 5 },
    { name: 'O Irlandês', rating: 4 },
    { name: 'Pantera Negra', rating: 4 }
  ];
}
