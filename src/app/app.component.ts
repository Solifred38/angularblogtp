import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon Blog';
  
  posts = [
    {
      title: 'Mon post à moi 1',
      content: 'Ceci est mon premier post',
      created_date: '19/10/2015'
    },
    {
      title: 'Mon post 2',
      content: 'Ceci est mon deuxième post ',
      created_date: '19/10/2015'
    },
    {
      title: 'Mon post 3',
      content: 'Ceci est mon troisième post Et oui!',
      created_date: '19/10/2015'
    }
  ];

  constructor(){}
}
